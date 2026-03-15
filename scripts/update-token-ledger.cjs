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

const branch = argValue('--branch') || git('git rev-parse --abbrev-ref HEAD');
const commit = git('git rev-parse HEAD');
const timestamp = new Date().toISOString();

const promptTokens = Number(process.env.OPENCODE_PROMPT_TOKENS || 0);
const completionTokens = Number(process.env.OPENCODE_COMPLETION_TOKENS || 0);
const deltaCostUsd = Number(process.env.OPENCODE_DELTA_COST_USD || 0);

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
  source: 'local-pre-push',
});

fs.writeFileSync(ledgerPath, `${JSON.stringify(ledger, null, 2)}\n`, 'utf8');
