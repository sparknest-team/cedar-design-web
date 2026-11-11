## ADDED Requirements
### Requirement: Selection methods reach their actual current target
Select focus SHALL retain direct input / closed reference / open editor target semantics. Blur SHALL target the active editor in deferred mode and the native field in direct mode without opening or changing a model. PeopleSelect public focus/blur SHALL delegate through a current native Select ref and its declared presentation capabilities rather than stable empty functions.

#### Scenario: An open Select loses focus
- GIVEN a deferred Select editor whose search input is focused
- WHEN public blur is called
- THEN that input loses focus without any model change

#### Scenario: PeopleSelect direct focus and blur
- GIVEN the direct public PeopleSelect
- WHEN focus or blur is called
- THEN its actual Select input gains or loses focus
