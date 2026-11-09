# Choice public contracts

## ADDED Requirements
### Requirement: Parameters follow their own semantics
Orientation SHALL accept horizontal/vertical with horizontal fallback. max SHALL diagnose nonfinite, negative or noninteger values while preserving zero as no new choices and existing floor/clamp normalization for invalid JS callers. Icon sizes SHALL accept positive lengths including fractional numbers, diagnose invalid input and omit invalid instance overrides rather than applying Divider minimum1 semantics.

#### Scenario: Zero maximum
- GIVEN max=0
- THEN unchecked options are disabled and no existing external values are truncated.

### Requirement: Public declarations match existing model and presentation behavior
RadioGroupEmits SHALL include load-error. Native field and group instances SHALL declare existing editor notifications, nullable presentation clear outputs and read slots. Checkbox checked slot scope SHALL remain boolean. Existing root/subentry type aliases SHALL agree. Group isolation SHALL remain a mount-time choice.

#### Scenario: Nullable read content
- GIVEN a nullable model in read-pretty
- THEN the public read slot receives the nullable model and formatted text.

### Requirement: Option request feedback is accessible without loading props
Both platform group roots SHALL expose aria-busy during their explicit option loader request and clear it after settlement. Errors SHALL emit once without inventing model proposals. No loading prop or visual spinner is introduced.

#### Scenario: Options fail
- WHEN the explicit options loader rejects
- THEN aria-busy is removed and one load-error reports the cause.
