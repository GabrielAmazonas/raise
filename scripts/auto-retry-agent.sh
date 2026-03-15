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

while [[ $iteration -lt $max_iterations ]]; do
  iteration=$((iteration + 1))
  
  printf '\n=== Attempt %s of %s ===\n\n' "$iteration" "$max_iterations" >&2
  
  ./scripts/run-opencode-agent.sh "$agent_name" "$prompt" || {
    agent_status=$?
    
    if [[ $last_log_file ]]; then
      printf '\nPrevious attempt log: %s\n' "$last_log_file" >&2
      
      if grep -Eqi '^[[:space:]]*(Decision|Recommendation)[[:space:]]*:[[:space:]]*FAIL\b' "$last_log_file"; then
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
        ' "$last_log_file" | head -10)
        
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
            last_log_file="$log_file"
            
            if [[ $iteration -lt $max_iterations ]]; then
              continue
            fi
            
            printf '\nMax attempts reached. Gate still fails after implementation.\n' >&2
            exit 1
          }
          
          printf '\nValidation passed on attempt %s.\n' "$iteration" >&2
          break
        else
          last_log_file="$log_file"
          if [[ $iteration -lt $max_iterations ]]; then
            continue
          fi
          printf '\nMax attempts reached. Gate still fails.\n' >&2
          exit 1
        fi
      else
        last_log_file="$log_file"
        if [[ $iteration -lt $max_iterations ]]; then
          continue
        fi
        printf '\nMax attempts reached. Validation failed.\n' >&2
        exit "$agent_status"
      fi
    fi
    
    if [[ $iteration -lt $max_iterations ]]; then
      last_log_file="$log_file"
      continue
    fi
    
    printf '\nMax attempts reached. Gate still fails.\n' >&2
    exit 1
  }
  
  printf '\nValidation passed on attempt %s.\n' "$iteration" >&2
  break
done
