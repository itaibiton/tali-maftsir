#!/bin/bash

# Ralph Loop Runner
# Runs Claude Code in a loop until completion signal is detected

set -e

PROJECT_NAME="${1:-}"
MAX_ITERATIONS="${2:-25}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ -z "$PROJECT_NAME" ]; then
    echo "Usage: ./ralph.sh <project-name> [max-iterations]"
    echo ""
    echo "Available projects:"
    ls -d "$SCRIPT_DIR"/*/ 2>/dev/null | xargs -I {} basename {} | grep -v "^ralph.sh$" || echo "  (none found)"
    exit 1
fi

PROJECT_DIR="$SCRIPT_DIR/$PROJECT_NAME"
PROMPT_FILE="$PROJECT_DIR/PROMPT.md"
PRD_FILE="$PROJECT_DIR/PRD.json"

if [ ! -d "$PROJECT_DIR" ]; then
    echo "Error: Project '$PROJECT_NAME' not found at $PROJECT_DIR"
    exit 1
fi

if [ ! -f "$PROMPT_FILE" ]; then
    echo "Error: PROMPT.md not found at $PROMPT_FILE"
    exit 1
fi

# Get completion promise from PRD.json
COMPLETION_PROMISE=$(grep -o '"completion_promise": "[^"]*"' "$PRD_FILE" | cut -d'"' -f4)
if [ -z "$COMPLETION_PROMISE" ]; then
    COMPLETION_PROMISE="${PROJECT_NAME^^} COMPLETE"
fi

echo "=========================================="
echo "  Ralph Loop: $PROJECT_NAME"
echo "=========================================="
echo "Max iterations: $MAX_ITERATIONS"
echo "Completion signal: <promise>$COMPLETION_PROMISE</promise>"
echo ""

ITERATION=0
while [ $ITERATION -lt $MAX_ITERATIONS ]; do
    ITERATION=$((ITERATION + 1))
    echo ""
    echo "--- Iteration $ITERATION of $MAX_ITERATIONS ---"
    echo ""

    # Run Claude Code with the prompt
    OUTPUT=$(claude -p "$(cat "$PROMPT_FILE")" --allowedTools "Task,Read,Write,Edit,Glob,Grep,Bash,TodoWrite" 2>&1) || true

    echo "$OUTPUT"

    # Check for completion signal
    if echo "$OUTPUT" | grep -q "<promise>$COMPLETION_PROMISE</promise>"; then
        echo ""
        echo "=========================================="
        echo "  PROJECT COMPLETE!"
        echo "=========================================="
        echo "Completed in $ITERATION iterations"
        exit 0
    fi

    # Small delay between iterations
    sleep 2
done

echo ""
echo "=========================================="
echo "  MAX ITERATIONS REACHED"
echo "=========================================="
echo "The project did not complete within $MAX_ITERATIONS iterations."
echo "Check progress.txt for current state."
exit 1
