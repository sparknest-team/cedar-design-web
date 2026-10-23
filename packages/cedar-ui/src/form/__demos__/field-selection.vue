<script setup>
import ModelOutput from "../__demo-utils__/ModelOutput.vue";
import { ref, watch } from "vue";
const presentation = ref("inline");
const presentations = ["inline", "click", "dblclick"].map((value) => ({
  value,
  label: value,
}));
const devices = [
  {
    isGroup: true,
    label: "常用设备",
    options: [
      { value: "laptop", label: "笔记本" },
      { value: "phone", label: "手机" },
      { value: "tablet", label: "平板" },
    ],
  },
  {
    isGroup: true,
    label: "其他设备",
    options: [
      { value: "desktop", label: "台式工作站" },
      { value: "watch", label: "智能手表（暂不可选）", disabled: true },
    ],
  },
];
const people = [
  { value: "lin", label: "林晓 · 研发" },
  { value: "chen", label: "陈晨 · 设计" },
  { value: "zhou", label: "周宁 · 运营" },
];
const staffRecord = (item) => ({
  user_id: item.value,
  worker_user_id: item.value,
  display_name: item.label,
  cn_name: item.label,
});
const peopleFetch = {
  get: async (_url, { params } = {}) => ({
    resultCode: "success",
    data: {
      list: people
        .filter((item) => item.value === params?.worker_user_id)
        .map(staffRecord),
    },
  }),
  post: async (_url, { params } = {}) => {
    const query = params?.name || "";
    await new Promise((resolve) =>
      setTimeout(resolve, query ? (query.length % 2 ? 700 : 350) : 150),
    );
    return {
      resultCode: "success",
      data: {
        result_list: people
          .filter(
            (item) =>
              !params?.name ||
              `${item.value} ${item.label}`.includes(params.name),
          )
          .map(staffRecord),
      },
    };
  },
};
const suggestions = [
  {
    isGroup: true,
    label: "技术团队",
    options: [
      { value: "研发" },
      { value: "研发平台" },
      { value: "研发基础设施" },
    ],
  },
  {
    isGroup: true,
    label: "协作团队",
    options: [
      { value: "设计" },
      { value: "运营" },
      { value: "归档团队", disabled: true },
    ],
  },
];
const model = ref({
  device: "laptop",
  devices: ["laptop", "phone"],
  keyword: "研发",
  person: "lin",
});
</script>

<template>
  <c-space direction="column" :size="16">
    <c-select
      v-model="presentation"
      :options="presentations"
      :clearable="false"
      aria-label="字段展示方式"
    />
    <c-form :model="model" :presentation="presentation">
      <c-form-item field="device" label="单选设备"
        ><c-select v-model="model.device" :options="devices" filterable
      /></c-form-item>
      <c-form-item field="devices" label="多选设备"
        ><c-select
          v-model="model.devices"
          :options="devices"
          multiple
          filterable
          :limit="3"
      /></c-form-item>
      <c-form-item field="keyword" label="自动补全"
        ><c-auto-complete
          v-model="model.keyword"
          :options="suggestions"
          clearable
          placeholder="输入或选择团队"
      /></c-form-item>
      <c-form-item field="person" label="人员"
        ><c-people-select
          v-model="model.person"
          :label="people.find((item) => item.value === model.person)?.label"
          :fetch="peopleFetch"
          clearable
          placeholder="搜索人员"
      /></c-form-item>
    </c-form>
    <ModelOutput aria-label="当前模型">{{
      JSON.stringify(model, null, 2)
    }}</ModelOutput>
  </c-space>
</template>
