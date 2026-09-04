<template>
  <c-space direction="column" fill size="lg">
    <c-table :columns="columns" :data="data" :pagination="false" />
  </c-space>
</template>
<script lang="ts" setup>
import { h } from "vue";

const columns = [
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
              .catch(() => {
                Message.fail("copy fail");
              });
          },
        },
        data.record.class,
      );
    },
  },
  {
    title: "Properties",
    dataIndex: "properties",
  },
];

const data = Array.from({ length: 25 }, (_, i) => ({
  class: `c-elevation--${i}`,
  properties: `Material elevation level ${i}`,
}));
</script>
