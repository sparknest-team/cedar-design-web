# Repair native and notification event ownership

The component audit reproduced misplaced reference modifiers, swallowed root attributes, duplicate image-preview notifications, and overwritten Carousel listeners. Restore the existing Vue contracts on both platforms without introducing task callbacks, auto-loading, or new public properties.

Trigger reference listeners use native Once/Capture/Passive options and Vue error handling. Image preview open-change remains an emit notification; its listener is no longer a runtime control Prop or invoked separately. FloatingPanel/Image retain business root attributes, and Carousel combines user listeners with its internal interaction handlers.
