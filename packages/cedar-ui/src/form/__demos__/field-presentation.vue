<script setup>
import ModelOutput from "../__demo-utils__/ModelOutput.vue";

import { computed, ref } from "vue";

const editMode = ref("direct");
const readPretty = ref(false);

const options = ref([
  { value: 1, label: "研发设备" },
  { value: 2, label: "设计设备" },
  { value: 3, label: "运营设备" },
]);
const form = ref({
  name: "默认可直接编辑",
  deviceIds: [2],
  note: "此项始终直接编辑",
  summary: "只读展示",
});
const status = ref("");

const modeOptions = ["direct", "click", "dblclick"].map((value) => ({
  label: value,
  value,
}));
const committed = computed(() => JSON.stringify(form.value));
const presentationHint = computed(() =>
  readPretty.value
    ? "只展示已保存的值；下方“单项覆盖 direct”通过 readPretty=false 保持可编辑。"
    : editMode.value === "direct"
      ? "直接编辑，即时更新下方模型；选择设备无需额外确认。"
      : "按展示方式进入编辑；确认才更新下方模型，取消不保存本次修改。",
);
</script>
<template>
  <c-space direction="column" align="stretch" :size="16">
    <c-form-item layout="vertical" size="sm" label="Form 展示方式">
      <c-radio-group
        aria-label="Form 展示方式"
        v-model="editMode"
        :options="modeOptions"
        variant="button"
        size="sm"
      />
    </c-form-item>
    <c-space wrap>
      <c-checkbox v-model="readPretty">纯阅读 readPretty</c-checkbox>
    </c-space>
    <p>
      {{ presentationHint }}<br />设备 4 已停用，最多选择 3
      个设备；可切换本地搜索与模拟远程搜索。
    </p>
    <c-form
      :model="form"
      :edit-mode="editMode"
      :read-pretty="readPretty"
      @submit-success="status = '表单已提交'"
      @submit-failed="status = '请完成当前编辑或修正校验错误'"
    >
      <c-form-item
        field="name"
        label="名称"
        :rules="[{ required: true, message: '名称不能为空' }]"
      >
        <c-input v-model="form.name" placeholder="请输入名称" clearable />
      </c-form-item>
      <c-form-item
        field="deviceIds"
        label="设备"
        :rules="[{ type: 'array', required: true, message: '请选择设备' }]"
      >
        <c-select
          v-model="form.deviceIds"
          :options="options"
          multiple
          filterable
          :limit="3"
          placeholder="搜索设备"
        />
      </c-form-item>
      <c-form-item
        field="note"
        label="单项覆盖 direct"
        edit-mode="direct"
        :read-pretty="false"
      >
        <c-input v-model="form.note" />
      </c-form-item>
      <c-form-item field="summary" label="固定 readPretty" read-pretty>
        <c-input v-model="form.summary" />
      </c-form-item>
      <c-button html-type="submit">提交表单</c-button>
    </c-form>
    <ModelOutput role="status">当前模型：{{ committed }}</ModelOutput>
    <p v-if="status" role="status">{{ status }}</p>
  </c-space>
</template>
