## Why

SelectView mixes selection presentation with public InputTag behavior and repeats FormItem injection. Maple repeats the selected-field template across menu, picker and list. Both should use a direct FieldDecorator consumer.

## What Changes

- Add an internal SelectionField, independently copied into both libraries. No shared runtime, platform configuration or public component registration.
- Parent Select owns value/option resolution, form integration, popup state and commit policy. SelectionField owns selected content, tags, native search input, composition, focus and field decoration.
- Tags use stable keys instead of labels. Readonly/disabled values cannot be removed. Native clear uses FieldDecorator and forwards only one field clear notification.
- Cedar inherits unset size/disabled/error from FormItem; explicit false overrides inherited state. Existing public Select event payloads stay unchanged in this phase.

## Non-goals

Cascader and Date/Time field migration are now implemented, including removal of SelectView. Full Select/Cascader option algorithms and full Date/Time panel API convergence remain outside this field-layer change.

## Range interaction follow-up

Range fields and their panels use an instance-local active endpoint context, copied independently into both libraries. Moving focus between native range inputs does not blur the field or commit partial text. Panels remain usable standalone, with local state; no public platform configuration or shared runtime is introduced.
