## ADDED Requirements

### Requirement: Content and copy ownership
Typography MUST derive default copy and measurement text from the rendered slot without remounting business components. It MUST notify `copy` and show success only after a successful clipboard write, and MUST ignore obsolete completion feedback.

#### Scenario: Copy a stateful slot
- **WHEN** a user copies content provided by a stateful child component
- **THEN** the copied text reflects its rendered context and the child is not remounted for extraction
- **AND** failed or obsolete clipboard operations do not report success

### Requirement: Editing and accessible operations
Typography MUST expose disabled operation buttons as natively disabled and MUST retain copy/edit controls outside the CSS ellipsis clip. Editing MUST preserve the root's semantic element and layout attributes, name the input, ignore IME confirmation, and return focus after Enter release only when focus ownership permits it.

#### Scenario: Complete editing by keyboard
- **WHEN** a user confirms editing with Enter outside IME composition
- **THEN** the editing root retains its attributes and the named input requests the update
- **AND** focus returns after key release only if the user has not moved it elsewhere

### Requirement: Public event and slot contract
Text, Title and Paragraph MUST forward their eight notification events and expose their default, copy and expand slots with typed payloads. The root MUST expose its default slot. Info and tertiary statuses MUST use their semantic content colors. Invalid heading, line count and feedback delay values MUST fall back to documented safe defaults.

#### Scenario: Use the public component contract
- **WHEN** a consumer binds a typed slot or listens to a notification on a content component
- **THEN** the declared payload matches the runtime event or slot scope
- **AND** invalid numeric values use the documented fallback
