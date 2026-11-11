<template>
  <span :class="n('reference-group')" :aria-busy="loading || undefined" :title="disabled ? undefined : hint">
    <output
      v-if="openTriggerTarget === 'icon' && disabled"
      v-bind="$attrs"
      :id="id"
      :class="[n('reference'), n('reference--icon')]"
      :role="typeof $attrs.role === 'string' ? $attrs.role : 'textbox'"
      :aria-readonly="!$attrs.role || $attrs.role === 'textbox' ? true : undefined"
      :aria-disabled="unavailable ? true : ($attrs['aria-disabled'] as boolean | 'true' | 'false' | undefined)"
      :aria-describedby="describeError($attrs['aria-describedby'])"
    >{{ text || placeholder || '—' }}</output>
    <span v-else-if="openTriggerTarget === 'icon'" v-bind="$attrs" :class="[n('reference'), n('reference--icon')]">{{
      text || placeholder || '—'
    }}</span>
    <button
      v-else
      v-bind="$attrs"
      ref="button"
      :id="id"
      type="button"
      :class="n('reference')"
      :disabled="disabled"
      :aria-label="label"
      :aria-describedby="describeError($attrs['aria-describedby'])"
      :aria-expanded="open"
      aria-haspopup="dialog"
      @click="editMode === 'click' && activate($event)"
      @dblclick="editMode === 'dblclick' && activate($event)"
      @keydown.enter.prevent="$emit('open')"
      @keydown.f2.prevent="$emit('open')"
    >
      <span>{{ text || placeholder || '—' }}</span>
    </button>
    <PendingFeedback :loading="loading" />
    <button
      v-if="!disabled"
      ref="editButton"
      :id="openTriggerTarget === 'icon' ? id : undefined"
      type="button"
      :class="n('edit')"
      :aria-label="label ? `${editText}：${label}` : editText"
      :aria-labelledby="externalLabelledby ? `${editActionId} ${externalLabelledby}` : undefined"
      :aria-describedby="describeError($attrs['aria-describedby'])"
      :title="editText"
      @click.stop="$emit('open')"
      @dblclick.stop
    >
      <span v-if="externalLabelledby" :id="editActionId" :class="n('sr-only')">{{ editText }}</span>
      <IconEdit aria-hidden="true" />
    </button>
  </span>
</template>
<script setup lang="ts">
import PendingFeedback from '../pending-feedback/PendingFeedback.vue'
import { useFormErrorDescription } from '../../form/error-description'
import { computed, ref, useAttrs, useId } from 'vue'
import { IconEdit } from '@cedar-design/icons-vue/icon-edit'
import { createNamespace } from '../../_utils/global-config'
import { useI18n } from '../../locale'
import type { FieldEditMode } from './context'

defineOptions({
  name: createNamespace('field-reference').name,
  inheritAttrs: false,
})
const props = defineProps<{
  openTriggerTarget?: 'field' | 'icon'
  id?: string
  editMode?: FieldEditMode
  disabled?: boolean
  unavailable?: boolean
  loading?: boolean
  label?: string
  text?: string
  placeholder?: string
  open?: boolean
}>()
const emit = defineEmits<{ open: [] }>()
const { n } = createNamespace('field-presentation')
const { describe: describeError } = useFormErrorDescription()
const attrs = useAttrs()
const editActionId = `c-field-edit-${useId()}`
const externalLabelledby = computed(() => typeof attrs['aria-labelledby'] === 'string' ? attrs['aria-labelledby'].trim() : '')
const button = ref<HTMLButtonElement>()
const editButton = ref<HTMLButtonElement>()
const { t } = useI18n()
const editText = computed(() => t('fieldPresentation.edit'))
const hint = computed(() =>
  t(props.editMode === 'dblclick' ? 'fieldPresentation.doubleClickEdit' : 'fieldPresentation.clickEdit'),
)
function activate(event: MouseEvent) {
  const selection = (event.currentTarget as HTMLElement).ownerDocument.getSelection()
  if (
    event.detail < 2 &&
    selection &&
    !selection.isCollapsed &&
    selection.containsNode(event.currentTarget as Node, true)
  )
    return
  emit('open')
}
defineExpose({ focus: () => (button.value ?? editButton.value)?.focus({ preventScroll: true }) })
</script>
