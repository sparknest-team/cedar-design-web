<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, shallowRef, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DirectionToggle, DocsSelect, DocsSourceIcon } from '../../../../../../design-ui/packages/ui-doc-preview/src/index'
import { getDocsTheme, setDocsTheme, type CedarDocsTheme } from '../theme-config'
const route = useRoute()
const router = useRouter()
const navbarTarget = shallowRef<Element | null>(null)
const currentTheme = ref<CedarDocsTheme>('lightTheme')
const english = computed(() => route.path.startsWith('/en/'))
const themeOptions = computed(() => [
  { value: 'lightTheme', label: english.value ? 'Default Light' : '默认亮色' },
  { value: 'darkTheme', label: english.value ? 'Default Dark' : '默认暗色' },
])
function selectTheme(value: string) { if (value === 'lightTheme' || value === 'darkTheme') { currentTheme.value = value; setDocsTheme(value) } }
function selectLanguage(value: string) {
  const path = route.path.replace(/^\/en(?=\/)/, '')
  router.push({ path: value === 'en-US' ? `/en${path}` : path, query: route.query, hash: route.hash })
}
function syncTheme(event: Event) { currentTheme.value = (event as CustomEvent<CedarDocsTheme>).detail }
let observer: MutationObserver | undefined
function resolveTarget() { navbarTarget.value = document.querySelector('.vp-navbar-end'); if (navbarTarget.value) observer?.disconnect() }
onMounted(() => {
  currentTheme.value = getDocsTheme()
  resolveTarget()
  if (!navbarTarget.value) { observer = new MutationObserver(resolveTarget); observer.observe(document.body, { childList: true, subtree: true }) }
  window.addEventListener('cedar-docs-theme-change', syncTheme)
})
onBeforeUnmount(() => { observer?.disconnect(); window.removeEventListener('cedar-docs-theme-change', syncTheme) })
</script>
<template>
  <Teleport v-if="navbarTarget" :to="navbarTarget">
    <div class="cedar-docs-tools">
      <DirectionToggle />
      <a href="https://github.com/sparknest-team/cedar-design-web" target="_blank" rel="noopener noreferrer" :aria-label="english ? 'Source on GitHub' : 'GitHub 源码'" :title="english ? 'Source on GitHub' : 'GitHub 源码'" class="cedar-docs-source">
        <DocsSourceIcon />
      </a>
      <DocsSelect icon="theme" :label="english ? 'Theme' : '主题'" :value="currentTheme" :options="themeOptions" @change="selectTheme" />
      <DocsSelect icon="language" :label="english ? 'Language' : '语言'" :value="english ? 'en-US' : 'zh-CN'" :options="[{ value: 'zh-CN', label: '中文' }, { value: 'en-US', label: 'English' }]" @change="selectLanguage" />
    </div>
  </Teleport>
</template>
<style scoped>
.cedar-docs-tools { display: flex; align-items: center; gap: 4px; --docs-tools-text: var(--c-color-text-2); --docs-tools-bg: var(--c-color-bg-2); --docs-tools-border: var(--c-color-border-2); --docs-tools-hover: var(--c-color-fill-2); --docs-tools-brand: var(--c-sys-color-content-brand); }
.cedar-docs-source { display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; color: inherit; border-radius: 4px; }
.cedar-docs-source:hover { background: var(--docs-tools-hover); }
</style>
