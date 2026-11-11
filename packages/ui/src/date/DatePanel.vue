<template>
  <div
    :class="
      classes(
        n('layout'),
        n(`layout--${options.shortcutsPosition ?? 'bottom'}`),
        [Boolean(hostActions), n('layout--embedded')],
        [!hostActions, n('layout--standalone')],
        [isRange, n('layout--range')],
        [options.showTime, n('layout--time')],
        [String(options.type) === 'week', n('layout--week')],
        ['presentation' in options && options.presentation === 'calendarClock', n('layout--clock')],
        [
          Boolean(options.shortcuts?.length) && (options.shortcutsPosition ?? 'bottom') !== 'bottom',
          n('layout--side-shortcuts'),
        ],
      )
    "
  >
    <DateShortcuts
      v-if="options.shortcuts?.length"
      :shortcuts="options.shortcuts"
      :position="options.shortcutsPosition ?? 'bottom'"
      :blocked="blocked"
      @choose="tools.choose"
      @preview="tools.preview"
    />
    <div :class="n('main')">
      <DatePanelContent
        v-bind="$attrs"
        :options="options"
        :range="isRange"
        :value="tools.displayValue.value"
        :picker-value="tools.pickerValue.value"
        :can-confirm="selection.canConfirm.value"
        @navigate="tools.navigate"
        @select="select"
        @confirm="selection.commit()"
      >
        <template v-for="name in forwardedSlots" #[name]="scope"><slot :name="name" v-bind="scope || {}" /></template>
      </DatePanelContent>
      <DatePanelActions
        v-if="!hostActions"
        :show-now="showNow"
        :show-confirm="options.disableConfirm === false"
        :now-disabled="nowDisabled"
        :can-confirm="selection.canConfirm.value"
        @select-now="selectNow"
        @confirm="selection.commit()"
      >
        <template v-if="$slots.actions" #default="scope"><slot name="actions" v-bind="scope" /></template>
      </DatePanelActions>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, h, inject, onBeforeUnmount, provide, useSlots, type PropType } from 'vue'
import { editorAuxiliaryActions } from '../_components/field-presentation/editor-actions'
import { provideRangePanel } from '../_components/picker-field/range-field-context'
import { useFieldValue } from '../_components/picker-field/use-field-value'
import { resolveEmptyValue } from '../_utils/empty-value'
import { createNamespace } from '../_utils/global-config'
import { currentDateValue, provideDateCurrent } from './date-current'
import { provideDateLocale, scopeDateOptions } from './date-locale'
import { dateEventPayload, type DateSelection } from './date-value'
import DatePanelActions from './DatePanelActions.vue'
import DateShortcuts from './DateShortcuts.vue'
import type { DatePanelOptions } from './panel-state'
import { simultaneousDateLayout } from './presentation/calendar-layout'
import DatePanelContent from './presentation/DatePanelContent.vue'
import { useDateLocale } from './presentation/use-date-locale'
import { useDatePanelTools } from './use-date-panel-tools'
import { useDateSelection } from './use-date-selection'

defineOptions({
  name: createNamespace('date-panel').name,
  inheritAttrs: false,
})
const props = defineProps({
  options: { type: Object as PropType<DatePanelOptions>, required: true },
  range: Boolean,
})
const emit = defineEmits([
  'update:modelValue',
  'change',
  'select',
  'confirm',
  'update:pickerValue',
  'picker-value-change',
  'select-shortcut',
])
const { n, classes } = createNamespace('date-panel')
const language = useDateLocale()
const options = computed(() => scopeDateOptions(props.options, language.value, props.options.dayStartOfWeek ?? 0))
provideDateLocale(() => options.value)
const hostActions = inject(editorAuxiliaryActions, undefined)
provide(simultaneousDateLayout, !hostActions)
const slots = useSlots()
const forwardedSlots = computed(() => Object.keys(slots).filter((name) => name !== 'actions'))
provideRangePanel()
provideDateCurrent(() => options.value.showCurrent !== false)
const isRange = computed(() => props.range || Boolean(options.value.range))
const model = useFieldValue<DateSelection>({
  value: () => options.value.modelValue,
  defaultValue: () => options.value.defaultValue ?? (isRange.value || options.value.multiple ? [] : undefined),
})
const blocked = computed(() =>
  Boolean(
    options.value.readonly ||
    (Array.isArray(options.value.disabled) ? options.value.disabled.every(Boolean) : options.value.disabled),
  ),
)
const selection = useDateSelection({
  emptyValue: () =>
    resolveEmptyValue<DateSelection>(options.value, props.range || options.value.multiple ? [] : undefined),
  value: () => model.value.value,
  rules: () => options.value,
  range: () => isRange.value,
  multiple: () => Boolean(options.value.multiple),
  blocked: () => blocked.value,
  disabledParts: () => (Array.isArray(options.value.disabled) ? options.value.disabled : []),
  onSelect: (value) => {
    const payload = dateEventPayload(value, options.value)
    emit('select', value, payload.dates, payload.texts)
  },
  onCommit: (value) => {
    model.setValue(value)
    const payload = dateEventPayload(value, options.value)
    emit('update:modelValue', value)
    emit('change', value, payload.dates, payload.texts)
  },
  onConfirm: () => {
    const value = selection.draft.value
    const payload = dateEventPayload(value, options.value)
    emit('confirm', value, payload.dates, payload.texts)
  },
})
const tools = useDatePanelTools({
  options: () => options.value,
  range: () => isRange.value,
  value: () => selection.draft.value,
  blocked: () => blocked.value,
  valid: selection.valid,
  select: (value) => selection.select(value, options.value.disableConfirm !== false),
  onShortcut: (shortcut) => emit('select-shortcut', shortcut),
  onNavigate: (value) => {
    const payload = dateEventPayload(value, options.value)
    emit('update:pickerValue', value)
    emit('picker-value-change', value, payload.dates, payload.texts)
  },
})
function select(value: DateSelection) {
  tools.endPreview()
  selection.select(value, options.value.disableConfirm !== false)
}

const showNow = computed(() => !isRange.value && !options.value.multiple && options.value.showNowButton !== false)
const nowDisabled = computed(() => blocked.value || !selection.valid(currentDateValue(options.value)))
function selectNow() {
  if (!showNow.value) {
    return false
  }
  tools.endPreview()
  return selection.select(currentDateValue(options.value), options.value.disableConfirm !== false)
}
// Render the same action component in the host footer instead of a second panel footer.
const auxiliary = () =>
  h(
    DatePanelActions,
    {
      showNow: showNow.value,
      showConfirm: false,
      nowDisabled: nowDisabled.value,
      canConfirm: selection.canConfirm.value,
      onSelectNow: selectNow,
    },
    slots.actions ? { default: slots.actions } : undefined,
  )
if (hostActions) {
  hostActions.value = auxiliary
}
onBeforeUnmount(() => {
  if (hostActions?.value === auxiliary) {
    hostActions.value = undefined
  }
})
</script>
