# Migrate NavMenu filtering to Maple

Migrate Cedar NavMenu.Item tree indexing, selection, title fallback, controlled models, slot context, focus restoration, and reentrancy-safe entry coordination into Maple. Keep NavMenu/NavMenuItem names and usage. Maple supports horizontal filter entries only; no desktop navigation tree, Sider inheritance, overflow menu, or side flyouts.

Mobile default popupLayout is full-width. Add full to both libraries: full viewport width and remaining height below the entry (Cedar) or whole filter bar (Maple). Keep existing Cedar dropdown/full-width/full-height meanings and defaults. Maple uses a shared Overlay surface with background scroll locking and viewport/safe-area handling. Container overrides change Teleport placement, not the fixed viewport layout reference.

Uncontrolled entries open exclusively; controlled open values remain authoritative and emit close requests. Expanding an entry never changes business selection. More-filter content and its draft/apply/reset behavior remain slot-owned.

The follow-up API audit exports a named NavMenuPopupLayout in Cedar, limits Maple NavMenuMode to horizontal, and removes Maple's unused NavMenuTheme type. Item disabled defaults to undefined on both platforms and still obeys parent disablement. Name registration follows dynamic name changes. Opening an Item must honor cancellation from root coordination so a newer request in a close callback wins. Mobile vertical option panels expand selected ancestry when values or options change, matching Cedar's default behavior. Platform-specific tree methods and popup layouts are explicitly documented; common panel lifetimes and root closing are unified below.

## Shared panel lifecycle and root methods

Both roots expose close(), resize() and setActiveItem(). close() requests closing Item panels and restores entry focus, without clearing business values or desktop navigation-tree expansion. Both Items expose unmountOnClose (default false): lazily create content on first open, retain it by default, and optionally destroy it after the closing transition. Closed retained content is inert. Empty entries never report open. KeepAlive suspension hides controlled surfaces even if a close request is rejected. Synchronized examples cover horizontal filters, controlled Item state, local draft retention and root closing.

Name validation uses the completed render to support batched swaps and insertions without false duplicate errors. Keyboard navigation remains within the owning filter bar/menu and skips nested or inert panel entries. A cancelled closing transition preserves the mounted draft and restores interactivity.
