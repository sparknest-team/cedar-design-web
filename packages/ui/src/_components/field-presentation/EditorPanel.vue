<template>
  <section
    :class="[n('panel'), { [n('panel--compact')]: compact }]"
    ref="panelElement"
    :aria-label="label"
    :aria-busy="pending || undefined"
    @keydown="handleKeydown"
  >
    <header v-if="!compact" :class="n('toolbar')">
      <span role="heading" aria-level="2">{{
        title || (intent === 'input' ? texts.input.value : texts.select.value)
      }}</span>
      <button
        type="button"
        :class="n('close')"
        :aria-label="closeText"
        :disabled="pending"
        @click="!pending && $emit('cancel')"
      >
        ×
      </button>
    </header>
    <div ref="bodyElement" :class="n('body')" :inert="pending || undefined"><slot /></div>
    <p v-if="count !== undefined" role="status">
      {{ texts.selected.value }} {{ count }}{{ limit ? ` / ${limit}` : '' }}
    </p>
    <p v-if="error" :id="localError && localError === error ? localId : undefined" role="alert" :class="n('error')">
      {{ error }}
    </p>
    <span v-if="localError && localError !== error" :id="localId" hidden>{{ localError }}</span>
    <footer v-if="needConfirm || auxiliaryActions || compact" :class="n('footer')">
      <div :class="n('auxiliary')">
        <component :is="auxiliaryActions" v-if="auxiliaryActions" />
      </div>

      <Button
        v-if="clearable"
        variant="text"
        :disabled="disabled || pending"
        @mousedown.prevent
        @click="$emit('clear')"
        >{{ clearText }}</Button
      >
      <Button
        status="primary"
        v-if="needConfirm"
        :loading="pending"
        :disabled="disabled"
        @mousedown.prevent
        @click="!pending && $emit('confirm', $event)"
        ><template v-if="compact"
          ><span :class="n('confirm-icon')" aria-hidden="true" /><span :class="n('sr-only')">{{
            confirmText
          }}</span></template
        ><template v-else>{{ confirmText }}</template></Button
      >
      <button
        v-if="compact"
        type="button"
        :class="n('close')"
        :aria-label="closeText"
        :disabled="pending"
        @mousedown.prevent
        @click="$emit('cancel')"
      >
        ×
      </button>
    </footer>
  </section>
</template>
<script setup lang="ts">
import { computed, provide, ref, shallowRef } from 'vue'
import { createNamespace } from '../../_utils/global-config'
import type { WithNativeListeners } from '../../_utils/native-listener-types'
import ButtonComponent from '../../button/base'
import { provideEditorErrorDescription } from '../../form/error-description'
import { useI18n } from '../../locale'
import { fieldEditorBoundary, fieldEditorEnterSubmits, fieldEditorPanel } from './context'
import { editorAuxiliaryActions } from './editor-actions'
import { isolateEditorForm } from './form-bridge'
import { useFieldTexts } from './texts'

const Button = ButtonComponent as WithNativeListeners<typeof ButtonComponent, 'onMousedown'>

const props = defineProps<{
  popupContainer?: string | HTMLElement | false
  clearable?: boolean
  compact?: boolean
  deferEscape?: boolean
  title?: string
  intent?: 'input' | 'select'
  label?: string
  pending?: boolean
  disabled?: boolean
  needConfirm?: boolean
  error?: string
  count?: number
  limit?: number
}>()
const emit = defineEmits<{ confirm: [event?: Event]; cancel: []; clear: [] }>()
function handleKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape') {
    return
  }
  if (event.defaultPrevented || event.isComposing || event.keyCode === 229 || props.pending) {
    event.stopPropagation()
    return
  }
  if (props.deferEscape) return
  event.stopPropagation()
  emit('cancel')
}
defineOptions({ name: createNamespace('field-editor-panel').name })
const { n } = createNamespace('field-presentation')
const auxiliaryActions = shallowRef<() => import('vue').VNodeChild>()
// Original fields keep their own floating panel surface and auxiliary actions.
if (!props.compact) provide(editorAuxiliaryActions, auxiliaryActions)
provide(fieldEditorBoundary, true)
provide(fieldEditorPanel, true)
provide(
  fieldEditorEnterSubmits,
  computed(() => !!props.compact),
)
isolateEditorForm()
const { i18nMessage } = useI18n()
const confirmText = computed(() => i18nMessage.value.dialog.confirmButtonText)
const texts = useFieldTexts()
const closeText = texts.close
const clearText = texts.clear
const panelElement = ref<HTMLElement>()
const { localId, text: localError } = provideEditorErrorDescription(
  () => panelElement.value,
  () => props.popupContainer,
)
const bodyElement = ref<HTMLElement>()
defineExpose({
  focus: () => {
    const selector =
      'input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), [tabindex="0"]:not([disabled]), button:not([disabled])'
    const target =
      bodyElement.value?.querySelector<HTMLElement>(selector) ??
      panelElement.value?.querySelector<HTMLElement>(selector)
    target?.focus({ preventScroll: true })
  },
  blur: () => {
    const panel = panelElement.value
    const active = (panel?.getRootNode() as Document | ShadowRoot | undefined)?.activeElement
    if (active && panel?.contains(active)) (active as HTMLElement).blur?.()
  },
})
void props
</script>
