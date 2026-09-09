<script setup lang="ts">
import { computed, ref } from 'vue'
import type { NavMenuKey } from '../types'
const options = [
  { key: 0, label: '全部分类' },
  { key: 'design', label: '设计' },
  { key: 'development', label: '开发' },
]
const automatic = ref<NavMenuKey | null>(null)
const fixed = ref<NavMenuKey | null>(null)
const manual = ref<NavMenuKey | null>(null)
// 选中值与显示标题分开保存；选择菜单不会修改 manualLabel。
const manualLabel = ref('选择分类')
const appliedValue = ref<NavMenuKey | null>(null)
const selectedLabel = computed(() => options.find(option => option.key === manual.value)?.label)
const pending = computed(() => manual.value !== appliedValue.value)
function applyLabel() {
  if (!selectedLabel.value) return
  // 只有点击“应用标题”才修改 label 插槽绑定的文字。
  manualLabel.value = `当前：${selectedLabel.value}`
  appliedValue.value = manual.value
}
function reset() {
  manual.value = appliedValue.value = null
  manualLabel.value = '选择分类'
}
</script>
<template>
  <div class="item-label-demo">
    <section>
      <h4>自动更新：选完立即改变标题</h4>
      <c-nav-menu mode="horizontal">
        <c-nav-menu-item v-model="automatic" label="选择分类" :options="options" />
      </c-nav-menu>
    </section>
    <section>
      <h4>固定标题：选完始终显示“高级筛选”</h4>
      <c-nav-menu mode="horizontal">
        <c-nav-menu-item v-model="fixed" :options="options">
          <template #label>高级筛选</template>
        </c-nav-menu-item>
      </c-nav-menu>
      <p aria-live="polite">已选分类：{{ options.find(option => option.key === fixed)?.label ?? '未选择' }}</p>
    </section>
    <section>
      <h4>手动更新：选完后，再点击按钮改变标题</h4>
      <ol>
        <li>点击下面的菜单，选择“设计”。入口标题暂时保持不变。</li>
        <li>点击“应用标题”，入口才会变成“当前：设计”。</li>
      </ol>
      <c-nav-menu mode="horizontal">
        <c-nav-menu-item v-model="manual" :options="options">
          <template #label>{{ manualLabel }}</template>
        </c-nav-menu-item>
      </c-nav-menu>
      <div class="item-label-demo__status" aria-live="polite">
        <p>已选分类：<strong>{{ selectedLabel ?? '未选择' }}</strong></p>
        <p>入口当前标题：<strong>{{ manualLabel }}</strong></p>
        <p v-if="pending">待应用：选中值已经改变，入口标题还没有更新。</p>
        <p v-else-if="manual !== null">已应用：入口标题已更新为“{{ manualLabel }}”。可以再选一个分类比较。</p>
        <p v-else>请先选择分类，再应用标题。</p>
      </div>
      <c-space>
        <c-button :disabled="!pending" @click="applyLabel">{{ pending ? `应用标题：当前：${selectedLabel}` : '应用标题' }}</c-button>
        <c-button @click="reset">重置手动示例</c-button>
      </c-space>
      <p>实现方式：v-model 保存选中值，label 插槽显示独立的 manualLabel；按钮负责修改 manualLabel。</p>
    </section>
  </div>
</template>
<style scoped>
.item-label-demo { display: grid; gap: 24px; }
.item-label-demo h4 { margin: 0 0 12px; }
.item-label-demo__status { margin: 12px 0; }
</style>
