## MODIFIED Requirements

### Requirement: Easing replay snapshot
Each reset MUST read the current timing-function prop. Replacing the prop alone MUST NOT restart or alter the current context; pause/resume MUST preserve it. Clearing the prop MUST restore default linear easing at the next reset. This applies to manual and from/to/duration-triggered resets.
