#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

function argValue(name) {
  const index = process.argv.indexOf(name);
  if (index === -1 || index + 1 >= process.argv.length) return '';
  return process.argv[index + 1];
}

function git(command) {
  return execSync(command, { encoding: 'utf8' }).trim();
}

function numberFromEnv(name) {
  if (!(name in process.env)) return null;
  const parsed = Number(process.env[name]);
  return Number.isFinite(parsed) ? parsed : null;
}

function readTokenTelemetry() {
  const telemetryPath = path.join(
    process.cwd(),
    '.ai-metrics',
    'token-estimate.json'
  );
  if (!fs.existsSync(telemetryPath)) return null;

  try {
    const parsed = JSON.parse(fs.readFileSync(telemetryPath, 'utf8'));
    return {
      prompt_tokens: Number(parsed.prompt_tokens || 0),
      completion_tokens: Number(parsed.completion_tokens || 0),
      delta_cost_usd: Number(parsed.delta_cost_usd || 0),
      session_id:
        typeof parsed.session_id === 'string' ? parsed.session_id : '',
      source: typeof parsed.source === 'string' ? parsed.source : '',
    };
  } catch {
    return null;
  }
}

const branch = argValue('--branch') || git('git rev-parse --abbrev-ref HEAD');
const commit = git('git rev-parse HEAD');
const timestamp = new Date().toISOString();

const telemetry = readTokenTelemetry();
const promptTokens =
  numberFromEnv('OPENCODE_PROMPT_TOKENS') ??
  Number(telemetry?.prompt_tokens || 0);
const completionTokens =
  numberFromEnv('OPENCODE_COMPLETION_TOKENS') ??
  Number(telemetry?.completion_tokens || 0);
const deltaCostUsd =
  numberFromEnv('OPENCODE_DELTA_COST_USD') ??
  Number(telemetry?.delta_cost_usd || 0);

const ledgerPath = path.join(process.cwd(), '.ai-metrics', 'token-ledger.json');
fs.mkdirSync(path.dirname(ledgerPath), { recursive: true });

let ledger = { entries: [] };
if (fs.existsSync(ledgerPath)) {
  try {
    ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));
  } catch {
    ledger = { entries: [] };
  }
}

if (!Array.isArray(ledger.entries)) {
  ledger.entries = [];
}

const alreadyTracked = ledger.entries.some(
  entry => entry.branch === branch && entry.commit === commit
);

if (alreadyTracked) {
  process.exit(0);
}

const runningCost =
  ledger.entries
    .filter(entry => entry.branch === branch)
    .reduce((sum, entry) => sum + Number(entry.delta_cost_usd || 0), 0) +
  deltaCostUsd;

ledger.entries.push({
  branch,
  commit,
  timestamp,
  prompt_tokens: promptTokens,
  completion_tokens: completionTokens,
  delta_cost_usd: deltaCostUsd,
  running_cost_usd: Number(runningCost.toFixed(6)),
  telemetry_session_id: telemetry?.session_id || undefined,
  source: 'local-pre-push',
  telemetry_source: telemetry?.source || undefined,
});

fs.writeFileSync(ledgerPath, `${JSON.stringify(ledger, null, 2)}\n`, 'utf8');
