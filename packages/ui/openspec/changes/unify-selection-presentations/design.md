## Ownership

The main component renders one SelectionField. A local static registry selects MenuPresentation or Maple-only List/Picker presentations. Every setup creates its own controller and session; neither library imports the other.

Menu commits immediately. List single selection commits immediately; List multiple and all Picker selections remain draft until confirm. Cancel, Escape and closing discard draft. Controlled parents may keep open=true; settled sessions prevent duplicate confirmation. External values reset the draft.

Cedar source is copied to Maple with only prefix and import substitutions. Props add Maple-only presentation options; local empty-slot and Form integration connect each library's existing providers. Maple-only presentation.less defines touch density. check:selection-presentations verifies 33 common file pairs and both component style outputs.

Option identity uses typed values rather than labels; Cascader encodes typed paths, supports asynchronous options and deduplicated lazy expansion, and ignores stale callbacks after options are replaced. Presentations cannot override Picker field mapping or controller-owned values.

## Verification

Run both typechecks, selection tests, Maple Popup/Picker/Form regression, source-pair and semantic-token checks, and demo compilation. Browser visual acceptance must be reported separately from these checks.
