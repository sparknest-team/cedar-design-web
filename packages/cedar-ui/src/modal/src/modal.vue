<template>
  <Modal
    :class="{
      'cedar-modal-body-no-padding': !bodyPadding,
      [`cedar-modal-size-${size}`]: typeof width === 'undefined',
      'cedar-modal-fullscreen': fullscreen,
    }"
    v-bind="{ ...attrs, ...props_ } as any"
    @open="openHandler"
    @before-close="beforeCloseHandler"
    @before-open="beforeOpenHandler"
  >
    <!-- 遍历父组件传入的 slots 透传给子组件 -->
    <template v-for="(slot, key, i) in $slots" :key="i" #[key]="scope">
      <slot :name="key" v-bind="scope || {}"></slot>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import { Modal } from '@arco-design/web-vue'
import { onUnmounted, type PropType, useAttrs, useSlots } from 'vue'

const slots = useSlots()

const attrs = useAttrs()
defineOptions({
  name: 'Modal',
})

const props_ = defineProps({
  cancelButtonProps: {
    type: Object,
    default: () => ({ type: 'outline' }),
  },
  titleAlign: {
    type: String,
    default: 'start',
  },
  bodyPadding: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  width: {
    type: String,
  },
  fullscreen: {
    type: Boolean,
  },
})
const emit = defineEmits(['open', 'before-open', 'before-close'])
// 优先用 beforeOpenHandler 提前隐藏滚动条比较好。
const beforeOpenHandler = () => {
  document.documentElement.classList.add('overflow-hidden')
  emit('before-open')
}
// 如果modal用了v-if去控制，那么 beforeOpenHandler 不会执行。所以用 openHandler 来兜底。
const openHandler = () => {
  document.documentElement.classList.add('overflow-hidden')
  emit('open')
}
const beforeCloseHandler = () => {
  document.documentElement.classList.remove('overflow-hidden')
  emit('before-close')
}

onUnmounted(() => {
  document.documentElement.classList.remove('overflow-hidden')
})
</script>
