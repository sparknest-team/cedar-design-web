# Unify Pagination

Cedar and Maple duplicate the same paging algorithm but disagree on selector props, input validation, child sizes and elevation. Use Maple's data-driven SFC structure, Cedar's complete size propagation, and a shared corrected state/commit implementation. Both sides use their Select and Input components behind narrow adapters.

This unpublished unification batch changes DOM/CSS tokens, narrows pageSizeProps, makes size default explicitly md and elevation false, and enables container-responsive mode. Record as a major change with migration guidance; no arbitrary Select/Menu property alias is retained.
