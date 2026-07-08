<template>
  <Timeline v-bind="$attrs">
    <!-- 遍历父组件传入的 slots 透传给子组件 -->
    <template v-for="(slot, key, i) in $slots" :key="i" #[key]="scope">
      <slot :name="key" v-bind="scope || {}"></slot>
    </template>
  </Timeline>
</template>

<script lang="ts" setup>
import { Timeline } from '@arco-design/web-vue'
import { useSlots } from 'vue'

const slots = useSlots()

defineOptions({
  name: 'Timeline',
})
</script>
