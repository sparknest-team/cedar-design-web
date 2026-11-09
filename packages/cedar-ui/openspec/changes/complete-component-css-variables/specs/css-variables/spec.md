# Component CSS variable documentation

## Public documentation

Every public component page in both languages SHALL contain a CSS Variables chapter. Generated tables SHALL list all scoped public declarations, default expressions, selector conditions and consuming CSS properties. Private directory declarations and internal-prefixed variables SHALL NOT be presented as public customization APIs. Authored usage notes and examples SHALL be preserved. Components without independent visual tokens SHALL explain their documented props and composed controls rather than introduce unused tokens.

## Override behavior

Documentation SHALL explain the rendered DOM scope, actual popup host, state applicability, inline property priority and local inherited-alias boundary. A public variable SHALL have a real CSS or reviewed runtime consumer. Maple Time min-width SHALL remain a CSS min expression after Less compilation. Removed legacy range summaries and arrows SHALL NOT retain dead public variables.

## Enforcement

Both libraries SHALL check generated component documentation together with their existing shared token contract. Global catalogs SHALL match compiled declarations. Repeated generation SHALL be idempotent and failed compilation or unreviewed consumption SHALL block publication.
