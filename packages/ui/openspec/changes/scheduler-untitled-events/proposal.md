# Optional editor titles and quiet time cells

Scheduler time cells no longer show hover backgrounds, including outside drag gestures. Keyboard focus remains visible.

The built-in editor, custom editor save and component change command normalize empty or whitespace-only titles to the active locale's untitled label before validation and beforeChange. The title field is not marked required. Independent core validation retains its existing explicit-title contract. Incoming records are not silently rewritten.
