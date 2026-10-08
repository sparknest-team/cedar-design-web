# CheckboxGroup methods

## ADDED Requirements
### Requirement: Bulk methods
Both libraries SHALL expose checkAll(): ChoiceValue[] and inverseAll(): ChoiceValue[]. Methods SHALL preserve selected locked/unloaded values and obey max for additions. checkAll SHALL preserve existing model order and append eligible values in current DOM order. inverseAll SHALL remove editable selected values before adding previously unselected values in DOM order. Duplicate values SHALL be treated as locked if any registered copy is locked.

#### Scenario: Controlled and readonly
- WHEN a parent rejects a proposal or the group is disabled/readonly
- THEN methods SHALL NOT retain proposals or bypass guards; return values SHALL be detached arrays.

### Requirement: Registration lifecycle
Registries SHALL be per instance, register only children in that group, remove unmounted/deactivated children and restore KeepAlive children on activation. Disposed groups SHALL ignore retained method calls. Value/state/DOM order changes SHALL be read when the method runs, not captured once.

#### Scenario: Notification
- WHEN selection actually changes
- THEN update:modelValue, change and FormItem notification each occur once, in that order, without a synthetic Event.
- WHEN checkAll changes neither membership nor order
- THEN no value event occurs.
