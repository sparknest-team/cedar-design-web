---
lang: en-US
permalink: /en/components/verification-code/
---

# Verification Code

Start with the basic example, then compare related settings before moving to controlled, asynchronous or combined use cases.

## Basic examples

### Basic usage

Preview configuration: `aria-label="验证码"`.

<demo src="./__demos__/basic.vue"></demo>

## Appearance and states

### Appearance

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| --------------- | ------------------------------- | ---------------------------- |
| `default-value` | Uncontrolled initial value | Appearance, States |
| `length` | Positive integer cell count, measured in Unicode code points | Appearance, Appearance Lab |
| `aria-label` | Group name and numbered cell labels | Appearance, States |
| `masked` | Visual character masking only, not encryption | Appearance |
| `mask-symbol` | Use the first Unicode code point | Appearance |
| `variant` | Input variant | Appearance |

<!-- demo-config-notes:end -->


- `variant`: Selects the visual variant.
- `size`: Controls the component size.
- `align`: Controls alignment on the cross axis.

<demo src="./__demos__/appearance.vue"></demo>

### Appearance Lab

Preview configuration: `layout="vertical"`, `aria-label="variant"`, `options`, `variant="button"`.

<demo src="./__demos__/appearance-lab.en-US.vue"></demo>

### States

- `readonly`: Displays the current value without allowing edits.
- `disabled`: Prevents user interaction.

<demo src="./__demos__/states.vue"></demo>

## Data and options

### Formatting

<!-- demo-config-notes:start -->

#### Configuration reference for this comparison

| Configuration | Purpose | Related examples |
| ----------------- | ------------------------------------------------------------------------- | -------------------- |
| `type` | Character set | Formatting |
| `paste-transform` | Paste preprocessing, before type/formatter | Formatting |
| `formatter` | Per-character formatting: false rejects; true/undefined retains. A returned string contributes its first valid code point | Formatting |
| `aria-label` | Group name and numbered cell labels | Formatting |

<!-- demo-config-notes:end -->


Preview configuration: `type="alphanumeric"`, `:paste-transform="transform"`, `:formatter="(char) => char.toUpperCase()"`, `aria-label="字母数字验证码"`.

<demo src="./__demos__/formatting.vue"></demo>

## Interaction and control

### State Lab

Preview configuration: `:length="6"`.

<demo src="./__demos__/state-lab.vue"></demo>

## Reading direction

Inherits the nearest `dir="ltr|rtl"`, including runtime changes and local overrides. Verification codes are LTR content: rendering, pasting and focus movement use the original string order, while outer align start/end follows reading direction. RTL does not reverse code characters. Numeric and text codes share this order contract.

## Usage notes

### Editing and confirmation

This component supports `edit-mode` with field > FormItem > Form precedence. When unset, it defaults to `direct` and preserves `direct` editing. Supported values: `direct / click / dblclick`. Non-direct modes open the editor through the field value trigger and keep one draft; v-model updates only after confirmation. Cancel, reset or enabling readPretty discards the draft.

Cedar uses edit-mode="click" / "dblclick" to open an editor popup near the field. Enter/F2 also opens it; cancel/Escape discards the draft, and confirmation commits it. readPretty is an independent reading setting, separate from readonly and disabled.

`before-commit(payload, done, context)` can guard saving the editor. FormItem validates the candidate first; invalid candidates keep the editor open. `open / default-open / update:open` control the editor. `#read="{ value, text }"` customizes read content. See the unified field presentation examples in Form.

`read-pretty` is an independent boolean alongside `readonly` and `disabled`. It inherits from field to FormItem to Form; explicit `false` overrides the parent. The default is `false`. Reading mode renders no editor.
### Configuration

initial means no public override. CSS reads size fallbacks at the component element. Override through component style or theme.

## API

### Empty values and reading placeholders

`empty-values` recognizes empty data; `empty-value` keeps existing clear output. `empty-text` defaults to `'-'` under `read-pretty`, with Field > FormItem > Form precedence and custom read slots first. With explicit `empty-values`, built-in required uses the policy; custom validators receive original data. See the [shared guide](/en/guide/empty-values/).

| Prop | Type | Default and scope |
| ------------ | ------------------ | ----------------------------------------------------- |
| empty-values | readonly unknown[] | Field > FormItem > Form > component-family default; replaces the whole list |
| empty-text | string | Field > FormItem > Form > '-'; explicit '' is valid |

These props belong to field presentation; pure panels do not gain reading mode. Form and FormItem provide inherited settings. The existing empty-value type and clear fallback remain component-specific.

Explicit null is a controlled empty code and never falls back to default-value, which applies only when model-value is absent. reset() still proposes an empty string. Presentation clearing can submit null through empty-value=null; finish never receives null. An omitted model-value remains uncontrolled.

In deferred mode input / paste describe editing, while finish describes the finally accepted complete value. Canceling, rejection, readonly, disabled, external replacement or unmount retires unaccepted completion notifications. Ordinary finish listener Promises do not hold confirmation. A synchronous undefined before-commit return waits for done. Invalid type / align values diagnose and fall back to digit / center; gutter=0 and 0px remain valid.

### VerificationCode Props

| Prop | Description | Type | Default |
| --------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------- | ---------------- |
| `model-value` | Controlled complete code | `string \| null` | `undefined` |
| `default-value` | Uncontrolled initial value | `string` | `''` |
| `length` | Positive integer cell count, measured in Unicode code points | `number` | `6` |
| `type` | Character set | `digit / text / alphanumeric` | `digit` |
| `size` | Five wrapper sizes | `xs / sm / md / lg / xl` | Inherited / md |
| `variant` | Input variant | `filled / outline / standard` | Inherited / outline |
| `disabled` | Disabled state; explicit values override inherited Form / Group state | `boolean` | `undefined` |
| `readonly` | Read-only state; explicit values override inherited Form / Group state | `boolean` | `undefined` |
| `error` | Error state; explicit values override inherited Form / Group state | `boolean` | `undefined` |
| `masked` | Visual character masking only, not encryption | `boolean` | `false` |
| `mask-symbol` | Use the first Unicode code point | `string` | `•` |
| `autofocus` | Focus the first empty cell after mounting | `boolean` | `false` |
| `gutter` | Cell gap; numbers are px | `number / string` | Component token |
| `align` | Horizontal alignment | `start / center / end` | `center` |
| `allow-paste` | Allow pasting; false prevents native paste | `boolean` | `true` |
| `paste-transform` | Paste preprocessing, before type/formatter | `(text: string) => string` | `undefined` |
| `formatter` | Per-character formatting: false rejects; true/undefined retains. A returned string contributes its first valid code point | `(character, index, value) => string / boolean` | `undefined` |
| `separator` | Separator after each nonfinal cell | `(index, character) => VNodeChild` | `undefined` |
| `aria-label` | Group name and numbered cell labels | `string` | `undefined` |
| `text-color` | Custom per-instance text color; prefer tokens for static themes | `string` | `undefined` |
| `focus-color` | Custom per-instance focused color; prefer tokens for static themes | `string` | `undefined` |
| `blur-color` | Custom per-instance unfocused color; prefer tokens for static themes | `string` | `undefined` |

| `empty-value` | Presentation clear output; defaults to an empty string and accepts explicit null | `string \| null \| (() => string \| null)` | `''` |
| `clearable` | Deferred editor clearing; does not change individual input cells | `boolean` | `false` |
| `empty-values` | Empty-value recognition; field takes precedence over FormItem and Form | `readonly unknown[]` | `-` |
| `empty-text` | Read empty text; an explicit empty string is valid | `string` | `'-'` |
| `edit-mode` | Editing mode, inherited from FormItem and Form | `'direct' \| 'click' \| 'dblclick'` | `'direct'` |
| `read-pretty` | Independent read presentation; explicit false overrides the parent | `boolean` | `false` |
| `before-commit` | Guard before saving a deferred edit; return a boolean or Promise, or complete via done | `(payload: { value: unknown; previousValue: unknown }, done: (allow?: boolean) => void, context: { signal: AbortSignal; event?: Event }) => void \| boolean \| Promise<void \| boolean>` | `-` |
| `open` | Controlled editor visibility, separate from native input focus | `boolean` | `-` |
| `default-open` | Initial visibility of an uncontrolled editor | `boolean` | `false` |
| `popup-container` | Editor mount container | `string \| HTMLElement \| false` | `-` |

### VerificationCode Events

| Event | Arguments | Semantics |
| ------------------ | ----------------------- | ---------------------------------------------------------------------- |
| input | character, index, event | Starting character and zero-based index of each valid native input proposal |
| update:modelValue | value: string \| null | Complete-code proposal |
| change | value: string \| null | Complete-code proposal for each valid edit, not necessarily accepted by a controlled parent |
| finish | value: string | Direct mode notifies after the parent accepts the complete code in the current render; deferred mode waits for confirmation guards and parent acceptance, never draft completion |
| update:open | open: boolean | Controlled editor visibility update |
| open-change | open: boolean | Actual editor visibility change |
| paste | text, event | Pasted text after paste-transform/type processing |
| focus / blur | FocusEvent | Focus enters/leaves the whole component; moving between cells does not duplicate notifications |
| click | MouseEvent | Non-disabled click |

Valid input order: input → update:modelValue → change. finish waits until the parent accepts the complete value in that render. Rejected controlled values restore native inputs; later asynchronous parent assignments do not add finish. reset() proposes empty and emits update:modelValue/change without simulating native input. Disabled, readonly or composing state prevents reset from changing values.

Paste overwrites from the current cell; root-level paste starts at cell 1. Input beyond the first empty cell moves to that first empty cell. A whole-code native input distributes across subsequent cells. SMS suggestions depend on the platform and browser: Cedar hints one-time-code on the first cell, while Maple retains autocomplete=off for all cells. Typing one character in a filled cell replaces that cell even when the caret follows its old character. Composition prefers the current compositionend text, including multiple code points, and falls back to the native value only when event data is missing. Processing is type filtering, formatter, then length clipping; rejected characters consume no cell. Text counts Unicode code points rather than grapheme clusters. External values affect display without an automatic formatted model update.

### VerificationCode Slots

| Slot | Arguments | Description |
| --------- | -------------------- | ----------------------------------------- |
| separator | { index, character } | Overrides separator; not rendered after the last cell |
| read | { value: string \| null, text: string } | Custom read content, taking precedence over empty-text |

### VerificationCode Methods

- focus(index?): zero-based index; defaults to the first empty cell or the last cell when full. Direct readonly fields can receive focus. Deferred mode opens an editable panel first; disabled, readonly, or reading fields do not open.
- blur(): blur the current editor without reopening the panel.
- reset(): in direct mode, propose an empty value while respecting controlled ownership, disabled/readonly state, and composition. In deferred mode, open an empty draft; model and change notifications wait for final confirmation and before-commit approval. Cancellation preserves the original value.

Public methods remain callable from initial component mount. Stored methods resolve the current editor on every call and never use an old input after closure, reopening, or mode changes. Native input references are undefined while no editor is mounted.

### Keyboard and Form

Left/Right move between cells. Backspace removes the current character, or the previous one when empty. Delete removes the current character; following characters shift forward. IME composition does not trim, delete or move focus. Each native input has an SSR-stable id. Cell 1 uses autocomplete=one-time-code, others off. Provide aria-label.

A supplied `aria-invalid` is forwarded to each input. Component or form errors take precedence and mark inputs invalid; when errors clear, the supplied value is restored. The group retains explicit caller attributes and does not add an error state automatically.

InputGroup/Form state is inherited, with explicit disabled/readonly/error/size taking precedence. Internal cell Inputs do not duplicate Form notifications; the complete control notifies input/change once per edit. Both platforms implement three variants/five sizes using local FieldDecorator tokens.

## Types

VerificationCodeProps、VerificationCodeType、VerificationCodeAlign、VerificationCodeVariant、VerificationCodeFormatter、VerificationCodeSeparator、VerificationCodeEmits、VerificationCodeSlots、VerificationCodeExpose、VerificationCodeInstance。

## CSS Variables

<!-- component-css-variables:start -->

Use these variables to customize the component. Defaults may vary by the selector condition shown. Each variable applies to the corresponding size, variant and interaction states.

<div class="token-reference-table" style="max-width: 100%; overflow-x: auto;">

| Variable | Default / condition | Affected styles |
| --- | --- | --- |
| `--c-verification-code-cell-height` | `initial` | `height` |
| `--c-verification-code-cell-max-width` | `initial` | `flex` |
| `--c-verification-code-gutter` | `var(--c-sys-space-2)` | `gap` |
| `--c-verification-code-input-font-size` | `initial` | `font-size` |

</div>

Apply overrides to the rendered component root or the actual popup ancestor. For example, add the following class to that element and replace the value as needed:

```css
.component-theme {
  --c-verification-code-input-font-size: initial;
}
```

Explicit inline styles and props that write the same CSS property take precedence over stylesheet defaults. After Teleport, ordinary CSS variables inherit from the actual mount location. When using ThemeProvider, follow its local-theme and popup configuration rules. Override the component variable directly for local styling; root-level aliases are not recalculated merely because a descendant system variable changes. Internal variables are not public APIs.

<!-- component-css-variables:end -->
