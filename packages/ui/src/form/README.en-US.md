---
lang: en-US
permalink: /en/components/form/
---

# Form


Horizontal form items use zero Row gutter by default, preserving the standard 16px item spacing. Explicit `row-props.gutter` overrides remain available. Input and selection fields default to `outline`; `filled` and `standard` remain explicit options.

## Field names

When `validate-status="error"` has no automatic validation error, the field associates visible `help` text or slot content through `aria-describedby`, preserving any supplied description. An automatic error takes precedence.

In SSR with Vue 3.2.47, if multiple asynchronous form items resolve in opposite orders on the server and client, updating one item can duplicate generated description IDs or associate it with another field’s error. Giving the Input a stable `id` alone does not prevent this; the same scenario passed with Vue 3.5.45.

For a deferred Slider inside Shadow DOM, a popup teleported to `body` may not resolve ID references to hints or errors inside the shadow root. Set `:popup-container="false"`, or pass an element within the same ShadowRoot as `popup-container`, to keep the popup and hints in the same root. Provide clear control names, and account for the container’s styling, positioning, and clipping.

In direct edit mode, for a visible label on a single field, match FormItem `label-attrs.for` to the control `id`. The native inputs in selection, date and time fields do not let their placeholder override an associated label. An explicit `aria-label` or `aria-labelledby` retains its native accessible-name precedence. Placeholder is only a fallback when no label is supplied; provide clear labels. Date and time range fields in FormItem associate the form label with their group; use `input-attrs` to give the endpoints distinct names. If `label-attrs.for` targets another control, the label is not associated with the range group. Without `for`, the range currently references the nearest FormItem label even when that item contains other controls. For mixed fields, put the range in a separate styled FormItem with its own name, or explicitly target the intended control with `for` and name the other controls separately. When `for` matches a single-value Slider’s `id`, its thumb and optional numeric input use the label; clicking the default native label focuses the enabled thumb; preventing the label click default cancels that focus. When `for` matches a range Slider’s `id`, the form label names the group; use an `aria-label` array to name the endpoints separately. The `tooltip` button is independently focusable and its name is not added to the field label.

Transfer and ColorPicker also reference the nearest FormItem label when `for` and an explicit name are absent, including when the item contains other fields. For mixed fields, place each in a separate FormItem, or give each control an explicit name and associate labels with the other fields separately.

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

### Switching no-style dynamically

Fields can be edited and validated when `no-style` stays unchanged for the lifetime of a FormItem. Currently, changing it dynamically remounts descendant fields, which can lose focus, uncommitted internal drafts and validation state, and can change their reset baseline. To preserve these states, keep the property stable and adjust the layout outside the field; you can also commit or save drafts before switching.

### Multiple controls under one label

For mixed controls, give the visible label a unique ID and explicitly name a group with it. Give each control its own name as well. Use a unique ID for each FormItem instance.

```vue
<c-form-item label="Contact" label-component="span" :label-attrs="{ id: 'contact-label' }">
  <div role="group" aria-labelledby="contact-label">
    <c-input aria-label="Email" />
    <input aria-label="Phone" />
  </div>
</c-form-item>
```

## Reading direction

Form and FormItem accept start/end/left/center/right for content-align and start/end/left/right for label-align. Content defaults to start and labels to end: default LTR placement stays the same while RTL follows reading order. Explicit left/right remain physical. Item overrides and explicit label-column styles retain precedence. Direction changes preserve values, validation and disabled/readonly state.

The component exports the following types

```ts
import type { FormProps } from "@cedar-design/ui-vue";
```

## Basic examples

### Basic usage

- `model`: Form data object

<demo src="./__demos__/basic.vue"></demo>

## Form appearance and layout

### Disabled

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ------------------ | --------------------------------------------------------- | ------------------------------------------ |
| `layout` | The layout of the form, including horizontal, vertical, and multi-column | Layout, Decoration, Label width strategies |
| `model` | Form data object | Decoration, Label width strategies |
| `disabled` | Whether to disable the form | Disabled |
| `label-align` | Label alignment | Label width strategies |
| `auto-label-width` | Automatically measure label widths; only effective with `layout="horizontal"` | Label width strategies |
| `label-col-flex` | Label-column flex; numbers are flex ratios, unit-bearing strings are widths | Label width strategies |

<!-- demo-config-notes:end -->


- `disabled`: Whether to disable the form

<demo src="./__demos__/disabled.vue"></demo>

### Layout

`edit-mode` describes editing behavior: `direct` always shows the control; `click` and `dblclick` activate the existing editor overlay near the field. `readPretty` is an independent boolean. FormItem and fields inherit the mode when omitted. 

Combine `layout`, `content-align` with `direct / click / dblclick` editing and the independent `readPretty` boolean to compare label, value and wrapped-text alignment. Notes can override the form layout, and values survive every switch. Click or double-click a value to edit in a popover; readPretty displays saved text.

<demo src="./__demos__/layout.vue"></demo>

### Decoration

- `model`: Form data object
- `layout`: The layout of the form, including horizontal, vertical, and multi-column

<demo src="./__demos__/decoration.vue"></demo>

### Extra

Preview configuration: `type="text"`, `placeholder="请输入"`.

<demo src="./__demos__/extra.vue"></demo>

### Partial form section

Group only the onsite SOP, safety notice and key points. The end divider separates the following ungrouped fields. Switch between line, plain and card above the form; your entries are preserved. Toggle the title marker and end divider to compare boundaries. Card uses its outer border instead of a separate end divider.  Section adapts its layout to the parent Form. Fields receive label sizing, disabled state and validation directly from Form; use Form/FormItem layout props to configure them. Supply a title or title slot. Folding and local layout overrides are not supported.

<demo src="./__demos__/section.vue"></demo>

### Section header actions

The extra slot places actions at the right of the title. Use template fills the three onsite fields; Clear resets them. Edit the outside skill level, then use either action to verify that it stays unchanged.

<demo src="./__demos__/section-actions.vue"></demo>

### Label width strategies

Enter values, then switch between measured labels, responsive columns and fixed widths: all three strategies retain the same form model. Edit the longest label or hide the contact field to observe remeasurement. Below 576px, the responsive strategy stacks labels above controls; fixed widths use 6rem with an 8rem contact-field override.

<demo src="./__demos__/label-width-comparison.vue"></demo>

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

| Configuration | Purpose | Related examples |
| -------- | ------------------------------------ | ------------------------------------------ |
| `model` | Form data object | Validate, Cross Field, Clear Trigger |
| `layout` | The layout of the form, including horizontal, vertical, and multi-column | Clear Trigger |

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

| Configuration | Purpose | Related examples |
| ----------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| `layout` | The layout of the form, including horizontal, vertical, and multi-column | State Lab, Presentation Status, Platform Presentation |
| `model` | Form data object | Field Presentation, Platform Presentation, Scroll Assign |
| `disabled` | Whether to disable the form | State Lab |
| `readonly` | Whether form controls are readonly | State Lab |
| `scroll-to-error` | After failed validation, scroll to the first (start) or last (end) invalid field in document order; this is not viewport alignment | Scroll Assign |

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

### Confirmation event source

<demo src="./__demos__/change-source.vue"></demo>

## Dynamic and async fields

### Dynamic Form

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ---------- | ---------------------- | ---------------------------------------- |
| `model` | Form data object | Dynamic Form, Async Validate Form, Async Fields |
| `disabled` | Whether to disable the form | Presentation State, Async Race |
| `readonly` | Whether form controls are readonly | Presentation State, Async Race |
| `rules` | Form item validation rules | Presentation State |

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

### Async submit input ownership

A native submission owns the reactive model and validation definitions it starts with. Changing model fields (including other fields and change-then-restore), replacing model/rules, changing FormItem rules/required/field, or adding/removing registered fields invalidates a waiting submission. Its eventual success or error does not emit submit, submit-success or submit-failed and does not trigger automatic error scrolling. Submit again to validate the latest inputs. This is logical invalidation, not request cancellation or automatic resubmission, and does not change imperative validation return contracts. Completed submission history is retained. Use reactive state so Vue can observe input changes. Ordinary event listener Promises are not collected.

<demo src="./__demos__/submit-inputs.vue"></demo>

### Dynamic field identity and reset

A reused FormItem automatically unregisters the old field and registers the new nonempty field. Clearing field unregisters it. Each field path retains its first available initial value within that item instance; revisiting a field does not replace its initial value with current edits. Reset clones that field baseline, including 0, false, null and missing/undefined values. Identity changes cancel its editor and invalidate old feedback and field-set callbacks. Already-started imperative validation promises still settle independently; callers own their result text.

An existing model object with a missing property captures undefined. Model/rule replacement does not rebase an already-captured initial value. For async initial data, bind the field or render the item when that data is ready. Recreating the item starts fresh initial baselines.

<demo src="./__demos__/field-identity.vue"></demo>

### Five density levels and item spacing

xs/sm/md/lg/xl select geometry through size classes. All sizes default to 16px item spacing; control height and label font size still follow size. Item bottom spacing and reserved validation-message height both use size-*-item-margin-bottom. Inline layout uses inline-item-margin-bottom; error/help do not add item bottom spacing again.

| Variable | Default |
| ------------------------------------- | --------------------------- |
| `--c-form-size-xl-height` | `var(--c-size-xl)` |
| `--c-form-size-xl-label-font-size` | `var(--c-sys-font-size-lg)` |
| `--c-form-size-xl-item-margin-bottom` | `var(--c-spacing-7)` |

### edit-mode inheritance

Form supports `direct / click / dblclick`. When unset, each field retains its own default; FormItem and fields inherit explicitly configured ancestor values, and an explicit field value takes precedence. readPretty controls reading independently of readonly/disabled. Submitting the form fails while a confirmation editor remains unfinished, preserving its draft; reset cancels editing. Existing default slots and v-model are unchanged, and no editor slot is required.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.

## Business workflows

### Task Workflow

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| -------- | ------------------------------------ | ---------------- |
| `model` | Form data object | Task Workflow |
| `layout` | The layout of the form, including horizontal, vertical, and multi-column | Task Workflow |

<!-- demo-config-notes:end -->


- `model`: Form data object
- `layout`: The layout of the form, including horizontal, vertical, and multi-column

<demo src="./__demos__/task-workflow.vue"></demo>

## API

Use edit-mode for editing presentation and read-pretty for reading state. The internal descriptor fieldEditModeProp is not a public Form or FormItem prop.


### Empty values and reading placeholders

Form / FormItem provide empty recognition through `empty-values`; each field defines clear output with its own `empty-value`. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

### Form Props

| Parameter | Description | Type | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------ | :-------------------: |
| model | Form data object | `object` | `{}` |
| layout | The layout of the form, including horizontal, vertical, and multi-column | `'horizontal' \| 'vertical' \| 'inline'` | `'horizontal'` |
| size | The size of the form | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| label-col-flex | Label-column flex; numbers are flex ratios, unit-bearing strings are widths | `number \| string` | `-` |
| label-col-style | Per-instance label column style | `CSSProperties` | `-` |
| wrapper-col-style | Per-instance control column style | `CSSProperties` | `-` |
| label-col-props | Label layout options; same parameters as the col component | `object` | `span: 5, offset: 0` |
| wrapper-col-props | Form-control layout options; same parameters as the col component | `object` | `span: 19, offset: 0` |
| label-align | Label alignment | `'start' \| 'end' \| 'left' \| 'right'` | `'end'` |
| `content-align` | Content alignment shared by direct fields, editor triggers and readPretty output; independent of label-align | `'start' \| 'end' \| 'left' \| 'center' \| 'right'` | `'start'` |
| `read-pretty` | Independent reading toggle. When true, displays the saved value; when false, restores the current edit-mode. FormItem inherits Form when unset | `boolean` | `-` |
| `edit-mode` | Shared editing mode for form fields; when unset, preserves each field default | `'direct' \| 'click' \| 'dblclick'` | `-` |
| disabled | Whether to disable the form | `boolean` | `-` |
| readonly | Whether form controls are readonly | `boolean` | `-` |
| rules | Form item validation rules | `Record<string, FieldRule \| FieldRule[]>` | `-` |
| auto-label-width | Automatically measure label widths; only effective with `layout="horizontal"` | `boolean` | `false` |
| id | Prefix for form-control ids | `string` | `-` |
| scroll-to-error | After failed validation, scroll to the first (start) or last (end) invalid field in document order; this is not viewport alignment | `'start' \| 'end'` | Do not scroll |

### Form Events

| Event | Description | Arguments |
| -------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| submit | Triggered when the form is submitted | data: `{values: Record<string, any>; errors: Record<string, ValidatedError> \| undefined}`<br>ev: `Event` |
| submit-success | Emitted when validation succeeds | values: `Record<string, any>`<br>ev: `Event` |
| submit-failed | Emitted when validation fails | data: `{values: Record<string, any>; errors: Record<string, FormSubmitError>}`<br>ev: `Event` |
| reset | Emitted on native reset; also resets field values and validation state | ev: `Event` |

### Form Methods

| Method | Description | Arguments | Returns |
| ------------- | -------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| validate | Validate all form data | callback: `(errors: undefined \| Record<string, ValidatedError>) => void` | Promise<undefined \| Record<string, ValidatedError>> |
| validateField | Validate selected form fields | field: `string \| string[]`<br>callback: `(errors: undefined \| Record<string, ValidatedError>) => void` | Promise<undefined \| Record<string, ValidatedError>> |
| resetFields | Reset form data | field: `string \| string[]` | - |
| clearValidate | Clear validation state | field: `string \| string[]` | - |
| setFields | Set form-item values and states | data: `Record<string, FieldData>` | - |
| scrollToField | Scroll to a form item | `field: string` | `-` |

### FormItem Props

Layout, label/content columns, styles, alignment and flex inherit from Form when omitted; explicit values override them.

| Parameter | Description | Type | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | :--------------: |
| field | Field path in the data object; required for data fields | `string` | `''` |
| label | Label text | `string` | `-` |
| tooltip | Hint content | `string` | `-` |
| show-colon | Whether to show a colon | `boolean` | `false` |
| no-style | Whether to remove styling | `boolean` | `false` |
| disabled | Whether disabled | `boolean` | `-` |
| readonly | Readonly state; inherits from Form when omitted | `boolean` | `-` |
| help | Help text | `string` | `-` |
| extra | Extra text | `string` | `-` |
| required | Whether a value is required | `boolean` | `false` |
| asterisk-position | Logical start/end position of the required asterisk within the field label, default start; not the form or popup position | `'start' \| 'end'` | `'start'` |
| rules | Field validation rules; take precedence over Form rules | `FieldRule \| FieldRule[]` | `-` |
| validate-status | Validation state | `'success' \| 'warning' \| 'error' \| 'validating'` | `-` |
| validate-trigger | Events that trigger validation; `clear` is emitted only by a control `clear` action and is distinct from `change` | `'change' \| 'input' \| 'focus' \| 'blur' \| 'clear'` | `'change'` |
| size | Control size; inherits from Form when omitted. Form layout still controls label appearance | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `-` |
| layout | Form-item layout; inherits from Form when omitted | `'horizontal' \| 'vertical' \| 'inline'` | `-` |
| label-align | Label alignment; inherits from Form when omitted | `'start' \| 'end' \| 'left' \| 'right'` | `-` |
| `content-align` | Content alignment shared by direct fields, editor triggers and readPretty output; independent of label-align | `'start' \| 'end' \| 'left' \| 'center' \| 'right'` | `-` (inherits Form) |
| `read-pretty` | Independent reading toggle. When true, displays the saved value; when false, restores the current edit-mode. FormItem inherits Form when unset | `boolean` | `-` |
| `edit-mode` | Editing mode; inherits Form when unset and may be overridden by individual fields | `'direct' \| 'click' \| 'dblclick'` | `-` |
| label-col-props | Label layout options; same parameters as the col component | `object` | `-` |
| wrapper-col-props | Form-control layout options; same parameters as the col component | `object` | `-` |
| hide-label | Hide label | `boolean` | `false` |
| hide-asterisk | Whether to hide the required marker | `boolean` | `false` |
| label-col-style | Style for the label layout component | `object` | `-` |
| wrapper-col-style | Style for the control layout component | `object` | `-` |
| row-props | Form-item layout options; same parameters as the row component | `object` | `-` |
| row-class | Class for the form-item layout component | `string\|array\|object` | `-` |
| content-class | Class for the control wrapper | `string\|array\|object` | `-` |
| content-flex | Whether the content wrapper uses flex layout | `boolean` | `true` |
| label-col-flex | Sets flex on the label `Col` component; the control `Col` flex is then set to `auto` | `number\|string` | `-` |
| feedback | Whether to show control feedback icons | `boolean` | `false` |
| label-component | Element used to render the form-item label | `string` | `'label'` |
| label-attrs | Native label attributes; for targets the actual control id | `object` | `-` |

### FormItem Slots

| Slot | Description | Prop |
| ------ | :------: | ---- |
| label | Label | - |
| help | Help content | - |
| extra | Extra content | - |

## Types

### FieldRule

| Parameter | Description | Type | Default |
| --------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------- | :-----: |
| type | Validated value type; defaults to `'string'` | `'string'    \| 'number'    \| 'boolean'    \| 'array'    \| 'object'    \| 'email'    \| 'url'    \| 'ip'` | `-` |
| required | Whether the value is required | `boolean` | `false` |
| message | Message displayed on validation failure | `string` | `-` |
| length | Required length for string/array values | `number` | `-` |
| maxLength | Maximum string length | `number` | `-` |
| minLength | Minimum string length | `number` | `-` |
| match | Pattern matching for strings | `RegExp` | `-` |
| uppercase | Uppercase string validation | `boolean` | `false` |
| lowercase | Lowercase string validation | `boolean` | `false` |
| min | Minimum numeric value | `number` | `-` |
| max | Maximum numeric value | `number` | `-` |
| equal | Numeric-value validation | `number` | `-` |
| positive | Positive-number validation | `boolean` | `false` |
| negative | Negative-number validation | `boolean` | `false` |
| true | Whether a boolean is `true` | `boolean` | `false` |
| false | Whether a boolean is `false` | `boolean` | `false` |
| includes | Whether an array contains the specified value | `any[]` | `-` |
| deepEqual | Whether array elements are equal | `any` | `-` |
| empty | Whether an object is empty | `boolean` | `false` |
| hasKeys | Whether an object contains the specified property | `string[]` | `-` |
| validator | Custom validation; context contains model/field; asynchronous rules must return a Promise | `(value, callback, context?) => void \| Promise<void>` | `-` |

### FieldData

| Parameter | Description | Type | Default |
| ------- | -------------- | ---------------- | :----: |
| value | Field value | `any` | `-` |
| status | Field state | `ValidateStatus`<br>`'error' \| 'success' \| 'warning' \| 'validating'` | `-` |
| message | Field error message | `string` | `-` |

### ValidatedError

| Parameter | Description | Type | Default |
| --------------- | ---------------------- | --------- | :-----: |
| label | Label text | `string` | `-` |
| field | Field name | `string` | `-` |
| value | Field value | `any` | `-` |
| type | Field type | `string` | `-` |
| isRequiredError | Whether this is a required-field error | `boolean` | `false` |
| message | Error message | `string` | `-` |

### FormItemEventHandler

| Parameter | Description | Type | Default |
| -------- | -------- | ---------------------- | :----: |
| onChange | onChange | `(ev?: Event) => void` | `-` |
| onInput | onInput | `(ev?: Event) => void` | `-` |
| onFocus | onFocus | `(ev?: Event) => void` | `-` |
| onBlur | onBlur | `(ev?: Event) => void` | `-` |

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

### Cedar rule protocol

FieldRule retains object rules and callback errors: callback(message) reports business validation failure. An asynchronous rule must return a Promise; normal completion without an error callback means success. A delayed callback without a returned Promise is not awaited. Returning false or an error string does not replace callback.

Unexpected throws or Promise rejection reject public validate. Handle them with try/catch. The current task releases validating and restores the previous business error without synthesizing a new validation failure. A stale exception cannot clear a newer pending task.

```ts
import type { FieldRule } from '@cedar-design/ui-vue'
const nameRule: FieldRule<string> = {
  validator: async (value, callback, context) => {
    await Promise.resolve()
    if (!value) callback(`${context?.field} is required`)
  },
}
```

### Public validation and notification contract

Form and FormItem default slots have no scoped arguments. FormItem also provides label, help and extra slots without model helpers. Form manages state through the model object and field paths.

`validate(callback?)` and `validateField(fields, callback?)` await their rules, returning undefined on success or an error record by field on business failure. Callbacks only notify for a current task. Errors contain field, message, label, value, type and isRequiredError. The value remains the original field value.

submit-success precedes submit; business failure sends submit-failed before submit. An unfinished editing session sends only submit-failed. Its errors.editing contains only field="editing" and message, without fabricated field-validation data. FormSubmitError distinguishes this notice from a full ValidatedError.

These events notify only: listener Promises are not awaited and do not execute requests or control loading. Business code manages asynchronous-save loading. Native reset prevents default behavior, resets fields and then notifies reset. Form resetFields writes to model; an inner Form inside FilterForm has its own scope.

`beforeCommit` belongs to fields supporting editing transactions. Its signature is `(payload, done, context) => void | boolean | Promise<void | boolean>`. The payload contains value and previousValue; context contains signal and an optional event. Returning undefined waits for done; a boolean or Promise settles by its result. It is not a Form submit event or general loading entry point.

```ts
import type {
  FormProps, FormItemProps, FormInstance, FormItemInstance,
  ValidatedError, FormValidateErrors, FieldData,
  FormEmits, FormSlots, FormItemSlots, FormSubmitError,
  BeforeFieldCommit,
} from '@cedar-design/ui-vue'
```
Custom form controls can call `useFormErrorDescription()` in `setup` and bind `describe(existingIds)` to the interactive element's `aria-describedby`. Existing descriptions are preserved, and the FormItem error ID follows the visible error. Outside FormItem, only the existing descriptions are retained.

See [Section](/en/components/section/) for section props and slots.

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-form-error-text-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-form-extra-margin-bottom` | `var(--c-spacing-2)` | `margin-bottom` |
| `--c-form-extra-margin-top` | `var(--c-spacing-2)` | `margin-top` |
| `--c-form-extra-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-form-extra-text-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-form-feedback-icon-font-size` | `14px` | `font-size` |
| `--c-form-feedback-icon-right` | `9px` | `inset-inline-end` |
| `--c-form-feedback-loading-font-size` | `12px` | `font-size` |
| `--c-form-has-feedback-control-padding-right` | `28px` | `padding-inline-end` |
| `--c-form-inline-item-margin-bottom` | `var(--c-spacing-4)` | `margin-bottom` |
| `--c-form-inline-item-margin-right` | `var(--c-spacing-9)` | `margin-inline-end` |
| `--c-form-label-margin-right` | `var(--c-spacing-7)` | `padding-inline-end` |
| `--c-form-label-text-color` | `var(--c-sys-color-content-primary)` | `color` |
| `--c-form-line-height` | `var(--c-line-height)` | `line-height`, `padding-top` |
| `--c-form-required-symbol-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-form-required-symbol-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-form-size-lg-height` | `var(--c-size-lg)` | `line-height`, `min-height` |
| `--c-form-size-lg-item-margin-bottom` | `var(--c-spacing-7)` | `line-height`, `margin-bottom`, `min-height`, `padding-block-start` |
| `--c-form-size-lg-label-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-form-size-md-height` | `var(--c-size-md)` | `line-height`, `min-height` |
| `--c-form-size-md-item-margin-bottom` | `var(--c-spacing-7)` | `line-height`, `margin-bottom`, `min-height`, `padding-block-start` |
| `--c-form-size-md-label-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-form-size-sm-height` | `var(--c-size-sm)` | `line-height`, `min-height` |
| `--c-form-size-sm-item-margin-bottom` | `var(--c-spacing-7)` | `line-height`, `margin-bottom`, `min-height`, `padding-block-start` |
| `--c-form-size-sm-label-font-size` | `var(--c-font-size-body-3)` | `font-size` |
| `--c-form-size-xl-height` | `var(--c-size-xl)` | `line-height`, `min-height` |
| `--c-form-size-xl-item-margin-bottom` | `var(--c-spacing-7)` | `line-height`, `margin-bottom`, `min-height`, `padding-block-start` |
| `--c-form-size-xl-label-font-size` | `var(--c-sys-font-size-lg)` | `font-size` |
| `--c-form-size-xs-height` | `var(--c-size-xs)` | `line-height`, `min-height` |
| `--c-form-size-xs-item-margin-bottom` | `var(--c-spacing-7)` | `line-height`, `margin-bottom`, `min-height`, `padding-block-start` |
| `--c-form-size-xs-label-font-size` | `var(--c-font-size-body-1)` | `font-size` |
| `--c-form-status-error-bg` | `var(--c-color-danger-light-1)` | `background-color` |
| `--c-form-status-error-border-color` | `transparent` | `border-color` |
| `--c-form-status-error-focus-bg` | `var(--c-color-bg-2)` | `background-color` |
| `--c-form-status-error-focus-border-color` | `var(--c-sys-color-content-danger)` | `border-color` |
| `--c-form-status-error-focus-shadow-color` | `var(--c-color-danger-light-2)` | `box-shadow` |
| `--c-form-status-error-focus-shadow-size` | `var(--c-shadow-distance-none)` | `box-shadow` |
| `--c-form-status-error-hover-bg` | `var(--c-color-danger-light-2)` | `background-color` |
| `--c-form-status-error-hover-border-color` | `transparent` | `border-color` |
| `--c-form-status-error-tip-icon-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-form-status-error-tip-text-color` | `var(--c-sys-color-content-danger)` | `color` |
| `--c-form-status-success-bg` | `var(--c-color-fill-2)` | `background-color` |
| `--c-form-status-success-border-color` | `transparent` | `border-color` |
| `--c-form-status-success-focus-bg` | `var(--c-color-bg-2)` | `background-color` |
| `--c-form-status-success-focus-border-color` | `var(--c-sys-color-content-success)` | `border-color` |
| `--c-form-status-success-focus-shadow-color` | `var(--c-color-success-light-2)` | `box-shadow` |
| `--c-form-status-success-focus-shadow-size` | `var(--c-shadow-distance-none)` | `box-shadow` |
| `--c-form-status-success-hover-bg` | `var(--c-color-fill-3)` | `background-color` |
| `--c-form-status-success-hover-border-color` | `transparent` | `border-color` |
| `--c-form-status-success-tip-icon-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-form-status-success-tip-text-color` | `var(--c-sys-color-content-success)` | `color` |
| `--c-form-status-validating-bg` | `var(--c-color-fill-2)` | `background-color` |
| `--c-form-status-validating-border-color` | `transparent` | `border-color` |
| `--c-form-status-validating-focus-bg` | `var(--c-color-bg-2)` | `background-color` |
| `--c-form-status-validating-focus-border-color` | `var(--c-sys-color-action-primary)` | `border-color` |
| `--c-form-status-validating-focus-shadow-color` | `var(--c-color-primary-light-2)` | `box-shadow` |
| `--c-form-status-validating-focus-shadow-size` | `var(--c-shadow-distance-none)` | `box-shadow` |
| `--c-form-status-validating-hover-bg` | `var(--c-color-fill-3)` | `background-color` |
| `--c-form-status-validating-hover-border-color` | `transparent` | `border-color` |
| `--c-form-status-validating-tip-icon-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-form-status-validating-tip-text-color` | `var(--c-sys-color-content-brand)` | `color` |
| `--c-form-status-warning-bg` | `var(--c-color-warning-light-1)` | `background-color` |
| `--c-form-status-warning-border-color` | `transparent` | `border-color` |
| `--c-form-status-warning-focus-bg` | `var(--c-color-bg-2)` | `background-color` |
| `--c-form-status-warning-focus-border-color` | `var(--c-sys-color-content-warning)` | `border-color` |
| `--c-form-status-warning-focus-shadow-color` | `var(--c-color-warning-light-2)` | `box-shadow` |
| `--c-form-status-warning-focus-shadow-size` | `var(--c-shadow-distance-none)` | `box-shadow` |
| `--c-form-status-warning-hover-bg` | `var(--c-color-warning-light-2)` | `background-color` |
| `--c-form-status-warning-hover-border-color` | `transparent` | `border-color` |
| `--c-form-status-warning-tip-icon-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-form-status-warning-tip-text-color` | `var(--c-sys-color-content-warning)` | `color` |
| `--c-form-tooltip-margin-left` | `var(--c-sys-space-2)` | `padding-inline-start` |
| `--c-form-tooltip-text-color` | `var(--c-sys-color-content-secondary)` | `color` |
| `--c-form-transition-duration-3` | `var(--c-transition-duration-3)` | `transition` |
| `--c-form-transition-duration-5` | `var(--c-transition-duration-5)` | `animation` |
| `--c-form-transition-timing-function-linear` | `var(--c-transition-timing-function-linear)` | `animation`, `transition` |
| `--c-form-vertical-label-margin-bottom` | `var(--c-spacing-4)` | `margin-bottom`, `padding-top` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-form-error-text-font-size: var(--c-font-size-body-1);
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
