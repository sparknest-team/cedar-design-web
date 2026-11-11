<script setup lang="ts">
import { reactive, ref } from "vue";
const model = reactive({ status: "" as string | null });
const multiple = ref(["active"]);
const optional = ref<string | undefined>("active");
const options = [
  { value: "", label: "全部" },
  { value: "active", label: "启用" },
];
</script>
<template>
  <c-space direction="column">
    <p>“全部”的值是空字符串，仍是有效选项；点击清空返回 null。</p>
    <c-form :model="model" layout="vertical">
      <c-form-item field="status" label="状态">
        <c-select
          v-model="model.status"
          :options="options"
          edit-mode="direct"
          clearable
          :empty-values="[null, undefined]"
          :empty-value="null"
        />
      </c-form-item>
    </c-form>
    <c-button @click="model.status = ''">选择“全部”</c-button>
    <p>
      当前模型: <output>{{ JSON.stringify(model.status) }}</output>
    </p>
    <c-form layout="vertical">
      <c-form-item label="多选：清空返回 []">
        <c-select
          v-model="multiple"
          :options="options"
          edit-mode="direct"
          multiple
          clearable
          :empty-value="() => []"
        />
        <output>{{ JSON.stringify(multiple) }}</output>
      </c-form-item>
      <c-form-item label="单选：清空返回 undefined">
        <c-select
          v-model="optional"
          :options="options"
          edit-mode="direct"
          clearable
          :empty-value="() => undefined"
        />
        <output>{{ String(optional) }}</output>
      </c-form-item>
    </c-form>
  </c-space>
</template>
