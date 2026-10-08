# Time presentation
## ADDED Requirements
### Requirement: AM/PM selection
Maple wheel SHALL show AM/PM when format is ampm. Midnight SHALL map to 00 and noon to 12. Disabled callbacks SHALL receive 24-hour values; unavailable periods SHALL not be selectable.
### Requirement: Step candidates
Maple time fields and panels SHALL accept hour/minute/second step. Hour candidates SHALL be anchored at midnight independently of display period. Nonpositive/nonfinite steps SHALL use 1; fractional positive steps SHALL be floored with a minimum of 1.
### Requirement: Sequential popup switching
Clicking another sibling reference SHALL close the prior top popup before opening the new one. Nested popup clicks SHALL remain internal. Controlled parents MAY reject close requests.
