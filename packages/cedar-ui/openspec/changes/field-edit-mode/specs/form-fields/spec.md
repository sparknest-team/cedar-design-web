## ADDED Requirements

### Requirement: Field editing mode has a canonical API
Form, FormItem and editable fields SHALL expose editMode. Cedar accepts direct, click and dblclick; Maple accepts direct and popup. Search accepts direct and popup on both platforms. Inheritance SHALL remain field > FormItem > Form and defaults SHALL retain each control's existing behavior.

#### Scenario: Direct editing
- WHEN editMode is direct
- THEN show the original control without an outer editing surface
- AND native control menus and pickers keep their own behavior

#### Scenario: Anchored desktop editing
- WHEN click or dblclick activates a Cedar field
- THEN retain the existing viewport-bounded editing overlay near that field, keyboard access, ownership, saving and cancellation

#### Scenario: Independent reading
- WHEN readPretty is enabled
- THEN display saved text without changing editMode
- WHEN readPretty is disabled
- THEN restore the chosen editing mode

#### Scenario: Removed editing API
- WHEN inspecting public field props and types
- THEN only editMode and its canonical types exist
- AND inline is rejected as an editing value
- AND there is no legacy prop, normalization or deprecation compatibility layer
- AND native picker presentation and layout=inline remain supported independently
