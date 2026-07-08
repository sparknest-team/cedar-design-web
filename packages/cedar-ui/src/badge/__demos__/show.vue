<template>
  <c-space>
    主动控制
    <c-switch v-model="show" />
    <c-input-number v-model="content" />
  </c-space>
  <c-divider />
  <c-space direction="column">
    <c-badge :content="0" :show-zero="true" :show="show" description="show-zero true" />
    <c-badge :content="0" :show-zero="false" :show="show" description="show-zero false" />
  </c-space>
  <c-divider />
  <c-space>
    <c-badge :content="content" :show="show" description="Description" />
    <c-badge :content="content" :show="show" description="Description" />
    <c-badge :content="content" :show="show" description="Description" dot />
  </c-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(true)
const content = ref(1)
</script>
