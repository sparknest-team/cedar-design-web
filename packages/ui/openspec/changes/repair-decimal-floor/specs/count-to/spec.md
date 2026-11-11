## MODIFIED Requirements

### Requirement: Numeric decimal floor
Scientific notation MUST produce numeric floor results. Decimal floor MUST retain negative-infinity rounding rather than rounding to nearest or returning padded strings. Integer precision MUST clamp to [-292,292]; fractional/nonfinite precision MUST fall back to zero. Scaling overflow/underflow MUST NOT turn finite representable floor results into NaN. CountTo MUST apply the same behavior to its default and scoped-slot display values.
