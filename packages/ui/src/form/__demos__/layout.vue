<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import type {
  FieldEditMode,
  FormContentAlign,
  FormLayout,
} from "@cedar-design/ui-vue";

const copy = {
  editModes: {
    direct: "直接编辑",
    click: "单击编辑",
    dblclick: "双击编辑"
  },
  initialModel: {
    name: "林晓",
    department: "产品设计",
    notes: "每周三同步进度，确认后更新本周安排。"
  },
  labels: {
    layout: "表单布局",
    itemLayout: "备注单项布局",
    mode: "编辑模式 edit-mode",
    readPretty: "纯阅读 readPretty",
    contentAlign: "内容对齐 content-align",
    inherit: "继承表单",
    hint: "组合切换表单布局与 direct / click / dblclick 编辑方式，并独立开关 readPretty；通过 content-align 切换内容左、中、右对齐；备注还可单独设置布局。",
    modeDescription: {
      direct: "直接在表单中编辑字段值。",
      click: "单击字段值进入编辑弹层，确认后保存。",
      dblclick: "双击字段值进入编辑弹层，确认后保存。",
      readPretty: "以纯文字展示已保存的值，观察与标签的对齐及长文字换行。"
    },
    description: {
      vertical: "标签在上、控件在下，每个字段单独一行。",
      horizontal: "标签在左、控件在右，每个字段单独一行。",
      inline: "字段依次横向排列，空间不足时换行。"
    },
    name: "姓名",
    department: "部门",
    notes: "备注",
    placeholder: "请输入",
    help: "切换布局后，帮助文字仍显示在控件下方。",
    model: "当前数据"
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
      <c-form-item label="表单布局">
        <c-radio-group
          v-model="layout"
          aria-label="表单布局"
          :options="layoutOptions"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item label="备注单项布局">
        <c-radio-group
          v-model="itemLayout"
          aria-label="备注单项布局"
          :options="itemLayoutOptions"
          size="sm"
        />
      </c-form-item>
      <c-form-item label="编辑模式 edit-mode">
        <c-radio-group
          v-model="mode"
          aria-label="编辑模式 edit-mode"
          :options="modeOptions"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item label="内容对齐 content-align">
        <c-radio-group
          v-model="contentAlign"
          aria-label="内容对齐 content-align"
          :options="contentAlignOptions"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item label="纯阅读 readPretty">
        <c-checkbox v-model="readPretty" data-read-pretty-toggle
          >readPretty</c-checkbox
        >
      </c-form-item>
    </c-form>
    <p>
      组合切换表单布局与 direct / click / dblclick 编辑方式，并独立开关 readPretty；通过 content-align 切换内容左、中、右对齐；备注还可单独设置布局。<br />{{ copy.labels.description[layout] }}<br />{{
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
      <c-form-item field="name" label="姓名" required>
        <c-input v-model="model.name" placeholder="请输入" />
      </c-form-item>
      <c-form-item field="department" label="部门">
        <c-input
          v-model="model.department"
          placeholder="请输入"
        />
      </c-form-item>
      <c-form-item
        field="notes"
        label="备注"
        :layout="itemLayout === 'inherit' ? undefined : itemLayout"
        help="切换布局后，帮助文字仍显示在控件下方。"
      >
        <c-input v-model="model.notes" placeholder="请输入" />
      </c-form-item>
    </c-form>
    <p role="status">当前数据：{{ JSON.stringify(model) }}</p>
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
