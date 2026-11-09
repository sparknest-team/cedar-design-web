# Calendar selection policy

allowSelect guards date and Today selection while previous/next navigation remains available.

Week start, week numbers, mode options and title react to changes; controlled mode emits update:mode.

Compact panel config flows to month and year, numeric width is a CSS length, and the footer Today control respects selection policy.

Previous and next are named native buttons. Date and compact-month choices have one roving tab stop, arrow navigation without selection, visible focus, and guarded Enter/Space selection; nested slot controls retain their own keyboard events.

The date slot is forwarded through each month in the full year view; the compact year panel continues to render month choices. Public slot and event types describe the existing payloads.

An externally changed controlled date locates its page without emitting a navigation event. Repassing the same timestamp preserves independent browsing.
