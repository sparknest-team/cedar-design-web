# Design

Visual emphasis is independent of status: neutral uses an overlay surface and status icon; tonal uses a subtle status background; solid uses a strong status fill and paired foreground. Cedar defaults to neutral and Maple to solid. Explicit variants share the same color contract. Solid default/loading retain a dark surface. MessageVariant is exported; imperative calls, default options and same-id updates accept variant.

Colors use explicit variant/status/part axes. Neutral uses system overlay/primary/border roles; tonal uses subtle foundation status surfaces and readable system content; solid pairs status fills with on-bright, and default/loading #333 with on-dark. No compatibility aliases. Placement and touch density remain platform-specific.

