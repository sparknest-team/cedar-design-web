# Repair Trigger containing blocks and document changes

Fixed popups inside transformed containing blocks currently use viewport coordinates, and changing a reference to a same-origin iframe leaves interaction listeners on the old document. Resolve popup coordinates in the real containing block and rebind event ownership with the current reference and popup documents.
