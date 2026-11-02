## MODIFIED Requirements

### Requirement: Instance-owned directive resources
Fullscreen loading instances MUST hold per-document scroll-lock leases. Local teardown MUST NOT release fullscreen locks. The final lease MUST preserve pre-existing external lock classes. Host positioning classes MUST only be removed by their owner.

### Requirement: Complete configuration snapshots
Each directive value MUST define the complete active configuration. Omitted options and boolean true MUST use defaults. Changing fullscreen MUST move the overlay and transfer its resource ownership without moving host-owned children.
