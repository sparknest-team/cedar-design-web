# @cedar-design/use-vue

## 2.0.0

### Major Changes

- [`c3b76e0`](https://github.com/loca-spirit/cedar-design-web/commit/c3b76e0d3578aecf4b446e527400d2ce12a78618) - Develop with Vue 3.5.45 while supporting consumers on Vue 3.2.47 and later Vue 3 releases. Preserve compatible component IDs and public declarations, and gate releases on packed runtime and type compatibility checks.

  The peer minimum is explicitly Vue 3.2.47. Packages previously advertising ^3.2.0 require a major release under the repository compatibility policy; consumers on 3.2.0–3.2.46 must update within the 3.2 line. No release is performed by this change.
