# InputTag value contract

## ADDED Requirements
### Requirement: Normalize business identity without banning duplicates
uniqueValue SHALL compare normalized value using merged fieldNames. Numeric and string identities SHALL remain distinct. Default legal duplicates SHALL have separate stable private keys, preserving exact surviving object identities before immutable replacements. Overflow keys SHALL not collide with business values or tagProps keys.

#### Scenario: Same-value objects are reordered
- GIVEN distinct objects A and B with the same normalized value
- WHEN the model changes from A,B to B,A
- THEN each object retains its own node without duplicate-key warnings.

### Requirement: Bound folding parameters and publish the real API
maxTagCount SHALL accept finite nonnegative integers, with zero unlimited. Invalid values SHALL diagnose and fall back to unlimited. Public Props SHALL exclude private renderer controls. Documentation SHALL include nullable models, model and editor notifications, read/clear slots and the shared before-commit and loading contracts.

#### Scenario: Fractional count
- WHEN maxTagCount is 0.5
- THEN validation rejects it and all tags remain visible without fractional overflow counts.
