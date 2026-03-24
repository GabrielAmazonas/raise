#!/usr/bin/env bash
set -euo pipefail

agent_name="${1:-}"
shift || true
prompt="${*:-}"

if [[ -z "$agent_name" ]]; then
  printf 'Usage: %s <agent-name> [prompt]\n' "$0" >&2
  exit 2
fi

max_iterations=3
iteration=0
last_log_file=""
current_log_file=""

while [[ $iteration -lt $max_iterations ]]; do
  iteration=$((iteration + 1))
  
  printf '\n=== Attempt %s of %s ===\n\n' "$iteration" "$max_iterations" >&2
  
  current_log_file=$(mktemp)
  trap 'rm -f "$current_log_file"' EXIT
  current_log_path=""
  
  ./scripts/run-opencode-agent.sh "$agent_name" "$prompt" 2>"$current_log_file" || {
    agent_status=$?
    
    if [[ $iteration -gt 1 && -n "$last_log_file" && -f "$last_log_file" ]]; then
      printf '\nPrevious attempt log: %s\n' "$last_log_file" >&2
      
      current_log_path=$(grep -oE '\./scripts/run-opencode-agent.sh.*log for next iteration: (.+)$' "$current_log_file" | sed 's/.*log for next iteration: //' | head -1)
      
      if [[ -z "$current_log_path" ]]; then
        current_log_path=$(grep -oE 'Full agent log: (.+)$' "$current_log_file" | sed 's/Full agent log: //' | head -1)
      fi
      
      if [[ -n "$current_log_path" && -f "$current_log_path" ]]; then
        printf '\nCaptured log path: %s\n' "$current_log_path" >&2
        
        if grep -Eqi '^[[:space:]]*(Decision|Recommendation)[[:space:]]*:[[:space:]]*FAIL\b' "$current_log_path"; then
          implementation_recs=$(awk '
            BEGIN { in_section = 0 }
            /^[[:space:]]*(Required fixes before commit|Required fixes|Suggested remediation steps):/ {
              in_section = 1
              sub(/^[[:space:]]*(Required fixes before commit|Required fixes|Suggested remediation steps):[[:space:]]*/, "")
              print $0
              next
            }
            /^[[:space:]]*([A-Z][a-z]+|[0-9]+\.|-|\*)[[:space:]]/ && in_section {
              print "  " $0
              next
            }
            /^$|^[[:space:]]*[0-9]+\. / && in_section { exit }
          ' "$current_log_path" | head -10)
          
          if [[ -n "$implementation_recs" ]]; then
          printf '\nDetected implementation change recommendation from %s agent.\n' "$agent_name" >&2
          printf 'Triggering Builder agent to implement fixes...\n\n' >&2
          
          ./scripts/run-opencode-agent.sh builder "Implement the following changes: $implementation_recs" || {
            printf '\nBuilder agent failed to implement recommended changes.\n' >&2
            if [[ $iteration -lt $max_iterations ]]; then
              continue
            fi
          }
          
          printf '\nRe-running %s validation after implementation...\n\n' "$agent_name" >&2
          
          ./scripts/run-opencode-agent.sh "$agent_name" "$prompt" || {
            last_log_file="$current_log_path"
            
            if [[ $iteration -lt $max_iterations ]]; then
              continue
            fi
            
            printf '\nMax attempts reached. Gate still fails after implementation.\n' >&2
            exit 1
          }
          
          printf '\nValidation passed on attempt %s.\n' "$iteration" >&2
          break
        fi  # end: if implementation_recs check
      else
          last_log_file="$current_log_path"
          if [[ $iteration -lt $max_iterations ]]; then
            continue
          fi
          printf '\nMax attempts reached. Gate still fails.\n' >&2
          exit 1
        fi
      else
        if [[ -n "$current_log_path" && -f "$current_log_path" ]]; then
          last_log_file="$current_log_path"
        fi
        
        printf '\nMax attempts reached. Validation failed.\n' >&2
        exit "$agent_status"
      fi  # end: grep FAIL check
    elif [[ $iteration -lt $max_iterations ]]; then
      if [[ -n "$current_log_path" && -f "$current_log_path" ]]; then
        last_log_file="$current_log_path"
      fi
      continue
    else
      printf '\nMax attempts reached. Gate still fails.\n' >&2
      exit 1
    fi
  }
  
  printf '\nValidation passed on attempt %s.\n' "$iteration" >&2
  
  if [[ -n "$current_log_path" && -f "$current_log_path" ]]; then
    last_log_file="$current_log_path"
  fi
  break
done
