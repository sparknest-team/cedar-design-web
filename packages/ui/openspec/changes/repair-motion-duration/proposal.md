# Bound invalid motion durations

Both shared motion implementations normalize invalid duration to zero, preserving next-frame completion and cancellation. Both useMotion implementations retain explicit numeric zero. CountTo and Statistic diagnose invalid inputs and share the bounded runtime behavior. No new props or event-task behavior.
