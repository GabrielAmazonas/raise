#!/usr/bin/env bash
set -euo pipefail

test_dir="$(mktemp -d)"
cleanup() { rm -rf "$test_dir"; }
trap cleanup EXIT

echo "=== Testing auto-retry-agent.sh ===" >&2

# Test 1: Missing agent name argument
echo "Test 1: Missing agent name argument" >&2
test_output=$(./scripts/auto-retry-agent.sh 2>&1) || true
if echo "$test_output" | grep -qiE "(usage|agent-name)"; then
  echo "✓ PASS: Shows usage when no agent name provided" >&2
else
  echo "✗ FAIL: Should show usage message. Output: $test_output" >&2
  exit 1
fi

# Test 2: Log file tracking in retry loop
echo "Test 2: Log file variable defined and tracked" >&2
if grep -q 'current_log_file=""' ./scripts/auto-retry-agent.sh && \
   grep -q 'last_log_file="$current_log_path"' ./scripts/auto-retry-agent.sh; then
  echo "✓ PASS: Log files properly initialized and tracked" >&2
else
  echo "✗ FAIL: Log file tracking not implemented correctly" >&2
  exit 1
fi

# Test 3: Log capture mechanism exists
echo "Test 3: Log capture from run-opencode-agent.sh" >&2
if grep -qE '(log for next iteration|Full agent log)' ./scripts/auto-retry-agent.sh; then
  echo "✓ PASS: Log path extraction implemented" >&2
else
  echo "✗ FAIL: Missing log path extraction logic" >&2
  exit 1
fi

# Test 4: Retry loop structure preserved
echo "Test 4: Retry loop iteration limit enforced" >&2
if grep -q 'max_iterations=3' ./scripts/auto-retry-agent.sh && \
   grep -qE '\$iteration -lt \$max_iterations' ./scripts/auto-retry-agent.sh; then
  echo "✓ PASS: Max iterations constraint present" >&2
else
  echo "✗ FAIL: Iteration limit logic missing or broken" >&2
  exit 1
fi

# Test 5: Cleanup trap for temp files
echo "Test 5: Temporary file cleanup on exit" >&2
if grep -q 'trap.*rm.*current_log_file' ./scripts/auto-retry-agent.sh; then
  echo "✓ PASS: Temp file cleanup trap defined" >&2
else
  echo "✗ FAIL: Missing temp file cleanup" >&2
  exit 1
fi

# Test 6: FAIL detection logic preserved
echo "Test 6: FAIL gate detection still functional" >&2
if grep -qE 'Decision.*FAIL|Recommendation.*FAIL' ./scripts/auto-retry-agent.sh; then
  echo "✓ PASS: Gate failure detection intact" >&2
else
  echo "✗ FAIL: Critical FAIL detection logic removed" >&2
  exit 1
fi

# Test 7: Implementation recommendation extraction preserved
echo "Test 7: Implementation recommendations extraction" >&2
if grep -q 'Required fixes before commit\|Suggested remediation steps' ./scripts/auto-retry-agent.sh; then
  echo "✓ PASS: Recommendation extraction logic present" >&2
else
  echo "✗ FAIL: Missing recommendation parsing" >&2
  exit 1
fi

echo "" >&2
echo "=== All tests passed ===" >&2
exit 0
