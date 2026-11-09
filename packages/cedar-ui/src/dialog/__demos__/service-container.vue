<script setup lang="ts">
import { defineComponent, getCurrentInstance, h, onBeforeUnmount, ref, shallowRef } from 'vue'
import Dialog from '..'
import Button from '../../button'
const first = ref<HTMLElement>()
const second = ref<HTMLElement>()
const active = shallowRef<ReturnType<typeof Dialog.open>>()
const context = getCurrentInstance()?.appContext
const result = ref('尚未打开 / Not opened')
function openSample() {
  if (!first.value) return
  active.value?.close()
  const Content = defineComponent({ setup() {
    const draft = ref('Draft'), location = ref('A')
    function move(to: 'A' | 'B') {
      const target = to === 'A' ? first.value : second.value
      if (target) { owned.update({ popupContainer: target }); location.value = to }
    }
    return () => h('div', [
      h('p', '当前挂载区域 / Current target: ' + location.value),
      h('input', { 'aria-label': '服务草稿 / Service draft', value: draft.value, onInput: (event: Event) => { draft.value = (event.target as HTMLInputElement).value } }),
      h('p', '切换挂载区域后，输入草稿仍保留。Moving the same dialog preserves its draft.'),
      h(Button, { onClick: () => move('A') }, () => '移动到 A / Move to A'),
      h(Button, { onClick: () => move('B') }, () => '移动到 B / Move to B'),
    ])
  } })
  const owned: ReturnType<typeof Dialog.open> = Dialog.open({ title: '服务挂载区域 / Service target', popupContainer: first.value, content: () => h(Content) }, context)
  active.value = owned
  result.value = '已打开 / Opened'
  void owned.then(action => { if (active.value === owned) { active.value = undefined; result.value = String(action) } })
}
onBeforeUnmount(() => { active.value?.close(); active.value = undefined })
</script>
<template>
  <c-space direction="column" :size="16">
    <c-button @click="openSample">打开区域 A / Open in A</c-button>
    <div ref="first" data-service-target="A" style="min-height: 64px; border: 1px dashed currentColor; padding: 12px">挂载区域 A / Target A</div>
    <div ref="second" data-service-target="B" style="min-height: 64px; border: 1px dashed currentColor; padding: 12px">挂载区域 B / Target B</div>
    <p role="status">{{ result }}</p>
  </c-space>
</template>
