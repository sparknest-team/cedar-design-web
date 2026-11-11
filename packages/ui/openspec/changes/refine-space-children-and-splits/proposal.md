# Refine Space children and split wrapping

Implement approved S01–S04 in Cedar and Maple without changing the six existing props. Preserve keyed Fragment scope during flattening, omit empty text/comments, group each separator with its preceding item only for wrapping layout, and align development diagnostics and named exports.

Stable per-item groups use display:contents normally and inline-flex when split wrapping is enabled. An inner item preserves the existing item layout. This adds one generic grouping element per item but avoids remounting content when wrap/direction/split changes and preserves nonwrapping justify/gap geometry. Separators may appear at line ends; per-line edge suppression is outside this contract.
