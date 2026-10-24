---
"@cedar-design/ui": patch
---

Honor resolved Ripple transform/opacity timing during cleanup without changing 200ms/140ms defaults or 250ms minimum policies. Deduplicate release, isolate nested waves, bind document events to the mounted ownerDocument, and match keyboard release to its activation key.
