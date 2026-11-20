<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import type {
  FieldEditMode,
  FormContentAlign,
  FormLayout,
} from "@cedar-design/ui-vue";

const copy = {
  editModes: {
    direct: "Direct",
    click: "Single click",
    dblclick: "Double click"
  },
  initialModel: {
    name: "Alex",
    department: "Product design",
    notes: "Review progress every Wednesday and confirm the weekly plan."
  },
  labels: {
    layout: "Form layout",
    itemLayout: "Notes layout",
    mode: "Edit mode",
    readPretty: "Read only display (readPretty)",
    contentAlign: "Content alignment",
    inherit: "Inherit",
    hint: "Switch between direct, click and dblclick editing and toggle readPretty independently. Switch content-align to compare value alignment; Notes can also override the form layout.",
    modeDescription: {
      direct: "Edit values directly in the form.",
      click: "Click a value to edit it in a popover; confirm to save.",
      dblclick: "Double-click a value to edit it in a popover; confirm to save.",
      readPretty: "Show saved values as text. Compare alignment and wrapping with the labels."
    },
    description: {
      vertical: "Labels appear above controls, with each field on its own row.",
      horizontal: "Labels appear beside controls, with each field on its own row.",
      inline: "Fields flow alongside one another and wrap when space runs out."
    },
    name: "Name",
    department: "Team",
    notes: "Notes",
    placeholder: "Enter a value",
    help: "Help stays below the control as the layout changes.",
    model: "Current values"
  }
};
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
    label: copy.editModes[value],
    value,
  })),
);
const model = reactive({ ...copy.initialModel });
const layouts = ["vertical", "horizontal", "inline"] as const;
const layoutOptions = layouts.map((value) => ({ label: value, value }));

const itemLayoutOptions = computed(() => [
  { label: copy.labels.inherit, value: "inherit" },
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
      <c-form-item label="Form layout">
        <c-radio-group
          v-model="layout"
          aria-label="Form layout"
          :options="layoutOptions"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item label="Notes layout">
        <c-radio-group
          v-model="itemLayout"
          aria-label="Notes layout"
          :options="itemLayoutOptions"
          size="sm"
        />
      </c-form-item>
      <c-form-item label="Edit mode">
        <c-radio-group
          v-model="mode"
          aria-label="Edit mode"
          :options="modeOptions"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item label="Content alignment">
        <c-radio-group
          v-model="contentAlign"
          aria-label="Content alignment"
          :options="contentAlignOptions"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item label="Read only display (readPretty)">
        <c-checkbox v-model="readPretty" data-read-pretty-toggle
          >readPretty</c-checkbox
        >
      </c-form-item>
    </c-form>
    <p>
      Switch between direct, click and dblclick editing and toggle readPretty independently. Switch content-align to compare value alignment; Notes can also override the form layout.<br />{{ copy.labels.description[layout] }}<br />{{
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
      <c-form-item field="name" label="Name" required>
        <c-input v-model="model.name" placeholder="Enter a value" />
      </c-form-item>
      <c-form-item field="department" label="Team">
        <c-input
          v-model="model.department"
          placeholder="Enter a value"
        />
      </c-form-item>
      <c-form-item
        field="notes"
        label="Notes"
        :layout="itemLayout === 'inherit' ? undefined : itemLayout"
        help="Help stays below the control as the layout changes."
      >
        <c-input v-model="model.notes" placeholder="Enter a value" />
      </c-form-item>
    </c-form>
    <p role="status">Current values：{{ JSON.stringify(model) }}</p>
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
