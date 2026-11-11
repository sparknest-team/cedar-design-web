## ADDED Requirements

### Requirement: Field presentation and pretty reading are independent
The field SHALL inherit presentation and readPretty independently from FormItem and Form, with field values taking precedence and explicit false overriding inherited true. The default SHALL remain inline and readPretty=false.

#### Scenario: Read without mounting a control
- WHEN readPretty is true
- THEN render the formatted committed value or read slot without an editor or search request.

#### Scenario: Desktop activation
- WHEN Cedar presentation is click or dblclick and the matching pointer action occurs, or Enter/F2 is pressed
- THEN show the original field in a viewport-bounded overlay at the field position, preserving layout space.

#### Scenario: Mobile activation
- WHEN Maple presentation is popup and the value region is activated
- THEN open the mobile editor with a left-aligned input/select title, close control and bottom confirmation.

#### Scenario: Transaction safety
- WHEN confirmation fails validation or beforeCommit refuses
- THEN retain the draft without changing the committed model.
- WHEN confirming asynchronously
- THEN freeze editing and duplicate confirmation/cancellation.
- WHEN resetting, changing state/presentation or replacing the external model
- THEN close the editor, abort pending confirmation and ignore late work.

#### Scenario: Desktop editor handoff
- WHEN clicking outside, tabbing away or activating another anchored field
- THEN save the current draft first; failed validation retains the draft and blocks opening another editor.
- WHEN saving succeeds
- THEN close the previous editor without stealing outside focus and open the requested field, with at most one editor per document.
- WHEN resetting during a pending handoff
- THEN cancel the save and handoff without reopening a field or publishing late results.

#### Scenario: Desktop keyboard and owned popups
- WHEN pressing Enter outside a native candidate menu
- THEN save, except composing input and plain Enter in multiline controls; Ctrl/Cmd+Enter saves multiline values.
- WHEN pressing Escape
- THEN close only the topmost owned native popup and restore control focus when a popup is open; otherwise cancel the draft unless confirmation is pending.
- WHEN interacting with a nested teleported menu or date/time panel
- THEN treat it as inside the editor; Enter selects an active candidate before submitting the field.

#### Scenario: Desktop edit affordance
- WHEN hovering or focusing an editable click/dblclick field
- THEN reveal an edit icon and a localized click/double-click hint. Clicking the icon always enters editing directly.
- WHEN disabled, readonly or readPretty
- THEN do not offer an edit action.

#### Scenario: Option fields and tree keyboard candidates
- WHEN editing AutoComplete, TreeSelect or PeopleSelect
- THEN use the same owned-popup containment, edit affordance, Enter selection/save and Escape popup/cancel priority as Select.
- WHEN navigating TreeSelect
- THEN navigate visible enabled nodes, reuse tree selection/checking/expansion rules, preserve custom field names and zero keys, and activate direct search matches before retained ancestors.
