# Unify Menu naming and context menu positioning

Both Cedar and Maple expose the command menu as `Menu`, covering click, hover and context-menu activation. `NavMenu` remains the navigation component. This supersedes the root naming decision in `rename-menu-to-dropdown-menu` while retaining the command-only behavior.

Rename the root exports, props, instance and supporting types, source/package paths, CSS classes/tokens, resolver entries, consumers, documentation and examples in both libraries. Keep `MenuOption` as the item component; name option data `MenuOptionData` to avoid a conflicting type export. Do not retain a DropdownMenu compatibility alias.

Fix the shared Trigger interaction so align-point captures the activation coordinates. Re-entering the reference or moving the pointer must not relocate an open menu. A new contextmenu activation updates the point. Keep touch-oriented submenu defaults and platform appearance local.
