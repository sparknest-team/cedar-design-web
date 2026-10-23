<script setup>
import ModelOutput from "../__demo-utils__/ModelOutput.vue";
import { ref } from "vue";
const presentation = ref("inline");
const presentations = ["inline", "click", "dblclick"].map((value) => ({
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
    key: "east",
    title: "华东",
    children: [
      { key: "shanghai", title: "上海" },
      {
        key: "zhejiang",
        title: "浙江",
        children: [
          { key: "hangzhou", title: "杭州" },
          { key: "ningbo", title: "宁波" },
        ],
      },
    ],
  },
  {
    key: "north",
    title: "华北",
    children: [
      { key: "beijing", title: "北京" },
      { key: "tianjin", title: "天津", disabled: true },
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
  <c-space direction="column" :size="16">
    <c-select
      v-model="presentation"
      :options="presentations"
      :clearable="false"
      aria-label="字段展示方式"
    />
    <c-form :model="model" :presentation="presentation">
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
            (query, node) => String(node.title).includes(query)
          "
          allow-search
      /></c-form-item>
      <c-form-item field="trees" label="多选树节点"
        ><c-tree-select
          v-model="model.trees"
          :data="treeOptions"
          multiple
          tree-checkable
          :filter-tree-node="
            (query, node) => String(node.title).includes(query)
          "
          allow-search
      /></c-form-item>
    </c-form>
    <ModelOutput aria-label="当前模型">{{
      JSON.stringify(model, null, 2)
    }}</ModelOutput>
  </c-space>
</template>
