## ADDED Requirements

### Requirement: Internal map search is isolated from the outer form field

MapSelect SHALL expose its FormItem error on its own field while its map search input SHALL NOT inherit the outer error or trigger the outer field's validation events.

#### Scenario: A form error is present while searching for a location

- **WHEN** a user opens MapSelect inside an invalid FormItem and focuses the map search
- **THEN** the outer field retains its error description and explicit descriptions
- **AND** the search input does not inherit that error or cause the outer field's focus validation

### Requirement: Cascader menu controls do not duplicate the field error

The Cascader field SHALL retain the current FormItem error description while internal menu checkboxes and a separate editor search SHALL NOT inherit that field error. A field input reused as an editor SHALL retain its field description.

#### Scenario: A multiple Cascader has an error

- **WHEN** a multiple Cascader displays options while its FormItem has an error
- **THEN** the field retains its explicit and error descriptions
- **AND** the individual option checkboxes do not repeat the field error

### Requirement: Custom controls can reference visible form errors

The library SHALL expose `useFormErrorDescription` from the Form and root entries so that a custom control can merge the current visible FormItem error ID into its existing `aria-describedby` references.

#### Scenario: An error is shown and then cleared

- **WHEN** a custom interactive element binds `describe(existingIds)` and its FormItem displays an error
- **THEN** the description includes the existing IDs and the visible error ID
- **AND** clearing the error removes the error ID while preserving existing IDs

#### Scenario: A control is outside a FormItem

- **WHEN** the same hook is used without an enclosing FormItem
- **THEN** it preserves the supplied description IDs without adding an error ID
