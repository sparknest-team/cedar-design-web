## MODIFIED Requirements

### Requirement: Field identity ownership
Changing field MUST unregister its old membership and register the new nonempty identity. Reset MUST use that field path first available cloned initial value, including falsy values. Revisiting a path MUST retain its prior baseline. Identity change MUST cancel the old editor and prevent its pending validation from publishing feedback for the new identity. Registered field membership changes MUST invalidate callbacks and invalid scrolling from old field-set validations. Existing model defaults MUST be retained.
