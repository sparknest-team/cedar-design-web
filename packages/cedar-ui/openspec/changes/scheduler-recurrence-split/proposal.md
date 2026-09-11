# Split recurring series: this and following

Add a pure series-level proposal helper for modifying or cancelling an occurrence and all following rule members. Preserve the old series prefix and its IDs, assign a fresh ID to the tail, and keep remaining occurrence count when inheriting a rule.

Future exceptions are protected by default. Explicit discard returns removed records for audit; automatic remapping across changed rules is out of scope. Existing single-instance APIs remain unchanged. A new Cedar-only demo offers scope selection and atomic failure handling.
