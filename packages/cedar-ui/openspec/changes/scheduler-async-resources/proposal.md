# Decouple Scheduler resources from a complete directory

Scheduler handles generic optional resources, not people. Separate visible resource rows (`resources`), remote candidates (`requestResources`) and ID hydration (`resolveResources`). Preserve ID associations when directories are partial, and keep directory pagination out of save concurrency checks. Add configurable resource-label and demos for equipment, resource-free planning and asynchronous people/equipment lookup.

Non-goals: server authorization inside the component, global directory stores, Maple changes, server-wide conflict detection.
