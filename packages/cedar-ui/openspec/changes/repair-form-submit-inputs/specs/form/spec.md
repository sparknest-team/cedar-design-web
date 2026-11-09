## MODIFIED Requirements

### Requirement: Submit input ownership
A waiting native submission MUST become ineligible when its reactive model, form/item rules, required/field definition or registered field membership changes. Old success/failure MUST NOT notify submit outcomes or automatic invalid scrolling. A fresh submission MUST validate the latest inputs. Change-then-restore MUST NOT revive the old submission. Old completion MUST NOT release a newer submission. Explicit commands and lifecycle cancellation MUST retain their existing ownership semantics.
