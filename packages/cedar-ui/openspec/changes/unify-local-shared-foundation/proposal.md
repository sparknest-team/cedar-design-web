# Unify local shared foundation utilities

Before the first public release, replace Cedar's wholesale rattail re-export with the same ten independent local source modules as Maple. Expose exactly the 41 runtime utilities consumed by the two repositories and MotionState as a type. Remove unused warn / isURL and accidental third-party exports without aliases. Preserve brand-specific assertion diagnostics and applicable license notices.

Align internal popup-container development validation, minimal positioning rectangles and ResizeObserver call sites. Use native owner-window observation and window / visualViewport event fallback consistently; applications requiring native-equivalent observation in old browsers provide a standard polyfill at their entry. Do not raise Maple's existing component or small-import size limits.

Strengthen parity checks to retain types and compare complete module inventory. Test real ESM / CJS / declarations in both repositories, including negative type fixtures, algorithm boundaries, lifecycle cleanup and tree shaking. Do not weaken the original foundation assertions or add exclusions.
