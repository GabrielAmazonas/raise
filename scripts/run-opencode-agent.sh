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
env -u OPENCODE -u OPENCODE_PID -u OPENCODE_CLIENT -u OPENCODE_SERVER_PASSWORD -u OPENCODE_SERVER_USERNAME opencode run --agent "$selected_agent" "$prompt"
