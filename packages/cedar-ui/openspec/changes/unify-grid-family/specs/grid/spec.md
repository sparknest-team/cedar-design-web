# Grid family contract

Grid: cols=24, rowGap=0, colGap=0, collapsed=false, collapsedRows=1. Numeric and responsive values share viewport breakpoints xs/sm/md/lg/xl/xxl. SSR starts from xs and activates media queries after mount. Listeners must unsubscribe.

GridItem: span=1, offset=0, suffix=false. Default slot receives overflow:boolean. Zero spans hide. Dynamic removal, insertion, reordering and nested grids must not corrupt collection; row packing reserves suffix items when collapsed. Item styles exist during SSR; collapse resolves after mounting.

Row: gutter=0 (scalar/object or [horizontal,vertical]), justify=start, align=start, wrap=true, div=false. Col: span=24, offset/order/flex/breakpoints=undefined. div suppresses all Row/Col layout styles. Zero breakpoint spans hide and larger spans restore visibility; zero offset/order resets lower breakpoint settings. Both emit click once with MouseEvent. Default slots contain layout content; no public methods.

Each package exposes independent Row and Col directories, installation, source/type/style exports and menu pages. Existing Grid family aliases continue to refer to the exact standalone component instances.
