---
"@cedar-design/use": minor
"@cedar-design/ui": major
---

Add useAsyncData for reusable zero-argument initialization loaders and external search loaders, with per-owner state, optional debounce/cache, AbortSignal, latest-result ownership, explicit error results and scope disposal. Keep component options/data as arrays; add Select initialization examples on both platforms.

PeopleSelect now receives options/loading and emits search(query). Remove fetch, urlType and built-in personnel transport/URLs as explicitly requested; migrate request and mapping to the application (optionally useAsyncData). This requires the next major UI release. Preserve string v-model/defaultValue, empty-string clearing, form restrictions and presentation confirmation. Selected labels resolve from options or the explicit label fallback; the component no longer appends IDs. Previous internal cancellation is now application-owned.
