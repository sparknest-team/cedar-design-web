<template>
  <div class="p-24">
    <c-space direction="column" block>
      <c-space>
        <c-space direction="column">
          <label>Thickness：</label>
          <c-select v-model="thickness" :style="{ width: '120px' }" placeholder="选择 Thickness">
            <c-option :value="1">1px</c-option>
            <c-option :value="2">2px</c-option>
            <c-option :value="3">3px</c-option>
            <c-option :value="4">4px</c-option>
            <c-option :value="5">5px</c-option>
            <c-option :value="6">6px</c-option>
          </c-select>
        </c-space>
        <c-space direction="column">
          <label>Size-y：</label>
          <c-select v-model="sizeY" :style="{ width: '120px' }" placeholder="选择 Size-y">
            <c-option :value="8">8px</c-option>
            <c-option :value="24">24px</c-option>
            <c-option value="xs">xs</c-option>
            <c-option value="sm">sm</c-option>
            <c-option value="md">md</c-option>
            <c-option value="lg">lg</c-option>
            <c-option value="xl">xl</c-option>
          </c-select>
        </c-space>
        <c-space direction="column">
          <label>Size-x：</label>
          <c-select v-model="sizeX" :style="{ width: '120px' }" placeholder="选择 Size-x">
            <c-option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</c-option>
          </c-select>
        </c-space>
        <c-space direction="column">
          <label>Vertical：</label>
          <c-select v-model="orientation">
            <c-option value="horizontal">horizontal</c-option>
            <c-option value="vertical">vertical</c-option>
          </c-select>
        </c-space>
      </c-space>
    </c-space>
  </div>

  <div class="p-24" style="border: 1px solid rgb(var(--gray-2))">
    <div
      class="divider-demo-size-inset"
      :style="
        orientation === 'vertical'
          ? { flexDirection: 'row', alignItems: 'center' }
          : { flexDirection: 'column', alignItems: 'stretch' }
      "
    >
      <span>文字</span>
      <c-divider :thickness="thickness" :size-x="sizeX" :size-y="sizeY" :orientation="orientation" />
      <span>Item 1</span>
      <c-divider :thickness="thickness" :size-x="sizeX" :size-y="sizeY" :orientation="orientation" />
      <span>Item 2</span>
      <c-divider :thickness="thickness" :size-x="sizeX" :size-y="sizeY" :orientation="orientation" />
      <span>Item 3</span>
    </div>
  </div>
  <c-divider hairline />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const thickness = ref(1)
const sizeY = ref('16px')
const sizeX = ref('16px')
const orientation = ref('horizontal')
const options = [
  { label: '0', value: 0 },
  { label: '[16, 0]', value: [16, 0] },
  { label: '[24, 24]', value: [24, 24] },
  { label: 'xs', value: 'xs' },
  { label: 'sm', value: 'sm' },
  { label: 'md', value: 'md' },
  { label: 'lg', value: 'lg' },
  { label: 'xl', value: 'xl' },
]
</script>

<style>
.divider-demo-size-inset {
  min-height: 200px;
  display: flex;
  background-color: rgb(var(--gray-1));
}
</style>
