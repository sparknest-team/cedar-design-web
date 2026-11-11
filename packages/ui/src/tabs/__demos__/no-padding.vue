<template>
  <c-tabs :item-style="{ padding: 0 }" default-value="2">
    <c-tabs-navs :style="{ paddingInline: 0 }">
      <c-tab-nav name="1" title="Tab 1" />
      <c-tab-nav name="2" title="Tab 2" />
      <c-tab-nav name="3">
        <template #title>Tab 3</template>
      </c-tab-nav>
    </c-tabs-navs>
    <c-tabs-items>
      <c-tab-item name="1">
        <div class="p-24">通过 item-style 设置内容间距，并通过 TabsNavs 的 style 去掉导航两端内边距</div>
      </c-tab-item>
      <c-tab-item name="2"> Content of Tab Panel 2</c-tab-item>
      <c-tab-item name="3">Content of Tab Panel 3</c-tab-item>
    </c-tabs-items>
  </c-tabs>
</template>

<script lang="ts" setup>
</script>
