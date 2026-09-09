# Pagination shared contract

Both platforms SHALL expose identical runtime Props, four numeric update/change events and six slots. Default size is md and elevation is false. pageSizeProps SHALL accept only PaginationPageSizeProps: disabled, placement, popupContainer, class and style. Parent disabled SHALL override child configuration.

Pagination SHALL preserve controlled state until parent updates. A page-size change SHALL preserve the previous first record where possible; simultaneous total changes SHALL clamp once and emit at most one current update/change pair. Explicit parent current updates take priority. Invalid jumper text SHALL not navigate; valid integers clamp to the page range. Enter then blur SHALL not duplicate events.

The shared SFC, page descriptors, state hook, page buttons and layout SHALL be copied identically with namespace normalization. Locale, Input and Select integration remain explicit platform adapters.

Responsive defaults to true. Containers at or below compactBreakpoint (480px) SHALL display previous/input/total-pages/next. Total and page-size selection remain available and may wrap; a separate jumper is not duplicated. Responsive=false retains full pagination with local list scrolling. ResizeObserver subscriptions SHALL be cleaned up; SSR SHALL not access browser globals.

Native buttons SHALL expose accessible names, disabled state and aria-current for the selected page. Keyboard activation and focus-visible SHALL work. Numeric input SHALL have a numeric keyboard hint.
