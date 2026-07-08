<template>
  <Popconfirm v-bind="computedAttrs">
    <!-- 遍历父组件传入的 slots 透传给子组件 -->
    <template v-for="(slot, key, i) in $slots" :key="i" #[key]="scope">
      <slot :name="key" v-bind="scope || {}"></slot>
    </template>
  </Popconfirm>
</template>

<script lang="ts" setup>
import { Popconfirm } from '@arco-design/web-vue'
import { useSlots, useAttrs, computed } from 'vue'

const slots = useSlots()

const $attrs = useAttrs()

const computedAttrs = computed(() => {
  return {
    ...$attrs,
    cancelButtonProps: {
      type: 'outline' as const,
      ...($attrs.cancelButtonProps || {}),
    },
  }
})

defineOptions({
  name: 'Popconfirm',
})
</script>
