# Design

Keep local imports, namespace and group wiring. Use the same Button props and state/event contract for both visual candidates. Preserve Promise-returning onClick/onTouchstart listener props for auto-loading; do not also emit or fall through the same event. Both callbacks accept an array of listeners. Async lifetime is cleared on unmount/deactivation; Promise.allSettled waits for all listeners. Synchronous callbacks do not show loading. Disabled/loading anchors prevent navigation and propagation; native buttons use disabled, aria-busy exposes loading.

Cedar candidate retains four decorative layers; Maple candidate composes HoverOverlay. Functional tests gate selection, then compare DOM count, implementation/dependency size and warmed mounting measurements. Benchmark is local jsdom evidence, not a claim about real-device frame rate. Preserve the selected implementation independently in both repositories and add normalization drift checks.
