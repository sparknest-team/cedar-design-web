<template>
  <span :class="n('reference-group')" :title="hint">
    <button
      v-bind="$attrs"
      ref="button"
      :id="id"
      type="button"
      :class="n('reference')"
      :disabled="disabled"
      :aria-label="label"
      :aria-expanded="open"
      aria-haspopup="dialog"
      @click="presentation === 'click' && activate($event)"
      @dblclick="presentation === 'dblclick' && activate($event)"
      @keydown.enter.prevent="$emit('open')"
      @keydown.f2.prevent="$emit('open')"
    >
      <span>{{ text || placeholder || "—" }}</span>
    </button>
    <button
      v-if="!disabled"
      type="button"
      :class="n('edit')"
      :aria-label="label ? `${editText}：${label}` : editText"
      :title="editText"
      @click.stop="$emit('open')"
      @dblclick.stop
    >
      <IconEdit aria-hidden="true" />
    </button>
  </span>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { createNamespace } from "../../_utils/global-config";
import { IconEdit } from "@cedarjs/icons-vue/icon-edit";
import { useI18n } from "../../locale";
import type { FieldPresentation } from "./context";
defineOptions({
  name: createNamespace("field-reference").name,
  inheritAttrs: false,
});
const props = defineProps<{
  id?: string;
  presentation?: FieldPresentation;
  disabled?: boolean;
  label?: string;
  text?: string;
  placeholder?: string;
  open?: boolean;
}>();
const emit = defineEmits<{ open: [] }>();
const { n } = createNamespace("field-presentation");
const button = ref<HTMLButtonElement>();
const { t } = useI18n();
const editText = computed(() => t("fieldPresentation.edit"));
const hint = computed(() =>
  t(
    props.presentation === "dblclick"
      ? "fieldPresentation.doubleClickEdit"
      : "fieldPresentation.clickEdit",
  ),
);
function activate(event: MouseEvent) {
  const selection = (
    event.currentTarget as HTMLElement
  ).ownerDocument.getSelection();
  if (
    event.detail < 2 &&
    selection &&
    !selection.isCollapsed &&
    selection.containsNode(event.currentTarget as Node, true)
  )
    return;
  emit("open");
}
defineExpose({ focus: () => button.value?.focus({ preventScroll: true }) });
</script>
