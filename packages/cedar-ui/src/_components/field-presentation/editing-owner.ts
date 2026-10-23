interface EditingOwner {
  save: () => Promise<boolean>;
  focus: () => void;
}
// A document can host multiple Forms, but only one anchored editor at a time.
const owners = new WeakMap<Document, EditingOwner>();
export function editingOwner(document: Document) {
  return owners.get(document);
}
export function claimEditing(document: Document, owner: EditingOwner) {
  owners.set(document, owner);
  return () => {
    if (owners.get(document) === owner) owners.delete(document);
  };
}

const handoffs = new WeakMap<Document, Promise<unknown>>();
export async function withEditingTurn(
  document: Document,
  action: () => Promise<void>,
) {
  const previous = handoffs.get(document) ?? Promise.resolve();
  const current = previous.then(action, action);
  handoffs.set(document, current);
  try {
    await current;
  } finally {
    if (handoffs.get(document) === current) handoffs.delete(document);
  }
}
