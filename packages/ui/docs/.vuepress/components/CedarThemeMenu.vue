<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, shallowRef, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DocsNavbarTools } from '@sparknest/ui-doc-preview-vue'
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
    <DocsNavbarTools
      class="cedar-docs-tools"
      repository="https://github.com/sparknest-team/cedar-design-web"
      :language="english ? 'en-US' : 'zh-CN'"
      :theme="currentTheme"
      :themes="themeOptions"
      @theme-change="selectTheme"
      @language-change="selectLanguage"
    />
  </Teleport>
</template>
<style scoped>
.cedar-docs-tools { --docs-tools-text: var(--c-color-text-2); --docs-tools-bg: var(--c-color-bg-2); --docs-tools-border: var(--c-color-border-2); --docs-tools-hover: var(--c-color-fill-2); --docs-tools-brand: var(--c-sys-color-content-brand); }
</style>
