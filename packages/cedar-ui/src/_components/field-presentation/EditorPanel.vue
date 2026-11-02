<template>
  <section
    :class="[n('panel'), { [n('panel--compact')]: compact }]"
    ref="panelElement"
    :aria-label="label"
    :aria-busy="pending || undefined"
    @keydown.esc.stop="!pending && $emit('cancel')"
  >
    <header v-if="!compact" :class="n('toolbar')">
      <span role="heading" aria-level="2">{{
        title || (intent === "input" ? texts.input.value : texts.select.value)
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
    <div :class="n('body')" :inert="pending || undefined"><slot /></div>
    <p v-if="count !== undefined" role="status">
      {{ texts.selected.value }} {{ count }}{{ limit ? ` / ${limit}` : "" }}
    </p>
    <p v-if="error" role="alert" :class="n('error')">{{ error }}</p>
    <footer
      v-if="needConfirm || auxiliaryActions || compact"
      :class="n('footer')"
    >
      <div :class="n('auxiliary')">
        <component :is="auxiliaryActions" v-if="auxiliaryActions" />
      </div>

      <Button v-if="clearable" variant="text" :disabled="disabled || pending" @mousedown.prevent @click="$emit('clear')">{{ clearText }}</Button>
      <Button
        status="primary"
        v-if="needConfirm"
        :loading="pending"
        :disabled="disabled"
        @mousedown.prevent
        @click="!pending && $emit('confirm')"
        ><template v-if="compact"
          ><span :class="n('confirm-icon')" aria-hidden="true" /><span
            :class="n('sr-only')"
            >{{ confirmText }}</span
          ></template
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
import { computed, provide, ref, shallowRef } from "vue";
import { createNamespace } from "../../_utils/global-config";
import Button from "../../button";
import { useI18n } from "../../locale";
import { editorAuxiliaryActions } from "./editor-actions";
import { fieldEditorBoundary } from "./context";
import { isolateEditorForm } from "./form-bridge";
import { useFieldTexts } from "./texts";

const props = defineProps<{
  clearable?: boolean;
  compact?: boolean;
  title?: string;
  intent?: "input" | "select";
  label?: string;
  pending?: boolean;
  disabled?: boolean;
  needConfirm?: boolean;
  error?: string;
  count?: number;
  limit?: number;
}>();
defineEmits<{ confirm: []; cancel: []; clear: [] }>();
defineOptions({ name: createNamespace("field-editor-panel").name });
const { n } = createNamespace("field-presentation");
const auxiliaryActions = shallowRef<() => import("vue").VNodeChild>();
// Original fields keep their own floating panel surface and auxiliary actions.
if (!props.compact) provide(editorAuxiliaryActions, auxiliaryActions);
provide(fieldEditorBoundary, true);
isolateEditorForm();
const { i18nMessage } = useI18n();
const confirmText = computed(() => i18nMessage.value.dialog.confirmButtonText);
const texts = useFieldTexts();
const closeText = texts.close;
const clearText = texts.clear;
const panelElement = ref<HTMLElement>();
defineExpose({
  focus: () =>
    panelElement.value
      ?.querySelector<HTMLElement>(
        'input:not([disabled]), textarea:not([disabled]), [tabindex="0"], button:not([disabled])',
      )
      ?.focus({ preventScroll: true }),
});
void props;
</script>
