## MODIFIED Requirements

### Requirement: Trim model and local display
Input and Textarea MUST use standard Vue emits for model notifications. With trim enabled, input listeners MUST retain length-normalized raw text, while model listeners follow Vue trimming. Committing an uncontrolled local buffer MUST normalize display without repeating its already-published model proposal. Initial and externally replaced values MUST remain eligible for a new commit proposal. Change MUST remain a commit notification, and Enter followed by blur MUST NOT repeat it.

### Requirement: Hint inheritance documentation
The documentation MUST reflect existing runtime behavior: omitted hint inherits InputGroup and standalone defaults to true; outer FormItem labels suppress floating hints. Explicit false MUST retain native placeholder behavior. This clarification MUST NOT alter platform runtime defaults.
