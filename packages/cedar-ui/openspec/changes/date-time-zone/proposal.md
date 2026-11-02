# Explicit date time zones

Synchronize optional IANA `timeZone` across Cedar and Maple date fields and panels. Preserve local behavior when omitted. Date/timestamp inputs are instants, strings are target-zone civil values; limits, typed text, shortcuts and Date events share that interpretation. Reject DST gaps and invalid zones; choose the earliest instant in a fold without mutating global Dayjs timezone defaults. Compare time boundaries by actual timestamps to avoid DST-sensitive library comparisons.

Maple additionally offers day-precision mobile scroll/line renderers and async Popup guards; these are platform-specific presentation capabilities rather than desktop API aliases.
