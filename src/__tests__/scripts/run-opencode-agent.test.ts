import {
  mkdtempSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const scriptPath = join(process.cwd(), 'scripts', 'run-opencode-agent.sh');

function createMockOpencode(binDir: string) {
  const mockPath = join(binDir, 'opencode');
  const script = [
    '#!/usr/bin/env bash',
    'set -euo pipefail',
    'if [[ -n "${OPENCODE_MOCK_OUTPUT:-}" ]]; then',
    '  printf "%b\\n" "$OPENCODE_MOCK_OUTPUT"',
    'fi',
    'exit "${OPENCODE_MOCK_EXIT:-0}"',
  ].join('\n');

  writeFileSync(mockPath, script, { mode: 0o755 });
}

describe('run-opencode-agent.sh', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'run-opencode-agent-'));
    mkdirSync(join(tempDir, '.opencode', 'agents'), { recursive: true });
    writeFileSync(join(tempDir, '.opencode', 'agents', 'policy.md'), 'policy');
    writeFileSync(
      join(tempDir, '.opencode', 'agents', 'token-estimator.md'),
      'token-estimator'
    );

    const binDir = join(tempDir, 'bin');
    mkdirSync(binDir, { recursive: true });
    createMockOpencode(binDir);
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  it('blocks when agent returns Decision: FAIL and persists a hook log', () => {
    const result = spawnSync('bash', [scriptPath, 'policy', 'smoke test'], {
      cwd: tempDir,
      encoding: 'utf8',
      env: {
        ...process.env,
        PATH: `${join(tempDir, 'bin')}:${process.env.PATH || ''}`,
        OPENCODE_MOCK_OUTPUT:
          'Decision: FAIL\nViolations: bad thing\nRequired fixes before commit: fix it',
        OPENCODE_MOCK_EXIT: '0',
      },
    });

    expect(result.status).toBe(1);
    expect(result.stderr).toContain('OpenCode gate blocked by agent policy.');

    const logDir = join(tempDir, '.ai-metrics', 'hook-logs');
    const logs = readdirSync(logDir).filter(name => name.startsWith('policy-'));
    expect(logs.length).toBeGreaterThan(0);

    const logContent = readFileSync(join(logDir, logs[0]), 'utf8');
    expect(logContent).toContain('Decision: FAIL');
  });

  it('passes when agent returns Decision: PASS', () => {
    const result = spawnSync('bash', [scriptPath, 'policy', 'smoke test'], {
      cwd: tempDir,
      encoding: 'utf8',
      env: {
        ...process.env,
        PATH: `${join(tempDir, 'bin')}:${process.env.PATH || ''}`,
        OPENCODE_MOCK_OUTPUT: 'Decision: PASS\nViolations: None',
        OPENCODE_MOCK_EXIT: '0',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stderr).not.toContain('OpenCode gate blocked');
  });

  it('extracts CLI telemetry into .ai-metrics/token-estimate.json for token-estimator', () => {
    const jsonEvents = [
      '{"type":"step_start","sessionID":"ses_test_123","part":{"type":"step-start"}}',
      '{"type":"text","sessionID":"ses_test_123","part":{"text":"{\\"prompt_tokens\\":123,\\"completion_tokens\\":45,\\"delta_cost_usd\\":0.006}"}}',
      '{"type":"step_finish","sessionID":"ses_test_123","part":{"cost":0.006,"tokens":{"input":123,"output":45}}}',
    ].join('\n');

    const result = spawnSync(
      'bash',
      [scriptPath, 'token-estimator', 'extract telemetry'],
      {
        cwd: tempDir,
        encoding: 'utf8',
        env: {
          ...process.env,
          PATH: `${join(tempDir, 'bin')}:${process.env.PATH || ''}`,
          OPENCODE_MOCK_OUTPUT: jsonEvents,
          OPENCODE_MOCK_EXIT: '0',
        },
      }
    );

    expect(result.status).toBe(0);

    const payload = JSON.parse(
      readFileSync(join(tempDir, '.ai-metrics', 'token-estimate.json'), 'utf8')
    );

    expect(payload.prompt_tokens).toBe(123);
    expect(payload.completion_tokens).toBe(45);
    expect(payload.delta_cost_usd).toBe(0.006);
    expect(payload.session_id).toBe('ses_test_123');
    expect(payload.source).toBe('opencode-run-json');
  });
});
