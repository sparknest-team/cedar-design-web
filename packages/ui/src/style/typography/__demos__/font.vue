<template>
  <c-table :columns="columns2" :data="dataFont" :pagination="false" />
</template>
<script lang="ts" setup>
import { h } from "vue";
import { Message } from "@cedar-design/ui-vue";

const columns2 = [
  {
    title: "Class",
    dataIndex: "class",
    render: (data) => {
      return h(
        "div",
        {
          style: {
            cursor: "pointer",
          },
          onClick: () => {
            navigator.clipboard
              .writeText(data.record.class)
              .then(() => {
                Message.success("copy success");
              })
              .catch((err) => {
                Message.fail("copy fail");
              });
          },
        },
        data.record.class,
      );
    },
  },
  {
    title: "Properties/Effective CSS",
    dataIndex: "properties",
    render: (data) => {
      return [
        h("div", {
          innerHTML: `<div>${data.record.properties.replaceAll("\n", "<br/>")}</div>`, // 等效于 v-html
        }),
        h("div", {
          class: data.record.class,
          style: "margin-top: 10px;",
          innerHTML: `<div>${data.record.effective?.replaceAll("\n", "<br/>")}</div>`, // 等效于 v-html
        }),
      ];
    },
  },
];
const dataFont = [
  {
    class: "c-text-body-2-regular",
    properties:
      "font-family: var(--c-font-regular);\nfont-size: var(--c-font-size-body-1);\nfont-weight: var(--c-font-weight-regular);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family:Auto;\nfont-size: 12px;\nfont-weight: 400;\nline-height: 1.5;",
  },
  {
    class: "c-text-body-2-semibold",
    properties:
      "font-family: var(--c-font-regular);\nfont-size: var(--c-font-size-body-1);\nfont-weight: var(--c-font-weight-semibold);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family:Auto;\nfont-size: 12px;\nfont-weight: 600;\nline-height: 1.5;",
  },
  {
    class: "c-text-body-1-regular",
    properties:
      "font-family: var(--c-font-regular);\nfont-size: var(--c-font-size-body-2);\nfont-weight: var(--c-font-weight-regular);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family:Auto;\nfont-size: 14px;\nfont-weight: 400;\nline-height: 1.5;",
  },
  {
    class: "c-text-body-1-semibold",
    properties:
      "font-family: var(--c-font-regular);\nfont-size: var(--c-font-size-body-2);\nfont-weight: var(--c-font-weight-semibold);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family:Auto;\nfont-size: 14px;\nfont-weight: 600;\nline-height: 1.5;",
  },
  {
    class: "c-text-subtitle-2-regular",
    properties:
      "font-family: var(--c-font-regular);\nfont-size: var(--c-font-size-subtitle-1);\nfont-weight: var(--c-font-weight-regular);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family:Auto;\nfont-size: 16px;\nfont-weight: 400;\nline-height: 1.5;",
  },
  {
    class: "c-text-subtitle-2-semibold",
    properties:
      "font-family: var(--c-font-regular);\nfont-size: var(--c-font-size-subtitle-1);\nfont-weight: var(--c-font-weight-semibold);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family:Auto;\nfont-size: 16px;\nfont-weight: 600;\nline-height: 1.5;",
  },
  {
    class: "c-text-subtitle-1-regular",
    properties:
      "font-family: var(--c-font-regular);\nfont-size: var(--c-font-size-subtitle-2);\nfont-weight: var(--c-font-weight-regular);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family:Auto;\nfont-size: 18px;\nfont-weight: 400;\nline-height: 1.5;",
  },
  {
    class: "c-text-subtitle-1-semibold",
    properties:
      "font-family: var(--c-font-regular);\nfont-size: var(--c-font-size-subtitle-2);\nfont-weight: var(--c-font-weight-semibold);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family:Auto;\nfont-size: 18px;\nfont-weight: 600;\nline-height: 1.5;",
  },
  {
    class: "c-text-heading-4-semibold",
    properties:
      "font-family: var(--c-font-regular);\nfont-size: var(--c-font-size-heading-1);\nfont-weight: var(--c-font-weight-semibold);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family:Auto;\nfont-size: 20px;\nfont-weight: 600;\nline-height: 1.5;",
  },
  {
    class: "c-text-heading-3-semibold",
    properties:
      "font-family: var(--c-font-regular);\nfont-size: var(--c-font-size-heading-2);\nfont-weight: var(--c-font-weight-semibold);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family:Auto;\nfont-size: 24px;\nfont-weight: 600;\nline-height: 1.5;",
  },
  {
    class: "c-text-heading-2-semibold",
    properties:
      "font-family: var(--c-font-regular);\nfont-size: var(--c-font-size-heading-3);\nfont-weight: var(--c-font-weight-semibold);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family:Auto;\nfont-size: 32px;\nfont-weight: 600;\nline-height: 1.5;",
  },
  {
    class: "c-text-heading-1-semibold",
    properties:
      "font-family: var(--c-font-regular);\nfont-size: var(--c-font-size-heading-4);\nfont-weight: var(--c-font-weight-semibold);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family:Auto;\nfont-size: 40px;\nfont-weight: 600;\nline-height: 1.5;",
  },
  {
    class: "text-number-7-regular",
    properties:
      "font-family: var(--c-font-number-regular);\nfont-size: var(--c-font-size-body-2);\nfont-weight: var(--c-font-weight-regular);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family: Barlow;\nfont-size: 14px;\nfont-weight: 400;\nline-height: 1.5;",
  },
  {
    class: "text-number-7-bold",
    properties:
      "font-family: var(--c-font-number-bold);\nfont-size: var(--c-font-size-body-2);\nfont-weight: var(--c-font-weight-blod);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family: Barlow;\nfont-size: 14px;\nfont-weight: 700;\nline-height: 1.5;",
  },
  {
    class: "text-number-6-regular",
    properties:
      "font-family: var(--c-font-number-regular);\nfont-size: var(--c-font-size-subtitle-1);\nfont-weight: var(--c-font-weight-regular);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family: Barlow;\nfont-size: 16px;\nfont-weight: 400;\nline-height: 1.5;",
  },
  {
    class: "text-number-6-bold",
    properties:
      "font-family: var(--c-font-number-bold);\nfont-size: var(--c-font-size-subtitle-1);\nfont-weight: var(--c-font-weight-bold);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family: Barlow;\nfont-size: 16px;\nfont-weight: 700;\nline-height: 1.5;",
  },
  {
    class: "text-number-5-bold",
    properties:
      "font-family: var(--c-font-number-bold);\nfont-size: var(--c-font-size-subtitle-2);\nfont-weight: var(--c-font-weight-bold);\nline-height: var(--c-line-height-default);",
    effective:
      "font-family: Barlow;\nfont-size: 18px;\nfont-weight: 700;\nline-height: 1.5;",
  },
  {
    class: "text-number-4-bold",
    properties:
      "font-family: var(--c-font-number-bold);\nfont-size: var(--c-font-size-heading-1);\nfont-weight: var(--c-font-weight-bold);\nline-height: 24px;",
    effective:
      "font-family: Barlow;\nfont-size: 20px;\nfont-weight: 700;\nline-height: 1;",
  },
  {
    class: "text-number-3-bold",
    properties:
      "font-family: var(--c-font-number-bold);\nfont-size: var(--c-font-size-heading-2);\nfont-weight: var(--c-font-weight-bold);\nline-height: 29px;",
    effective:
      "font-family: Barlow;\nfont-size: 24px;\nfont-weight: 700;\nline-height: 1;",
  },
  {
    class: "text-number-2-bold",
    properties:
      "font-family: var(--c-font-number-bold);\nfont-size: var(--c-font-size-heading-3);\nfont-weight: var(--c-font-weight-bold);\nline-height: 38px;",
    effective:
      "font-family: Barlow;\nfont-size: 32px;\nfont-weight: 700;\nline-height: 1;",
  },
  {
    class: "text-number-1-bold",
    properties:
      "font-family: var(--c-font-number-bold);\nfont-size: var(--c-font-size-heading-4);\nfont-weight: var(--c-font-weight-bold);\nline-height: 48px;",
    effective:
      "font-family: Barlow;\nfont-size: 40px;\nfont-weight: 700;\nline-height: 1;",
  },
];
</script>

<style lang="scss">
.table-line-height-unset .c-table-td {
  line-height: unset;
}
</style>
