<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import { IconChevronDown } from '@cedar-design/icons-vue/icon-chevron-down'
import { IconPaletteFill } from '@cedar-design/icons-vue/icon-palette-fill'
import { getDocsTheme, setDocsTheme, type CedarDocsTheme } from '../theme-config'

const open = ref(false)
const navbarTarget = shallowRef<Element | null>(null)
const isEnglish = ref(false)
const currentTheme = ref<CedarDocsTheme>('lightTheme')

const themes: Array<{ value: CedarDocsTheme; zh: string; en: string }> = [
  { value: 'lightTheme', zh: '默认亮色', en: 'Default Light' },
  { value: 'darkTheme', zh: '默认暗色', en: 'Default Dark' },
]

function closeMenu(event: MouseEvent) {
  if (!(event.target as Element | null)?.closest('.cedar-docs-theme')) open.value = false
}

function selectTheme(theme: CedarDocsTheme) {
  currentTheme.value = theme
  setDocsTheme(theme)
  open.value = false
}

function syncTheme(event: Event) {
  currentTheme.value = (event as CustomEvent<CedarDocsTheme>).detail
}

let navbarObserver: MutationObserver | undefined

function resolveNavbarTarget() {
  navbarTarget.value = document.querySelector('.vp-navbar-end')
  if (navbarTarget.value) navbarObserver?.disconnect()
}

onMounted(() => {
  currentTheme.value = getDocsTheme()
  isEnglish.value = document.documentElement.lang.startsWith('en')
  resolveNavbarTarget()
  if (!navbarTarget.value) {
    navbarObserver = new MutationObserver(resolveNavbarTarget)
    navbarObserver.observe(document.body, { childList: true, subtree: true })
  }
  document.addEventListener('click', closeMenu)
  window.addEventListener('cedar-docs-theme-change', syncTheme)
})

onBeforeUnmount(() => {
  navbarObserver?.disconnect()
  document.removeEventListener('click', closeMenu)
  window.removeEventListener('cedar-docs-theme-change', syncTheme)
})
</script>

<template>
  <Teleport v-if="navbarTarget" :to="navbarTarget">
    <div class="cedar-docs-theme vp-nav-item">
      <button
        class="cedar-docs-theme__trigger"
        type="button"
        aria-label="切换主题"
        :aria-expanded="open"
        @click.stop="open = !open"
      >
        <IconPaletteFill class="cedar-docs-theme__palette" aria-hidden="true" />
        <IconChevronDown class="cedar-docs-theme__arrow" aria-hidden="true" />
      </button>
      <div v-if="open" class="cedar-docs-theme__menu" role="menu">
        <button
          v-for="theme in themes"
          :key="theme.value"
          type="button"
          class="cedar-docs-theme__item"
          :class="{ 'cedar-docs-theme__item--active': currentTheme === theme.value }"
          :data-theme-value="theme.value"
          role="menuitemradio"
          :aria-checked="currentTheme === theme.value"
          @click.stop="selectTheme(theme.value)"
        >
          {{ isEnglish ? theme.en : theme.zh }}
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.cedar-docs-theme {
  position: relative;
  overflow: visible;
}

.cedar-docs-theme__trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 42px;
  height: 40px;
  padding: 0 8px;
  color: var(--c-color-text-2);
  font: inherit;
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
}

.cedar-docs-theme__trigger:hover,
.cedar-docs-theme__trigger:focus-visible {
  color: var(--c-color-primary);
  background: var(--c-color-fill-2);
}

.cedar-docs-theme__arrow {
  width: 16px;
  height: 16px;
}

.cedar-docs-theme__palette {
  width: 28px;
  height: 28px;
}

.cedar-docs-theme__menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 20;
  width: 148px;
  padding: 6px;
  display: grid;
  grid-template-rows: repeat(2, minmax(40px, auto));
  gap: 2px;
  height: auto;
  max-height: none;
  overflow: visible;
  background: var(--c-color-bg-2);
  border: 1px solid var(--c-color-border-2);
  border-radius: 8px;
  box-shadow: 0 8px 24px var(--c-shadow-key-umbra-opacity);
}

.cedar-docs-theme__item {
  display: block;
  width: 100%;
  min-height: 40px;
  padding: 0 12px;
  color: var(--c-color-text-2);
  font: inherit;
  text-align: left;
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
}

.cedar-docs-theme__item:hover,
.cedar-docs-theme__item:focus-visible {
  background: var(--c-color-fill-2);
}

.cedar-docs-theme__item--active {
  color: var(--c-color-primary);
  background: var(--c-color-primary-light-1);
}

@media (max-width: 719px) {
  .cedar-docs-theme {
    display: none;
  }
}
</style>
