<script setup lang="ts">
import { ref } from 'vue'
import type { NavMenuKey } from '..'

const value = ref<NavMenuKey | null>(null)
const activeItem = ref<NavMenuKey | null>(null)
const highlight = ref<boolean | undefined>(undefined)
const options = [{ key: 0, label: '数字零' }, { key: '', label: '空字符串' }, { key: 'account', label: '账户' }]
const highlightText = () => highlight.value === undefined ? '跟随业务 active' : String(highlight.value)
</script>

<template>
  <c-space direction="column">
    <c-space wrap>
      <c-button @click="highlight = undefined">跟随业务状态</c-button>
      <c-button @click="highlight = true">强制强调</c-button>
      <c-button @click="highlight = false">取消强调</c-button>
      <c-button @click="value = null">清空主值</c-button>
      <c-button @click="value = 'missing'">设为未匹配值</c-button>
    </c-space>
    <p>独立入口主值：{{ JSON.stringify(value) }}；highlight：{{ highlightText() }}。</p>
    <c-nav-menu mode="horizontal" class="entry-state-menu">
      <c-nav-menu-item v-model="value" :options="options" :highlight="highlight">
        <template #label="{ active, open }">独立入口 active={{ active }} / open={{ open }}</template>
      </c-nav-menu-item>
    </c-nav-menu>
    <p>具名当前入口：{{ activeItem ?? '无' }}。只打开面板不会改变 activeItem；选择叶子项后才切换。</p>
    <c-nav-menu v-model:active-item="activeItem" mode="horizontal" class="entry-state-menu">
      <c-nav-menu-item name="first" :options="options">
        <template #label="{ active, open }">入口一 active={{ active }} / open={{ open }}</template>
      </c-nav-menu-item>
      <c-nav-menu-item name="second" :options="options">
        <template #label="{ active, open }">入口二 active={{ active }} / open={{ open }}</template>
      </c-nav-menu-item>
    </c-nav-menu>
  </c-space>
</template>

<style scoped>
.entry-state-menu {
  width: 100%;
  min-width: 0;
}
</style>
