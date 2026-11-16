<script setup lang="ts">
import { useDemoLocale } from "../../__demos__/locale";
import { computed, reactive, ref } from "vue";
import type {
  FieldEditMode,
  FormContentAlign,
  FormLayout,
} from "@cedar-design/ui-vue";

const copy = useDemoLocale("layout");
const layout = ref<FormLayout>("horizontal");
const itemLayout = ref<FormLayout | "inherit">("inherit");
const mode = ref<FieldEditMode>("direct");
const readPretty = ref(false);
const contentAlign = ref<FormContentAlign>("start");
const contentAlignOptions = ["start", "end", "left", "center", "right"].map(
  (value) => ({
    label: value,
    value,
  }),
);
const modeOptions = computed(() =>
  (["direct", "click", "dblclick"] as const).map((value) => ({
    label: copy.value.editModes[value],
    value,
  })),
);
const model = reactive({ ...copy.value.initialModel });
const layouts = ["vertical", "horizontal", "inline"] as const;
const layoutOptions = layouts.map((value) => ({ label: value, value }));

const itemLayoutOptions = computed(() => [
  { label: copy.value.labels.inherit, value: "inherit" },
  ...layoutOptions,
]);
</script>

<template>
  <c-space
    direction="column"
    align="stretch"
    :size="16"
    data-config-comparison="form-layout"
  >
    <c-form layout="vertical" edit-mode="direct">
      <c-form-item :label="copy.labels.layout">
        <c-radio-group
          v-model="layout"
          :aria-label="copy.labels.layout"
          :options="layoutOptions"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item :label="copy.labels.itemLayout">
        <c-radio-group
          v-model="itemLayout"
          :aria-label="copy.labels.itemLayout"
          :options="itemLayoutOptions"
          size="sm"
        />
      </c-form-item>
      <c-form-item :label="copy.labels.mode">
        <c-radio-group
          v-model="mode"
          :aria-label="copy.labels.mode"
          :options="modeOptions"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item :label="copy.labels.contentAlign">
        <c-radio-group
          v-model="contentAlign"
          :aria-label="copy.labels.contentAlign"
          :options="contentAlignOptions"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item :label="copy.labels.readPretty">
        <c-checkbox v-model="readPretty" data-read-pretty-toggle
          >readPretty</c-checkbox
        >
      </c-form-item>
    </c-form>
    <p>
      {{ copy.labels.hint }}<br />{{ copy.labels.description[layout] }}<br />{{
        copy.labels.modeDescription[readPretty ? "readPretty" : mode]
      }}
    </p>
    <c-form
      class="layout-comparison-form"
      :model="model"
      :layout="layout"
      :content-align="contentAlign"
      :edit-mode="mode"
      :read-pretty="readPretty"
      label-align="left"
      label-col-flex="6rem"
    >
      <c-form-item field="name" :label="copy.labels.name" required>
        <c-input v-model="model.name" :placeholder="copy.labels.placeholder" />
      </c-form-item>
      <c-form-item field="department" :label="copy.labels.department">
        <c-input
          v-model="model.department"
          :placeholder="copy.labels.placeholder"
        />
      </c-form-item>
      <c-form-item
        field="notes"
        :label="copy.labels.notes"
        :layout="itemLayout === 'inherit' ? undefined : itemLayout"
        :help="copy.labels.help"
      >
        <c-input v-model="model.notes" :placeholder="copy.labels.placeholder" />
      </c-form-item>
    </c-form>
    <p role="status">{{ copy.labels.model }}：{{ JSON.stringify(model) }}</p>
  </c-space>
</template>

<style scoped>
.layout-comparison-form :deep(.c-form-item-layout-inline) {
  width: min(100%, 22rem);
  margin-inline-end: 0;
}
p {
  margin: 0;
  overflow-wrap: anywhere;
}
</style>
