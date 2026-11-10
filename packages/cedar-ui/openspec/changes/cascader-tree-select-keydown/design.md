## Design

The public component emits the original keyboard event before its controller handles the event. Prevented events skip internal actions. The editor forwards its own events through the public owner so once listeners are owned by Vue and are not re-created with the editor. Existing focus, input method, Escape and editor submission contracts remain in effect.
