import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const ledgerScriptPath = join(
  process.cwd(),
  'scripts',
  'update-token-ledger.cjs'
);

function run(command: string, args: string[], cwd: string) {
  const result = spawnSync(command, args, { cwd, encoding: 'utf8' });
  if (result.status !== 0) {
    throw new Error(
      result.stderr || result.stdout || `Command failed: ${command}`
    );
  }
}

function readLedger(repoDir: string) {
  const raw = readFileSync(
    join(repoDir, '.ai-metrics', 'token-ledger.json'),
    'utf8'
  );
  return JSON.parse(raw);
}

describe('update-token-ledger.cjs', () => {
  let tempRepo: string;

  beforeEach(() => {
    tempRepo = mkdtempSync(join(tmpdir(), 'token-ledger-'));
    run('git', ['init'], tempRepo);

    writeFileSync(join(tempRepo, 'README.md'), '# temp\n');
    run('git', ['add', 'README.md'], tempRepo);
    run(
      'git',
      [
        '-c',
        'user.name=Test User',
        '-c',
        'user.email=test@example.com',
        'commit',
        '-m',
        'init',
      ],
      tempRepo
    );
  });

  afterEach(() => {
    rmSync(tempRepo, { recursive: true, force: true });
  });

  it('creates ledger entries, avoids duplicates, and keeps a running branch total', () => {
    const firstRun = spawnSync(
      'node',
      [ledgerScriptPath, '--branch', 'feat/test'],
      {
        cwd: tempRepo,
        encoding: 'utf8',
        env: {
          ...process.env,
          OPENCODE_PROMPT_TOKENS: '100',
          OPENCODE_COMPLETION_TOKENS: '50',
          OPENCODE_DELTA_COST_USD: '1.5',
        },
      }
    );
    expect(firstRun.status).toBe(0);

    let ledger = readLedger(tempRepo);
    expect(ledger.entries).toHaveLength(1);
    expect(ledger.entries[0].branch).toBe('feat/test');
    expect(ledger.entries[0].running_cost_usd).toBe(1.5);

    const duplicateRun = spawnSync(
      'node',
      [ledgerScriptPath, '--branch', 'feat/test'],
      {
        cwd: tempRepo,
        encoding: 'utf8',
        env: {
          ...process.env,
          OPENCODE_PROMPT_TOKENS: '200',
          OPENCODE_COMPLETION_TOKENS: '100',
          OPENCODE_DELTA_COST_USD: '9.9',
        },
      }
    );
    expect(duplicateRun.status).toBe(0);

    ledger = readLedger(tempRepo);
    expect(ledger.entries).toHaveLength(1);
    expect(ledger.entries[0].delta_cost_usd).toBe(1.5);

    writeFileSync(join(tempRepo, 'README.md'), '# temp\nsecond\n');
    run('git', ['add', 'README.md'], tempRepo);
    run(
      'git',
      [
        '-c',
        'user.name=Test User',
        '-c',
        'user.email=test@example.com',
        'commit',
        '-m',
        'second',
      ],
      tempRepo
    );

    const secondRun = spawnSync(
      'node',
      [ledgerScriptPath, '--branch', 'feat/test'],
      {
        cwd: tempRepo,
        encoding: 'utf8',
        env: {
          ...process.env,
          OPENCODE_PROMPT_TOKENS: '150',
          OPENCODE_COMPLETION_TOKENS: '75',
          OPENCODE_DELTA_COST_USD: '0.5',
        },
      }
    );
    expect(secondRun.status).toBe(0);

    ledger = readLedger(tempRepo);
    expect(ledger.entries).toHaveLength(2);
    expect(ledger.entries[1].delta_cost_usd).toBe(0.5);
    expect(ledger.entries[1].running_cost_usd).toBe(2);
  });

  it('uses OpenCode CLI telemetry file when token env vars are not provided', () => {
    mkdirSync(join(tempRepo, '.ai-metrics'), { recursive: true });
    writeFileSync(
      join(tempRepo, '.ai-metrics', 'token-estimate.json'),
      JSON.stringify(
        {
          prompt_tokens: 321,
          completion_tokens: 111,
          delta_cost_usd: 0.009,
          session_id: 'ses_from_cli',
          source: 'opencode-run-json',
        },
        null,
        2
      ) + '\n'
    );

    const result = spawnSync(
      'node',
      [ledgerScriptPath, '--branch', 'feat/telemetry'],
      {
        cwd: tempRepo,
        encoding: 'utf8',
        env: {
          ...process.env,
        },
      }
    );

    expect(result.status).toBe(0);

    const ledger = readLedger(tempRepo);
    expect(ledger.entries).toHaveLength(1);
    expect(ledger.entries[0].prompt_tokens).toBe(321);
    expect(ledger.entries[0].completion_tokens).toBe(111);
    expect(ledger.entries[0].delta_cost_usd).toBe(0.009);
    expect(ledger.entries[0].telemetry_session_id).toBe('ses_from_cli');
    expect(ledger.entries[0].telemetry_source).toBe('opencode-run-json');
  });
});
