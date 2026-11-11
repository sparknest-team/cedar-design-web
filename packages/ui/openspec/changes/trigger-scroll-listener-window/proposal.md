# Trigger original scroll-listener window ownership

Fix three independently reproduced Cedar/Maple cleanup failures: popup window replacement, popup ref clearing and unmount before watcher flush. Retain actual scroll binding view and remove original handler on that view. No public API, CSS token or interaction/motion default changes.

Scope is simulated listener ownership. Real browser/OS visuals and same-node cross-document adoption without ref replacement remain separate.
