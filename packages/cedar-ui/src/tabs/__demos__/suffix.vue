<template>
  <c-tabs>
    <c-tabs-navs>
      <template #suffix>
        <c-button>Action</c-button>
      </template>
      <c-tab-nav name="1" title="Tab 1" />
      <c-tab-nav name="2" title="Tab 2" />
      <c-tab-nav name="3" title="Tab 3" />
    </c-tabs-navs>
    <c-tabs-items>
      <c-tab-item name="1"> Content of Tab Panel 1 </c-tab-item>
      <c-tab-item name="2"> Content of Tab Panel 2 </c-tab-item>
      <c-tab-item name="3"> Content of Tab Panel 3 </c-tab-item>
    </c-tabs-items>
  </c-tabs>
</template>

<script lang="ts" setup>
</script>
