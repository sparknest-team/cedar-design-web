<script setup>
import ModelOutput from "../__demo-utils__/ModelOutput.vue";
import { ref } from "vue";
const editMode = ref("direct");
const presentations = ["direct", "click", "dblclick"].map((value) => ({
  value,
  label: value,
}));
const regions = [
  {
    label: "华东",
    value: "east",
    children: [
      { label: "上海", value: "shanghai" },
      {
        label: "浙江",
        value: "zhejiang",
        children: [
          { label: "杭州", value: "hangzhou" },
          { label: "宁波", value: "ningbo" },
        ],
      },
    ],
  },
  {
    label: "华北",
    value: "north",
    children: [
      { label: "北京", value: "beijing" },
      { label: "天津", value: "tianjin" },
    ],
  },
  { label: "华南（暂不可选）", value: "south", disabled: true },
];
const treeOptions = [
  {
    value: "east",
    label: "华东",
    children: [
      { value: "shanghai", label: "上海" },
      {
        value: "zhejiang",
        label: "浙江",
        children: [
          { value: "hangzhou", label: "杭州" },
          { value: "ningbo", label: "宁波" },
        ],
      },
    ],
  },
  {
    value: "north",
    label: "华北",
    children: [
      { value: "beijing", label: "北京" },
      { value: "tianjin", label: "天津", disabled: true },
    ],
  },
];
const model = ref({
  regions: ["shanghai", "hangzhou"],
  region: "shanghai",
  tree: "shanghai",
  trees: ["shanghai", "hangzhou"],
});
</script>

<template>
  <c-space direction="column" align="stretch" :size="16">
    <c-form-item layout="vertical" size="sm" label="字段展示方式">
      <c-radio-group
        v-model="editMode"
        aria-label="字段展示方式"
        :options="presentations"
        variant="button"
        size="sm"
      />
    </c-form-item>
    <c-form :model="model" :edit-mode="editMode">
      <c-form-item field="region" label="地区"
        ><c-cascader v-model="model.region" :options="regions" filterable
      /></c-form-item>
      <c-form-item field="regions" label="多选地区"
        ><c-cascader
          v-model="model.regions"
          :options="regions"
          multiple
          filterable
          show-path-label
      /></c-form-item>
      <c-form-item field="tree" label="树选择"
        ><c-tree-select
          v-model="model.tree"
          :data="treeOptions"
          :filter-tree-node="
            (query, node) => String(node.label).includes(query)
          "
          filterable
      /></c-form-item>
      <c-form-item field="trees" label="多选树节点"
        ><c-tree-select
          v-model="model.trees"
          :data="treeOptions"
          multiple
          tree-checkable
          :filter-tree-node="
            (query, node) => String(node.label).includes(query)
          "
          filterable
      /></c-form-item>
    </c-form>
    <ModelOutput aria-label="当前模型">{{
      JSON.stringify(model, null, 2)
    }}</ModelOutput>
  </c-space>
</template>
