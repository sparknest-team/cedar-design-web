# Card floating scheduler ownership

Preserve public APIs, CSS variables and timing policies. Internal render/timer/geometry/doubleRaf continuation work must consume once and reject superseded/inactive/disposed ownership. Activation begins fresh current state. This change logically invalidates the existing non-abortable helper continuation, not physical RAF delivery; native paint/cross-document remain separate.
