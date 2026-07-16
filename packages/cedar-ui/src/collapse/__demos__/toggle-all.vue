<template>
  <c-space direction="column" :style="{ width: '100%' }">
    <c-space wrap>
      <c-button @click="toggleAll({ expand: 'inverse' })">切换全部</c-button>
      <c-button @click="toggleAll({ expand: 'inverse', skipDisabled: true })">切换全部（跳过禁用）</c-button>
      <c-button @click="toggleAll({ expand: true })">展开全部</c-button>
      <c-button @click="toggleAll({ expand: true, skipDisabled: true })">展开全部（跳过禁用）</c-button>
      <c-button @click="toggleAll({ expand: false })">收起全部</c-button>
      <c-button @click="toggleAll({ expand: false, skipDisabled: true })">收起全部（跳过禁用）</c-button>
    </c-space>
    <c-collapse ref="collapseRef" v-model:active-names="activeNames">
      <c-collapse-item title="Panel 1" name="1">
        <div>Content 1</div>
      </c-collapse-item>
      <c-collapse-item title="Panel 2" name="2">
        <div>Content 2</div>
      </c-collapse-item>
      <c-collapse-item title="Panel 3" name="3" disabled>
        <div>Content 3</div>
      </c-collapse-item>
      <c-collapse-item title="Panel 4" name="4" disabled>
        <div>Content 4</div>
      </c-collapse-item>
    </c-collapse>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const collapseRef = ref<{
  toggleAll: (options: { expand: boolean | 'inverse'; skipDisabled?: boolean }) => void
}>()
const activeNames = ref<(string | number)[]>(['2', '4'])

const toggleAll = (options: { expand: boolean | 'inverse'; skipDisabled?: boolean }) => {
  collapseRef.value?.toggleAll(options)
}
</script>
