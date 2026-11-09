# Input/Textarea trim model notifications

Preserve Vue's standard model-modifier emit behavior and prevent a redundant commit proposal after an uncontrolled input already reported its trimmed model value. Local input/session state still normalizes on commit; initial or externally replaced whitespace values still produce their own commit proposal. Ordinary input notifications and commit change ordering remain unchanged. Correct the existing inherited hint default documentation and misleading trim demo wording. No public property or listener bypass is introduced.
