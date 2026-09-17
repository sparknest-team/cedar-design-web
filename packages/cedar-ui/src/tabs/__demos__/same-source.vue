<script setup lang="ts">
import { ref } from 'vue'
const active = ref('overview')
const items = [{ key: 'overview', title: '概览' }, { key: 'details', title: '详情' }, { key: 'disabled', title: '不可用', disabled: true }]
</script>
<template>
  <c-tabs v-model:active="active" swipeable lazy-load>
    <c-tabs-navs aria-label="内容分类">
      <c-tab-nav v-for="item in items" :key="item.key" :title="item.title" :disabled="item.disabled" />
    </c-tabs-navs>
    <c-tabs-items>
      <c-tab-item v-for="item in items" :key="item.key">{{ item.title }}内容</c-tab-item>
    </c-tabs-items>
  </c-tabs>
</template>
