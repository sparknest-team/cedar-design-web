<template>
  <div>
    <!-- 模拟用户环境：祖先 width:max-content，宽度由内容决定（无宽度约束） -->
    <div style="width: max-content">
      <c-table
        :columns="columns"
        :data="data"
        column-resizable
        :pagination="false"
        :bordered="{ cell: true }"
        size="xs"
      />
    </div>
    <pre id="chase-diag" style="margin-top: 8px; font-size: 12px">{{ diag }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

// 8 列 × 200px = 1600，超过 1200 的验证视口
const columns = Array.from({ length: 8 }, (_, i) => ({
  dataIndex: `c${i}`,
  title: `列${i}`,
  width: 200,
}));
const data = [
  Object.fromEntries(columns.map((c) => [c.dataIndex, `${c.title}内容`])) as Record<
    string,
    string
  >,
];

const diag = ref("pending");

onMounted(() => {
  setTimeout(() => {
    const root = document
      .getElementById("chase-diag")
      ?.closest("div")
      ?.parentElement?.querySelector(".c-table");
    if (!root) {
      diag.value = "root not found";
      return;
    }
    const container = root.querySelector(".c-table-container") as HTMLElement;
    const content = root.querySelector(".c-table-content") as HTMLElement;
    const table = root.querySelector(".c-table-element") as HTMLElement;
    const thumb = root.querySelector(".c-scrollbar-thumb-direction-horizontal");
    const lines = {
      rootMaxWidth: getComputedStyle(root as Element).maxWidth,
      containerClientWidth: container?.clientWidth,
      tableWidth: Math.round(table?.getBoundingClientRect().width ?? -1),
      contentScrollable: content ? content.scrollWidth > content.clientWidth : null,
      scrollXClass: content?.classList.contains("c-table-content-scroll-x"),
      horizontalThumbExists: Boolean(thumb),
      pageGrew:
        document.scrollingElement!.scrollWidth >
        document.scrollingElement!.clientWidth,
    };
    diag.value = JSON.stringify(lines, null, 2);
  }, 1500);
});
</script>
