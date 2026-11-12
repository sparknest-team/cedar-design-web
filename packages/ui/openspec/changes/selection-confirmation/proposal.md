# Selection confirmation

Select, Cascader, AutoComplete, PeopleSelect and Cedar TreeSelect expose `need-confirm?: boolean` for overlay editing. The default is immediate completion for single selection and confirmation for multiple selection. Explicit true retains a draft until confirmation; explicit false commits a completed choice through existing validation and before-commit guards. Direct inline behavior is unchanged. AutoComplete typing stays editable and only selecting a suggestion auto-completes the editor. Clear commits when confirmation is disabled. Cancellation, controlled values, pending work and rejected guards retain the existing transaction contract.

Selection text and suffix checks use the same primary action color as Button. Resting selected rows are transparent; hover and keyboard highlighting keep existing backgrounds without changing selected text color. Both Vue platforms are updated together; TreeSelect is Cedar-only.
