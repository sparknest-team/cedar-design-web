<script setup lang="ts">
import { useDemoLocale } from "../../__demos__/locale";
const demoCopy = useDemoLocale("treeAppearanceComparison");
import { ref } from "vue";
import { proxyRefs as demoProxyRefs } from "vue";

const scene1 = demoProxyRefs(
  (() => {
    const size = ref("md");

    const treeData = [
      {
        label: "Trunk 0-0",
        value: "0-0",
        children: [
          {
            label: "Branch 0-0-0",
            value: "0-0-0",
            children: [
              {
                label: "Leaf",
                value: "0-0-0-0",
              },
              {
                label: "Leaf",
                value: "0-0-0-1",
              },
            ],
          },
          {
            label: "Branch 0-0-1",
            value: "0-0-1",
            children: [
              {
                label: "Leaf",
                value: "0-0-1-0",
              },
            ],
          },
        ],
      },
    ];
    return { size, treeData };
  })(),
);

const scene2 = demoProxyRefs(
  (() => {
    const treeData = [
      {
        label: "Trunk 0-0",
        value: "0-0",
        children: [
          {
            label: "Branch 0-0-0",
            value: "0-0-0",
            children: [
              {
                label: "Leaf",
                value: "0-0-0-0",
              },
              {
                label: "Leaf",
                value: "0-0-0-1",
              },
            ],
          },
          {
            label: "Branch 0-0-1",
            value: "0-0-1",
            children: [
              {
                label: "Leaf",
                value: "0-0-1-0",
              },
            ],
          },
        ],
      },
    ];
    return { treeData };
  })(),
);

const scene3 = demoProxyRefs(
  (() => {
    const showLine = ref(true);

    const treeData = [
      {
        label: "Trunk 1",
        value: "0-0",
        children: [
          {
            label: "Trunk 1-0",
            value: "0-0-0",
            children: [
              { label: "leaf", value: "0-0-0-0" },
              {
                label: "leaf",
                value: "0-0-0-1",
                children: [{ label: "leaf", value: "0-0-0-1-0" }],
              },
              { label: "leaf", value: "0-0-0-2" },
            ],
          },
          {
            label: "Trunk 1-1",
            value: "0-0-1",
          },
          {
            label: "Trunk 1-2",
            value: "0-0-2",
            children: [
              { label: "leaf", value: "0-0-2-0" },
              {
                label: "leaf",
                value: "0-0-2-1",
              },
            ],
          },
        ],
      },
      {
        label: "Trunk 2",
        value: "0-1",
      },
      {
        label: "Trunk 3",
        value: "0-2",
        children: [
          {
            label: "Trunk 3-0",
            value: "0-2-0",
            children: [
              { label: "leaf", value: "0-2-0-0" },
              { label: "leaf", value: "0-2-0-1" },
            ],
          },
        ],
      },
    ];
    return { showLine, treeData };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="size"
    >
      <h4>{{ demoCopy.size }}</h4>
      <div style="margin-bottom: 20px">
        <c-radio-group v-model="scene1.size" type="button">
          <c-radio value="xs">xs</c-radio>
          <c-radio value="sm">sm</c-radio>
          <c-radio value="md">md</c-radio>
          <c-radio value="lg">lg</c-radio>
          <c-radio value="xl">xl</c-radio>
        </c-radio-group>
      </div>
      <c-tree
        style="margin-right: 20px"
        :blockNode="true"
        :checkable="true"
        :size="scene1.size"
        :data="scene1.treeData"
      />
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="block-node"
    >
      <h4>{{ demoCopy.blockNode }}</h4>
      <c-tree block-node :data="scene2.treeData" />
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--3"
      data-comparison-scene="show-line"
    >
      <h4>{{ demoCopy.showLine }}</h4>
      <div>
        <c-typography-text>showLine</c-typography-text>
        <c-switch v-model="scene3.showLine" style="margin-left: 12px" />
      </div>
      <c-tree
        :default-selected-values="['0-0-1']"
        :data="scene3.treeData"
        :show-line="scene3.showLine"
      />
    </section>
  </div>
</template>

<style scoped lang="less">
.demo-comparison {
  display: grid;
  gap: 24px;
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case {
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case > h4 {
  margin: 0 0 12px;
  font-size: 14px;
}
</style>
