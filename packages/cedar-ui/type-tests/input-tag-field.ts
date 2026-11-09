import type {
  InputTagEmits,
  InputTagExpose,
  InputTagInstance,
  InputTagProps,
  InputTagSlots,
  InputTagValue,
} from '@cedar-design/ui'
import type { InputTagExpose as SubExpose } from '@cedar-design/ui/input-tag'

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false
const model: InputTagValue = null
const props: InputTagProps = {
  modelValue: model,
  loadingMode: 'line',
  disabled: false,
  readonly: false,
  variant: 'filled',
}
const change: Equal<InputTagEmits['change'], [value: InputTagValue, ev?: Event]> = true
const clear: Equal<InputTagEmits['clear'], [ev: Event]> = true
declare const instance: InputTagInstance
const exposed: InputTagExpose = instance
const sub: SubExpose = exposed
sub.focus()
sub.blur()
sub.inputRef?.select()
instance.$emit('open-change', true)
instance.$emit('update:open', false)
instance.$emit('change', null)
// @ts-expect-error private renderer options are not public Props
const privateProps: InputTagProps = { baseCls: 'private' }
// @ts-expect-error modes follow shared field loading, not Loading animation types
const badMode: InputTagProps = { loadingMode: 'circle' }
type Read = Parameters<NonNullable<InputTagSlots['read']>>[0]
const read: Equal<Read, { value: InputTagValue; text: string }> = true
void [props, change, clear, privateProps, badMode, read]

import type { InputTagProps as SubProps } from '@cedar-design/ui/input-tag'
const sameProps: Equal<InputTagProps, SubProps> = true
const noPrivateProps: Equal<Extract<keyof InputTagProps, 'baseCls' | 'focused' | 'disabledInput' | 'uninjectFormItemContext'>, never> = true
const emptyProps: InputTagProps = {}
const nullableClear: InputTagProps = { emptyValue: () => null, popupContainer: false }
const guard: InputTagProps = { beforeCommit(payload, done, context) {
  void [payload.value, payload.previousValue, context.signal.aborted, context.event?.type]
  done(true)
} }
const tagUpdate: Equal<InputTagEmits['update:modelValue'], [value: InputTagValue]> = true
const draftUpdate: Equal<InputTagEmits['update:inputValue'], [inputValue: string]> = true
const openUpdate: Equal<InputTagEmits['update:open'], [open: boolean]> = true
const openChanged: Equal<InputTagEmits['open-change'], [open: boolean]> = true
// @ts-expect-error popupContainer accepts elements, selectors or false, not resolver functions
const badContainer: InputTagProps = { popupContainer: () => document.body }
// @ts-expect-error tag model values cannot become a string scalar
const scalarModel: InputTagProps = { modelValue: 'tag' }
void [sameProps, noPrivateProps, emptyProps, nullableClear, guard, tagUpdate, draftUpdate, openUpdate, openChanged, badContainer, scalarModel]
