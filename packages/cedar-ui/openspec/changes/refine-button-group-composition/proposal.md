# Refine ButtonGroup semantics and composition

## Problem
The container lacks a default group role. Joining borders use the parent variant, so a child text override beside an outlined button loses a seam. Default-slot inheritance also reaches wrappers that joining CSS does not support. Group enum validators and provider elevation types differ from Button.

## Result
Both platforms default to role=group and preserve root attribute overrides and native keyboard handling. Joining borders follow adjacent direct Button variants in horizontal/vertical LTR/RTL layouts. Text/text has one separator; outline/outline collapses the duplicate border; mixed edges retain the outline border. Document direct Button DOM adjacency as the supported joining contract.

## API
Keep the existing nine props, default slot, zero custom emits and provider expose. Reuse enum values and validators; narrow provider.elevation to boolean|number. Keep explicit disabled=false overrides and group-owned elevation. No loading, task, selection or toolbar APIs.
