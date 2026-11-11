<template>
  <c-radio-group v-model="trigger">
    <c-radio value="click">click</c-radio>
    <c-radio value="hover">hover</c-radio>
  </c-radio-group>
  <c-tabs default-value="1" :trigger="trigger">
    <c-tabs-navs>
      <c-tab-nav name="1" title="Tab 1" />
      <c-tab-nav name="2" title="Tab 2" />
      <c-tab-nav name="3">
        <template #title>Tab 3</template>
      </c-tab-nav>
    </c-tabs-navs>
    <c-tabs-items>
      <c-tab-item name="1">Content of Tab Panel 1</c-tab-item>
      <c-tab-item name="2">Content of Tab Panel 2</c-tab-item>
      <c-tab-item name="3">Content of Tab Panel 3</c-tab-item>
    </c-tabs-items>
  </c-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const trigger = ref('click')
</script>
