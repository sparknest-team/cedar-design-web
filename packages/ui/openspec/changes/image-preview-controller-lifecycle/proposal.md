# ImagePreview interaction lifecycle

Both independent Controller/mode helpers reproduce15 failures/2 controls in17 scoped cases. Add independent long-press/tap generations and binding ownership; consume callbacks once, clear inputs on close/src changes, suspend keyboard/timers/capture on deactivation/disposal, and reread mode on activation. Retained unavailable commands are inert.

500ms long press and320ms recognition expiry remain interaction policy, not CSS completion. Private tapCloseTimer becomes tapTimer; no public API/token change. Full Image Cedar35/Maple87 regression passes with controlled clocks/events/MQL, not native touch/OS/cross-document acceptance. Preserve PreviewGroup track scheduling for a separate batch.
