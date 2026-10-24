<script setup lang="ts">
import { ref } from 'vue'
import type { MenuStrategy } from '@cedar-design/ui'

const strategy = ref<MenuStrategy>('fixed')
const options = [
  { label: '操作', children: [
    { label: '导出', children: [
      { label: 'CSV', value: 'csv' },
      { label: 'JSON', value: 'json' },
    ] },
    { label: '复制', value: 'copy' },
  ] },
]
</script>

<template>
  <c-space direction="column">
    <c-button @click="strategy = strategy === 'fixed' ? 'absolute' : 'fixed'">
      切换定位：{{ strategy }}
    </c-button>
    <c-menu :strategy="strategy" :options="options" submenu-trigger="click">
      <c-button>打开三级菜单</c-button>
      <template #footer>
        <c-button variant="text" @click.stop="strategy = strategy === 'fixed' ? 'absolute' : 'fixed'">
          展开时切换：{{ strategy }}
        </c-button>
      </template>
    </c-menu>
    <small>所有层级继承同一定位策略；挂载容器仍由 popup-container 单独控制。</small>
  </c-space>
</template>
