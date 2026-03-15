#!/usr/bin/env bash
set -euo pipefail

agent_name="${1:-}"
shift || true
prompt="${*:-}"

if [[ -z "$agent_name" || -z "$prompt" ]]; then
  printf 'Usage: %s <agent-name> <prompt>\n' "$0" >&2
  exit 2
fi

if ! command -v opencode >/dev/null 2>&1; then
  printf 'Error: opencode CLI not found. Install it before running hooks.\n' >&2
  exit 1
fi

fallback_agent="default-fallback"
agent_dir=".opencode/agents"
selected_agent="$agent_name"

if [[ ! -f "$agent_dir/$agent_name.md" ]]; then
  selected_agent="$fallback_agent"
fi

if [[ "$selected_agent" == "$fallback_agent" && ! -f "$agent_dir/$fallback_agent.md" ]]; then
  selected_agent="build"
fi

printf 'Running OpenCode agent: %s\n' "$selected_agent"

raw_output_file="$(mktemp)"
clean_output_file="$(mktemp)"
trap 'rm -f "$raw_output_file" "$clean_output_file"' EXIT

set +e
env -u OPENCODE -u OPENCODE_PID -u OPENCODE_CLIENT -u OPENCODE_SERVER_PASSWORD -u OPENCODE_SERVER_USERNAME \
  opencode run --agent "$selected_agent" "$prompt" | tee "$raw_output_file"
opencode_status=${PIPESTATUS[0]}
set -e

perl -pe 's/\e\[[0-9;]*[A-Za-z]//g' "$raw_output_file" >"$clean_output_file"

log_dir=".ai-metrics/hook-logs"
mkdir -p "$log_dir"
timestamp="$(date +%Y%m%d-%H%M%S)"
log_file="$log_dir/${selected_agent}-${timestamp}.log"
cp "$clean_output_file" "$log_file"

if [[ $opencode_status -ne 0 ]]; then
  printf '\nOpenCode execution failed for agent %s (exit %s).\n' "$selected_agent" "$opencode_status" >&2
  printf 'Review log for next iteration: %s\n' "$log_file" >&2
  exit "$opencode_status"
fi

if grep -Eqi '^[[:space:]]*(Decision|Recommendation)[[:space:]]*:[[:space:]]*FAIL\b' "$clean_output_file"; then
  printf '\nOpenCode gate blocked by agent %s.\n' "$selected_agent" >&2
  printf 'Context for next iteration:\n' >&2
  awk '
    BEGIN { n = 0 }
    /^[[:space:]]*(Decision|Recommendation|Violations|Critical findings|Required fixes before commit|Required fixes|Suggested remediation steps|High severity findings|Medium severity findings|Recommended next action)/ {
      print "  " $0
      n++
      next
    }
    /^[[:space:]]*([0-9]+\.|-|\*)[[:space:]]/ {
      if (n > 0) print "  " $0
    }
  ' "$clean_output_file" >&2
  printf 'Full agent log: %s\n' "$log_file" >&2
  exit 1
fi
