# BackTop runtime motion audit

Keep duration=200ms / easing=quartOut as JS animation props, not CSS tokens. Honor reduced-motion from the scroll target's document at activation and during RAF work. Prevent callbacks from canceled/replaced/disabled lifecycle runs from mutating old targets.

No new API or token. Cedar leads; Maple keeps an independent source/test copy. Simulated preferences and clocks are unit evidence, not real OS acceptance.
