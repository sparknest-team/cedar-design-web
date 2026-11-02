---
lang: en-US
permalink: /en/components/form/
---

# Form

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Reading direction

Form and FormItem accept start/end/left/center/right for content-align and start/end/left/right for label-align. Content defaults to start and labels to end: default LTR placement stays the same while RTL follows reading order. Explicit left/right remain physical. Item overrides and explicit label-column styles retain precedence. Direction changes preserve values, validation and disabled/readonly state.

## Basic examples

### Basic usage

- `model`: Form data object

<demo src="./__demos__/basic.vue"></demo>

## Form appearance and layout

### Disabled

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration      | Purpose                                                                       | Related examples                           |
| ------------------ | ----------------------------------------------------------------------------- | ------------------------------------------ |
| `layout`           | The layout of the form, including horizontal, vertical, and multi-column      | Layout, Decoration, Label width strategies |
| `model`            | Form data object                                                              | Decoration, Label width strategies         |
| `disabled`         | Whether to disable the form                                                   | Disabled                                   |
| `label-align`      | Label alignment                                                               | Label width strategies                     |
| `auto-label-width` | Automatically measure label widths; only effective with `layout="horizontal"` | Label width strategies                     |
| `label-col-flex`   | Label-column flex; numbers are flex ratios, unit-bearing strings are widths   | Label width strategies                     |

<!-- demo-config-notes:end -->

- `disabled`: Whether to disable the form

<demo src="./__demos__/disabled.vue"></demo>

### Layout

`edit-mode` describes editing behavior: `direct` always shows the control; `click` and `dblclick` activate the existing editor overlay near the field. `readPretty` is an independent boolean. FormItem and fields inherit the mode when omitted. The legacy field `presentation` prop has been removed; use `edit-mode` to configure editing behavior. Replace `presentation="inline"` with `edit-mode="direct"`; `layout="inline"` is unchanged.

Combine `layout`, `content-align` with `direct / click / dblclick` editing and the independent `readPretty` boolean to compare label, value and wrapped-text alignment. Notes can override the form layout, and values survive every switch. Click or double-click a value to edit in a popover; readPretty displays saved text.

<demo src="./__demos__/en-US/layout.vue"></demo>

### Decoration

- `model`: Form data object
- `layout`: The layout of the form, including horizontal, vertical, and multi-column

<demo src="./__demos__/decoration.vue"></demo>

### Extra

Preview configuration: `type="text"`, `placeholder="请输入"`.

<demo src="./__demos__/extra.vue"></demo>

### Label width strategies

Enter values, then switch between measured labels, responsive columns and fixed widths: all three strategies retain the same form model. Edit the longest label or hide the contact field to observe remeasurement. Below 576px, the responsive strategy stacks labels above controls; fixed widths use 6rem with an 8rem contact-field override.

<demo src="./__demos__/en-US/label-width-comparison.vue"></demo>

## Fields and data model

### Nested Data

- `model`: Form data object

<demo src="./__demos__/nested-data.vue"></demo>

### Field Components

- `model`: Form data object

<demo src="./__demos__/field-components.vue"></demo>

### Field Choice

- `model`: Form data object

<demo src="./__demos__/field-choice.vue"></demo>

### Field Selection

- `model`: Form data object

<demo src="./__demos__/field-selection.vue"></demo>

### Field Tree

- `model`: Form data object

<demo src="./__demos__/field-tree.vue"></demo>

### Field Date

- `model`: Form data object

<demo src="./__demos__/field-date.vue"></demo>

### Field Time

- `model`: Form data object

<demo src="./__demos__/field-time.vue"></demo>

### Field Rating

- `model`: Form data object

<demo src="./__demos__/field-rating.vue"></demo>

### Field Upload

- `model`: Form data object

<demo src="./__demos__/field-upload.vue"></demo>

### Field Specialized

- `model`: Form data object

<demo src="./__demos__/field-specialized.vue"></demo>

## Validation and submission

### Validate

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                                                  | Related examples                     |
| ------------- | ------------------------------------------------------------------------ | ------------------------------------ |
| `model`       | Form data object                                                         | Validate, Cross Field, Clear Trigger |
| `layout`      | The layout of the form, including horizontal, vertical, and multi-column | Clear Trigger                        |

<!-- demo-config-notes:end -->

- `model`: Form data object

<demo src="./__demos__/validate.vue"></demo>

### Cross Field

- `model`: Form data object

<demo src="./__demos__/cross-field.vue"></demo>

### Clear Trigger

- `model`: Form data object
- `layout`: The layout of the form, including horizontal, vertical, and multi-column

<demo src="./__demos__/clear-trigger.vue"></demo>

### Empty markers and required validation

The API uses -1 for no selection. Validate the initial value to see a required error, choose a department and validate successfully, then clear to -1 and validate again. Form provides recognition settings; the field defines clear output. Custom validators still receive the original value.

<demo src="./__demos__/en-US/empty-values-validation.vue"></demo>

### Feedback

Preview configuration: `placeholder="please enter your username..."`.

<demo src="./__demos__/feedback.vue"></demo>

## Field presentation and interaction

### State Lab

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration     | Purpose                                                                                                                            | Related examples                                         |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `layout`          | The layout of the form, including horizontal, vertical, and multi-column                                                           | State Lab, Presentation Status, Platform Presentation    |
| `model`           | Form data object                                                                                                                   | Field Presentation, Platform Presentation, Scroll Assign |
| `disabled`        | Whether to disable the form                                                                                                        | State Lab                                                |
| `readonly`        | Whether form controls are readonly                                                                                                 | State Lab                                                |
| `scroll-to-error` | After failed validation, scroll to the first (start) or last (end) invalid field in document order; this is not viewport alignment | Scroll Assign                                            |

<!-- demo-config-notes:end -->

- `layout`: The layout of the form, including horizontal, vertical, and multi-column

<demo src="./__demos__/state-lab.vue"></demo>

### Field Presentation

- `model`: Form data object

<demo src="./__demos__/field-presentation.vue"></demo>

### Reading placeholders and inheritance

Initially in reading mode, Name inherits Form’s default “-”, Code uses the FormItem override, Nickname uses the field override, and Quantity remains 0. Changing Form text only affects inheriting fields. Toggling reading/editing does not rewrite the model. Precedence is Field > FormItem > Form; custom read slots win.

<demo src="./__demos__/en-US/empty-text.vue"></demo>

### Presentation Status

- `layout`: The layout of the form, including horizontal, vertical, and multi-column

<demo src="./__demos__/presentation-status.vue"></demo>

### Platform Presentation

- `model`: Form data object
- `layout`: The layout of the form, including horizontal, vertical, and multi-column

<demo src="./__demos__/platform-presentation.vue"></demo>

### Field Panel Actions

Preview configuration: `default-value="2026-10-20 09:30:00"`, `show-time`, `:disable-confirm="false"`.

<demo src="./__demos__/field-panel-actions.vue"></demo>

### Scroll Assign

- `model`: Form data object
- `scroll-to-error`: Scroll to the first (start) or last (end) invalid field; omitted disables scrolling

<demo src="./__demos__/scroll-assign.vue"></demo>

## Dynamic and async fields

### Dynamic Form

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                            | Related examples                                |
| ------------- | ---------------------------------- | ----------------------------------------------- |
| `model`       | Form data object                   | Dynamic Form, Async Validate Form, Async Fields |
| `disabled`    | Whether to disable the form        | Presentation State, Async Race                  |
| `readonly`    | Whether form controls are readonly | Presentation State, Async Race                  |
| `rules`       | Form item validation rules         | Presentation State                              |

<!-- demo-config-notes:end -->

- `model`: Form data object

<demo src="./__demos__/dynamic-form.vue"></demo>

### Async Validate Form

- `model`: Form data object

<demo src="./__demos__/async-validate-form.vue"></demo>

### Async Fields

- `model`: Form data object

<demo src="./__demos__/async-fields.vue"></demo>

### Presentation State

- `model`: Form data object
- `disabled`: Whether to disable the form
- `readonly`: Whether form controls are readonly
- `rules`: Form item validation rules

<demo src="./__demos__/presentation-state.vue"></demo>

### Async Race

- `model`: Form data object
- `disabled`: Whether to disable the form
- `readonly`: Whether form controls are readonly

<demo src="./__demos__/async-race.vue"></demo>

### Field Range Boundaries

- `model`: Form data object

<demo src="./__demos__/field-range-boundaries.vue"></demo>

## Business workflows

### Task Workflow

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose                                                                  | Related examples |
| ------------- | ------------------------------------------------------------------------ | ---------------- |
| `model`       | Form data object                                                         | Task Workflow    |
| `layout`      | The layout of the form, including horizontal, vertical, and multi-column | Task Workflow    |

<!-- demo-config-notes:end -->

- `model`: Form data object
- `layout`: The layout of the form, including horizontal, vertical, and multi-column

<demo src="./__demos__/task-workflow.vue"></demo>

## API

### Empty values and reading placeholders

Form / FormItem provide empty recognition through `empty-values`; each field defines clear output with its own `empty-value`. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit empty-values, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop         | Type               | Default and scope                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text   | string             | Field > FormItem > Form > '-'; explicit '' is valid                         |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### `<Form>` Props

| Parameter         | Description                                                                                                                                    | Type                                       |        Default        |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | :-------------------: |
| model             | Form data object                                                                                                                               | `object`                                   |         `{}`          |
| layout            | The layout of the form, including horizontal, vertical, and multi-column                                                                       | `'horizontal' \| 'vertical' \| 'inline'`   |    `'horizontal'`     |
| size              | The size of the form                                                                                                                           | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`     |        `'md'`         |
| label-col-flex    | Label-column flex; numbers are flex ratios, unit-bearing strings are widths                                                                    | `number \| string`                         |          `-`          |
| label-col-style   | Per-instance label column style                                                                                                                | `CSSProperties`                            |          `-`          |
| wrapper-col-style | Per-instance control column style                                                                                                              | `CSSProperties`                            |          `-`          |
| label-col-props   | Label layout options; same parameters as the col component                                                                                     | `object`                                   | `span: 5, offset: 0`  |
| wrapper-col-props | Form-control layout options; same parameters as the col component                                                                              | `object`                                   | `span: 19, offset: 0` |
| label-align       | Label alignment                                                                                                                                | `'start' \| 'end' \| 'left' \| 'right'`                        |       `'end'`       |
| `content-align`   | Content alignment shared by direct fields, editor triggers and readPretty output; independent of label-align                                   | `'start' \| 'end' \| 'left' \| 'center' \| 'right'`            |       `'start'`        |
| `read-pretty`     | Independent reading toggle. When true, displays the saved value; when false, restores the current edit-mode. FormItem inherits Form when unset | `boolean`                                  |          `-`          |
| `edit-mode`       | Shared editing mode for form fields; when unset, preserves each field default                                                                  | `'direct' \| 'click' \| 'dblclick'`        |          `-`          |
| disabled          | Whether to disable the form                                                                                                                    | `boolean`                                  |          `-`          |
| readonly          | Whether form controls are readonly                                                                                                             | `boolean`                                  |          `-`          |
| rules             | Form item validation rules                                                                                                                     | `Record<string, FieldRule \| FieldRule[]>` |          `-`          |
| auto-label-width  | Automatically measure label widths; only effective with `layout="horizontal"`                                                                  | `boolean`                                  |        `false`        |
| id                | Prefix for form-control ids                                                                                                                    | `string`                                   |          `-`          |
| scroll-to-error   | After failed validation, scroll to the first (start) or last (end) invalid field in document order; this is not viewport alignment             | `'start' \| 'end'`                         |     Do not scroll     |

### `<Form>` Events

| Event          | Description                                                            | Arguments                                                                                                 |
| -------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| submit         | Triggered when the form is submitted                                   | data: `{values: Record<string, any>; errors: Record<string, ValidatedError> \| undefined}`<br>ev: `Event` |
| submit-success | Emitted when validation succeeds                                       | values: `Record<string, any>`<br>ev: `Event`                                                              |
| submit-failed  | Emitted when validation fails                                          | data: `{values: Record<string, any>; errors: Record<string, ValidatedError>}`<br>ev: `Event`              |
| reset          | Emitted on native reset; also resets field values and validation state | ev: `Event`                                                                                               |

### `<form>` Methods

| Method        | Description                     | Arguments                                                                                                | Returns                                              |
| ------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| validate      | Validate all form data          | callback: `(errors: undefined \| Record<string, ValidatedError>) => void`                                | Promise<undefined \| Record<string, ValidatedError>> |
| validateField | Validate selected form fields   | field: `string \| string[]`<br>callback: `(errors: undefined \| Record<string, ValidatedError>) => void` | Promise<undefined \| Record<string, ValidatedError>> |
| resetFields   | Reset form data                 | field: `string \| string[]`                                                                              | -                                                    |
| clearValidate | Clear validation state          | field: `string \| string[]`                                                                              | -                                                    |
| setFields     | Set form-item values and states | data: `Record<string, FieldData>`                                                                        | -                                                    |
| scrollToField | Scroll to a form item           | `field: string`                                                                                          | `-`                                                  |

### `<FormItem>` Props

Layout, label/content columns, styles, alignment and flex inherit from Form when omitted; explicit values override them.

| Parameter         | Description                                                                                                                                    | Type                                                  |       Default       |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | :-----------------: |
| field             | Field path in the data object; required for data fields                                                                                        | `string`                                              |        `''`         |
| label             | Label text                                                                                                                                     | `string`                                              |         `-`         |
| tooltip           | Hint content                                                                                                                                   | `string`                                              |         `-`         |
| show-colon        | Whether to show a colon                                                                                                                        | `boolean`                                             |       `false`       |
| no-style          | Whether to remove styling                                                                                                                      | `boolean`                                             |       `false`       |
| disabled          | Whether disabled                                                                                                                               | `boolean`                                             |         `-`         |
| readonly          | Readonly state; inherits from Form when omitted                                                                                                | `boolean`                                             |         `-`         |
| help              | Help text                                                                                                                                      | `string`                                              |         `-`         |
| extra             | Extra text                                                                                                                                     | `string`                                              |         `-`         |
| required          | Whether a value is required                                                                                                                    | `boolean`                                             |       `false`       |
| asterisk-position | Logical start/end position of the required asterisk within the field label, default start; not the form or popup position                      | `'start' \| 'end'`                                    |      `'start'`      |
| rules             | Field validation rules; take precedence over Form rules                                                                                        | `FieldRule \| FieldRule[]`                            |         `-`         |
| validate-status   | Validation state                                                                                                                               | `'success' \| 'warning' \| 'error' \| 'validating'`   |         `-`         |
| validate-trigger  | Events that trigger validation; `clear` is emitted only by a control `clear` action and is distinct from `change`                              | `'change' \| 'input' \| 'focus' \| 'blur' \| 'clear'` |     `'change'`      |
| size              | Control size; inherits from Form when omitted. Form layout still controls label appearance                                                     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                |         `-`         |
| layout            | Form-item layout; inherits from Form when omitted                                                                                              | `'horizontal' \| 'vertical' \| 'inline'`              |         `-`         |
| label-align       | Label alignment; inherits from Form when omitted                                                                                               | `'start' \| 'end' \| 'left' \| 'right'`                                   |         `-`         |
| `content-align`   | Content alignment shared by direct fields, editor triggers and readPretty output; independent of label-align                                   | `'start' \| 'end' \| 'left' \| 'center' \| 'right'`                       | `-` (inherits Form) |
| `read-pretty`     | Independent reading toggle. When true, displays the saved value; when false, restores the current edit-mode. FormItem inherits Form when unset | `boolean`                                             |         `-`         |
| `edit-mode`       | Editing mode; inherits Form when unset and may be overridden by individual fields                                                              | `'direct' \| 'click' \| 'dblclick'`                   |         `-`         |
| label-col-props   | Label layout options; same parameters as the col component                                                                                     | `object`                                              |         `-`         |
| wrapper-col-props | Form-control layout options; same parameters as the col component                                                                              | `object`                                              |         `-`         |
| hide-label        | Hide label                                                                                                                                     | `boolean`                                             |       `false`       |
| hide-asterisk     | Whether to hide the required marker                                                                                                            | `boolean`                                             |       `false`       |
| label-col-style   | Style for the label layout component                                                                                                           | `object`                                              |         `-`         |
| wrapper-col-style | Style for the control layout component                                                                                                         | `object`                                              |         `-`         |
| row-props         | Form-item layout options; same parameters as the row component                                                                                 | `object`                                              |         `-`         |
| row-class         | Class for the form-item layout component                                                                                                       | `string\|array\|object`                               |         `-`         |
| content-class     | Class for the control wrapper                                                                                                                  | `string\|array\|object`                               |         `-`         |
| content-flex      | Whether the content wrapper uses flex layout                                                                                                   | `boolean`                                             |       `true`        |
| label-col-flex    | Sets flex on the label `Col` component; the control `Col` flex is then set to `auto`                                                           | `number\|string`                                      |         `-`         |
| feedback          | Whether to show control feedback icons                                                                                                         | `boolean`                                             |       `false`       |
| label-component   | Element used to render the form-item label                                                                                                     | `string`                                              |      `'label'`      |
| label-attrs       | Native label attributes; for targets the actual control id                                                                                     | `object`                                              |         `-`         |

### `<FormItem>` Slots

| Slot  |  Description  | Arguments |
| ----- | :-----------: | --------- |
| label |     Label     | -         |
| help  | Help content  | -         |
| extra | Extra content | -         |

## Type

### FieldRule

| Parameter | Description                                       | Type                                                                                                        | Default |
| --------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | :-----: |
| type      | Validated value type; defaults to `'string'`      | `'string'    \| 'number'    \| 'boolean'    \| 'array'    \| 'object'    \| 'email'    \| 'url'    \| 'ip'` |   `-`   |
| required  | Whether the value is required                     | `boolean`                                                                                                   | `false` |
| message   | Message displayed on validation failure           | `string`                                                                                                    |   `-`   |
| length    | Required length for string/array values           | `number`                                                                                                    |   `-`   |
| maxLength | Maximum string length                             | `number`                                                                                                    |   `-`   |
| minLength | Minimum string length                             | `number`                                                                                                    |   `-`   |
| match     | Pattern matching for strings                      | `RegExp`                                                                                                    |   `-`   |
| uppercase | Uppercase string validation                       | `boolean`                                                                                                   | `false` |
| lowercase | Lowercase string validation                       | `boolean`                                                                                                   | `false` |
| min       | Minimum numeric value                             | `number`                                                                                                    |   `-`   |
| max       | Maximum numeric value                             | `number`                                                                                                    |   `-`   |
| equal     | Numeric-value validation                          | `number`                                                                                                    |   `-`   |
| positive  | Positive-number validation                        | `boolean`                                                                                                   | `false` |
| negative  | Negative-number validation                        | `boolean`                                                                                                   | `false` |
| true      | Whether a boolean is `true`                       | `boolean`                                                                                                   | `false` |
| false     | Whether a boolean is `false`                      | `boolean`                                                                                                   | `false` |
| includes  | Whether an array contains the specified value     | `any[]`                                                                                                     |   `-`   |
| deepEqual | Whether array elements are equal                  | `any`                                                                                                       |   `-`   |
| empty     | Whether an object is empty                        | `boolean`                                                                                                   | `false` |
| hasKeys   | Whether an object contains the specified property | `string[]`                                                                                                  |   `-`   |
| validator | Custom validation rule                            | `(    value: FieldValue \| undefined,    callback: (error?: string) => void  ) => void`                     |   `-`   |

### FieldData

| Parameter | Description         | Type             | Default |
| --------- | ------------------- | ---------------- | :-----: |
| value     | Field value         | `any`            |   `-`   |
| status    | Field state         | `ValidateStatus` |   `-`   |
| message   | Field error message | `string`         |   `-`   |

### ValidatedError

| Parameter       | Description                              | Type      | Default |
| --------------- | ---------------------------------------- | --------- | :-----: |
| label           | Label text                               | `string`  |   `-`   |
| field           | Field name                               | `string`  |   `-`   |
| value           | Field value                              | `any`     |   `-`   |
| type            | Field type                               | `string`  |   `-`   |
| isRequiredError | Whether this is a `required`-field error | `boolean` | `false` |
| message         | Error message                            | `string`  |   `-`   |

### FormItemEventHandler

| Parameter | Description | Type                   | Default |
| --------- | ----------- | ---------------------- | :-----: |
| onChange  | onChange    | `(ev?: Event) => void` |   `-`   |
| onInput   | onInput     | `(ev?: Event) => void` |   `-`   |
| onFocus   | onFocus     | `(ev?: Event) => void` |   `-`   |
| onBlur    | onBlur      | `(ev?: Event) => void` |   `-`   |

### useFormItem

```ts
const useFormItem = (data: {
  size?: Ref<Size | undefined>;
  disabled?: Ref<boolean>;
  error?: Ref<boolean>;
}) => {
  mergedSize: Ref<Size>;
  mergedDisabled: Ref<boolean>;
  mergedError: Ref<boolean>;
  feedback: Ref<string>;
  eventHandlers: Ref<FormItemEventHandler>;
};
```

## Type definitions

The component exports the following types

```ts
import type { FormProps } from "@cedar-design/ui";
```

### Five density levels and item spacing

xs/sm/md/lg/xl select geometry through size classes. Item bottom spacing and reserved validation-message height both use size-*-item-margin-bottom. Inline layout uses inline-item-margin-bottom; error/help do not add item bottom spacing again.

| Variable                              | Default                     |
| ------------------------------------- | --------------------------- |
| `--c-form-size-xl-height`             | `var(--c-size-xl)`          |
| `--c-form-size-xl-label-font-size`    | `var(--c-sys-font-size-lg)` |
| `--c-form-size-xl-item-margin-bottom` | `var(--c-spacing-8)`        |

### edit-mode inheritance

Form supports `direct / click / dblclick`. When unset, each field retains its own default; FormItem and fields inherit explicitly configured ancestor values, and an explicit field value takes precedence. readPretty controls reading independently of readonly/disabled. Submitting the form fails while a confirmation editor remains unfinished, preserving its draft; reset cancels editing. Existing default slots and v-model are unchanged, and no editor slot is required.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.
