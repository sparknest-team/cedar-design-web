<script setup lang="ts">
import { computed } from 'vue'
import CedarPresentation from '../../../src/form/__demos__/platform-presentation.vue'
const mobileSource = computed(() => {
  const origin = typeof window !== 'undefined' && /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname) ? 'http://localhost:8080' : 'https://maple.show'
  return `${origin}/mobile.html#/zh-CN/showcaseCrossPlatform?language=zh-CN`
})
</script>
<template>
  <div class="platform-comparison">
    <section class="platform-comparison__desktop" aria-label="Cedar 桌面字段">
      <h3>Cedar：当前位置编辑</h3><p>选择、日期和时间字段使用 inline。</p>
      <CedarPresentation />
      <a href="/components/form/#桌面与移动的同场景展示">查看桌面示例与源码</a>
    </section>
    <section class="platform-comparison__mobile" aria-label="Maple 手机预览">
      <h3>Maple：Popup 编辑</h3><p>在手机预览中点击部门、日期或时间。</p>
      <iframe :src="mobileSource" title="Maple Popup 字段与已提交模型" loading="lazy" />
      <a :href="mobileSource" target="_blank" rel="noopener noreferrer">单独打开移动端示例 ↗</a>
    </section>
  </div>
</template>
<style scoped>
.platform-comparison { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,346px); gap: 24px; align-items: start; }
.platform-comparison section { min-width: 0; }
.platform-comparison h3 { margin: 0 0 12px; }
.platform-comparison iframe { display: block; width: 100%; height: 820px; border: 1px solid var(--c-color-border-2); border-radius: 12px; background: var(--c-color-bg-1); }
@media(max-width: 1000px) { .platform-comparison { grid-template-columns: minmax(0,1fr); } .platform-comparison__mobile { width: min(100%, 390px); } }
</style>
