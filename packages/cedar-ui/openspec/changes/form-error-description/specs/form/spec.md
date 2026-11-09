## ADDED Requirements

### Requirement: Custom controls can reference visible form errors

The library SHALL expose `useFormErrorDescription` from the Form and root entries so that a custom control can merge the current visible FormItem error ID into its existing `aria-describedby` references.

#### Scenario: An error is shown and then cleared

- **WHEN** a custom interactive element binds `describe(existingIds)` and its FormItem displays an error
- **THEN** the description includes the existing IDs and the visible error ID
- **AND** clearing the error removes the error ID while preserving existing IDs

#### Scenario: A control is outside a FormItem

- **WHEN** the same hook is used without an enclosing FormItem
- **THEN** it preserves the supplied description IDs without adding an error ID
