<script setup lang="ts">
import { ref } from 'vue'
import type { ScrollbarInstance } from '@cedar-design/ui'
const active = ref(true)
const mounted = ref(true)
const bar = ref<ScrollbarInstance>()
let retained: ScrollbarInstance | undefined
function remember() { retained = bar.value }
function scrollRetained() { retained?.scrollTo(100, 100) }
</script>
<template>
  <div>
    <c-button @click="remember">Remember handle / 保留句柄</c-button>
    <c-button @click="active = !active">Activate / 停用与激活</c-button>
    <c-button @click="mounted = !mounted">Mount / 卸载与挂载</c-button>
    <c-button @click="scrollRetained">Retained scroll / 调用保留滚动</c-button>
    <c-button @click="bar?.scrollTo(0, 0)">Origin / 回到原点</c-button>
    <p>Remember the handle, deactivate or unmount, then call it. It must be inert. Activate for fresh commands; zero coordinates must work.</p>
    <KeepAlive v-if="mounted">
      <c-scrollbar v-if="active" ref="bar" style="height: 160px; width: 260px; overflow: auto">
        <div style="height: 800px; width: 700px">Scrollable content / 可滚动内容</div>
      </c-scrollbar>
    </KeepAlive>
  </div>
</template>
