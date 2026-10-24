<script setup lang="ts">
import { ref } from 'vue'
import type { MenuRenderContext } from '@cedar-design/ui'

const selectedValue = ref('account')
const status = ({ active }: MenuRenderContext) => active ? '当前项已选中' : '当前项未选中'
const options = [
  { label: '设置', value: 'settings', extra: status, children: [
    { label: '账户', value: 'account', extra: status },
    { label: '通知', value: 'notifications', extra: status },
  ] },
  { label: '帮助', value: 'help', extra: status },
]
const helpLabel = ({ active }: MenuRenderContext) => active ? '帮助（已选中）' : '帮助（未选中，仅视觉强调）'
</script>

<template>
  <p>当前值：{{ selectedValue }}。默认选中“账户”；父分支“设置”处于选中路径，但 active=false。</p>
  <c-space wrap>
    <c-menu v-model="selectedValue" :options="options" :hide-on-select="false" submenu-trigger="click">
      <c-button>渲染函数中的 active</c-button>
    </c-menu>
    <c-menu v-model="selectedValue" :options="options" :hide-on-select="false" submenu-trigger="click">
      <c-button>作用域插槽中的 active</c-button>
      <template #option-extra="{ active }">
        <c-tag :status="active ? 'primary' : 'default'">{{ active ? '当前项已选中' : '当前项未选中' }}</c-tag>
      </template>
    </c-menu>
    <c-menu v-model="selectedValue" :hide-on-select="false">
      <c-button>自定义子项与 highlight</c-button>
      <template #content>
        <c-menu-option value="account">
          <template #default="{ active }">账户：{{ active ? '已选中' : '未选中' }}</template>
        </c-menu-option>
        <c-menu-option value="help" :label="helpLabel" highlight />
      </template>
    </c-menu>
  </c-space>
</template>
