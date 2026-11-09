## MODIFIED Requirements

### Requirement: Finite animation lifetime
Finite nonnegative durations MUST be supported. An omitted shared duration MUST default to 300ms. Zero and invalid durations MUST finish at the target in the next frame once, without requesting further frames. Pause/reset before that frame MUST cancel it. useMotion MUST retain numeric zero. CountTo and Statistic MUST diagnose invalid duration props without allowing an infinite frame loop.
