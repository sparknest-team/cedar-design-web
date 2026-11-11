# Refine Link contract and audit gates

Implement approved L01–L03 in Cedar and Maple. Preserve the role of blocked links with an href, retain navigation/once blocking, demonstrate manual loading using a native downloadable link, and align Link public types and documentation. Export FieldLoadingProps in both libraries. Fix known platform path normalization and the Button style gate false positive without changing product styling.

Full parity verification also found Maple Trigger ignoring its declared dir prop. Align its existing direction precedence with Cedar and add paired regression coverage. Registered Switch foreground defaults remain platform-specific.
