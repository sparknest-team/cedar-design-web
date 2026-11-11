# Trigger positioning RAF owner-window cleanup

Fix three reproduced independent Cedar/Maple RAF failures: iframe element cancellation on host window, iframe window scheduling on host window, canceled dequeued frame consuming replacement scroll work. Store scheduling view and invalidate/consume generations; capture and clear current event before calling the consumer. Element ownerDocument takes precedence; popup owner view covers window events. No new API, alias, CSS token or visual duration default.

This is geometry scheduling. Scope excludes real browser/OS acceptance and old scroll-listener ownership when the popup changes windows.
