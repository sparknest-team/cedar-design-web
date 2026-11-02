## MODIFIED Requirements

### Requirement: One owner per notification

Image preview components SHALL notify open-change only through Vue emit. A normal listener SHALL run once per actual request; a once listener SHALL follow Vue's once lifecycle. Listener return values SHALL NOT control loading or transitions.

#### Scenario: Closing an embedded preview

- WHEN an Image's standalone preview closes
- THEN Image proposes open=false once
- AND its normal open-change listener runs once for that transition.

### Requirement: Native listeners preserve their target and modifiers

Trigger's supported reference listeners SHALL bind to the actual reference with native Once/Capture/Passive options and SHALL NOT fall through onto the popup. A consumed once listener SHALL NOT rearm merely because its callback changes or KeepAlive resumes the same element. A replacement reference or a removed/readded listener starts a new native lifetime.

#### Scenario: Clicking the popup after a reference once listener

- WHEN the reference is clicked twice and the popup is clicked
- THEN the regular reference listener runs twice
- AND the once reference listener runs once.

### Requirement: Component interaction does not discard native attributes

FloatingPanel and Image SHALL preserve supported business class/style and identity/ARIA attributes at their documented targets. Carousel SHALL retain user native listeners alongside its internal keyboard, hover and focus handlers.

#### Scenario: Keyboard navigation with a business listener

- WHEN a consumer attaches keydown and keydown.once to Carousel and navigates twice
- THEN the internal slide navigation still works
- AND the business regular listener runs twice and once listener runs once.
