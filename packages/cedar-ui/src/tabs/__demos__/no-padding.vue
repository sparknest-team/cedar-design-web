<template>
  <c-tabs :body-padding="false" :header-padding="false" default-active="2">
    <c-tabs-navs>
      <c-tab-nav key="1" title="Tab 1" />
      <c-tab-nav key="2" title="Tab 2" />
      <c-tab-nav key="3">
        <template #title>Tab 3</template>
      </c-tab-nav>
    </c-tabs-navs>
    <c-tabs-items>
      <c-tab-item key="1">
        <div class="p-24">利用class的p-24实现自定义边距，并且去掉了最左侧header的padding</div>
      </c-tab-item>
      <c-tab-item key="2"> Content of Tab Panel 2</c-tab-item>
      <c-tab-item key="3">Content of Tab Panel 3</c-tab-item>
    </c-tabs-items>
  </c-tabs>
</template>

<script lang="ts" setup>
</script>
