# Mention mirror lifecycle

Treat textarea mirror scroll synchronization as post-render state settlement, not CSS motion completion. Invalidate old continuations on replacement/close/disable/mode/options/lifecycle changes; consume once and recheck node ownership after geometry. Read style from the current textarea owner window and isolate obsolete resize bindings. Retained unavailable input/focus/blur are inert; existing public signatures and CSS defaults remain. Maple has no corresponding runtime. Controlled tests do not certify native layout or input methods.
