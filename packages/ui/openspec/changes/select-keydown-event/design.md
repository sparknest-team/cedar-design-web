## Design

Each Select emits the original KeyboardEvent before passing an unconsumed event to its controller. Vue owns ordinary and once listener dispatch. A recursively rendered native editor forwards the event to its parent Select; its controller sees the same event and respects defaultPrevented. The event covers the field input and the editor search input.
