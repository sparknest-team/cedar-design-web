# Repair table-column-manager async ownership

Catalog loading and remote searching own independent pending state; older completion cannot unlock newer work. loadOptions runs at creation, loader replacement and explicit loadCatalog calls. Manual calls retain Promise rejection; automatic reads use the Vue error path. Hook catalog/search jobs share current catalog ownership, restore has its own ownership, and newer column edits or disposal invalidate older restore results.
