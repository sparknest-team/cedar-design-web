import Dialog from '../../dialog'
import Overlay from '../../overlay'
import { mount } from '@vue/test-utils'
import { h, nextTick, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { afterEach, expect, it } from 'vitest'
import ThemeProvider from '../ThemeProvider.vue'
import Trigger from '../../trigger'
import type { ThemeProviderTheme } from '../props'

const owners: Array<ReturnType<typeof mount>> = []
afterEach(() => { owners.splice(0).forEach(owner => owner.unmount()); document.querySelectorAll('[data-test-host]').forEach(host => host.remove()) })

it('inherits theme and overrides through nested providers and real body Teleports', async () => {
  const theme = ref<ThemeProviderTheme | undefined>('dark')
  const innerTheme = ref<ThemeProviderTheme>()
  const vars = ref<Record<string, string> | null>({ '--c-test-color': 'coral' })
  const owner = mount({ setup: () => () => h(ThemeProvider, { theme: theme.value, styleVars: { '--c-parent': 'teal' } }, () =>
    h(ThemeProvider, { theme: innerTheme.value, styleVars: vars.value }, () =>
      h(Trigger, { open: true, animationName: '', duration: 0 }, { default: () => h('button', 'open'), content: () => h('span', { 'data-theme-content': '' }, 'popup') }))) }, { attachTo: document.body })
  owners.push(owner)
  await nextTick()
  const popup = () => document.querySelector('[data-theme-content]')!.closest('[data-c-theme]') as HTMLElement
  expect(popup().getAttribute('data-c-theme')).toBe('dark')
  expect(popup().style.getPropertyValue('--c-test-color')).toBe('coral')
  expect(popup().style.getPropertyValue('--c-parent')).toBe('teal')
  expect(document.documentElement.getAttribute('cedar-theme')).toBeNull()
  innerTheme.value = 'light'
  await nextTick()
  expect(popup().getAttribute('data-c-theme')).toBe('light')
  theme.value = 'light'
  innerTheme.value = undefined
  vars.value = null
  await nextTick()
  expect(popup().getAttribute('data-c-theme')).toBe('light')
  expect(popup().style.getPropertyValue('--c-test-color')).toBe('')
  expect(popup().style.getPropertyValue('--c-parent')).toBe('teal')
  const boundary = popup()
  theme.value = undefined
  await nextTick()
  expect(boundary.hasAttribute('data-c-theme')).toBe(false)
  owner.unmount(); owners.pop()
  expect(document.querySelector('[data-theme-content]')).toBeNull()
})

it.each([false, 'custom'])('keeps theme when popup-container is %s', async destination => {
  const host = document.createElement('div'); host.dataset.testHost = ''; document.body.append(host)
  const owner = mount(ThemeProvider, { props: { theme: 'dark' }, slots: { default: () => h(Trigger, { open: true, popupContainer: destination === false ? false : host }, { default: () => h('button'), content: () => h('span', { 'data-theme-content': '' }, 'popup') }) }, attachTo: document.body })
  owners.push(owner)
  await nextTick()
  const content = document.querySelector('[data-theme-content]')!
  expect(content.closest('[data-c-theme]')?.getAttribute('data-c-theme')).toBe('dark')
  expect(destination === false ? owner.element.contains(content) : host.contains(content)).toBe(true)
})

it('renders an explicit local boundary for SSR without changing global theme', async () => {
  const html = await renderToString(h(ThemeProvider, { theme: 'dark' }, () => h(ThemeProvider, { theme: 'light' }, () => 'nested')))
  expect(html).toContain('data-c-theme="dark"')
  expect(html).toContain('data-c-theme="light"')
  expect(document.documentElement.getAttribute('cedar-theme')).toBeNull()
})

it.each([['Dialog', Dialog], ['Overlay', Overlay]])('themes the actual %s teleport root including its overlay', async (_name, Component) => {
  const owner = mount(ThemeProvider, { props: { theme: 'dark', styleVars: { '--c-surface-test': 'teal' } }, slots: { default: () => h(Component, { open: true }, { default: () => h('span', { 'data-modal-theme-content': '' }, 'dialog content') }) }, attachTo: document.body })
  owners.push(owner)
  await nextTick()
  const content = document.querySelector('[data-modal-theme-content]')!
  const boundary = content.closest('[data-c-theme]') as HTMLElement
  expect(boundary?.getAttribute('data-c-theme')).toBe('dark')
  expect(boundary.style.getPropertyValue('--c-surface-test')).toBe('teal')
  await owner.setProps({ theme: 'light' })
  expect(boundary.getAttribute('data-c-theme')).toBe('light')
})

it('replaces an inherited preset at an explicit mode boundary while preserving user overrides', async () => {
  const owner = mount(ThemeProvider, { props: { theme: { '--c-color-scheme': 'dark', '--c-color-bg-2': '#123456' }, styleVars: { '--c-custom': 'teal' } }, slots: { default: () => h(ThemeProvider, { theme: 'light' }, () => h(Trigger, { open: true }, { default: () => h('button'), content: () => h('span', { 'data-preset-content': '' }) })) }, attachTo: document.body })
  owners.push(owner)
  await nextTick()
  const popup = document.querySelector('[data-preset-content]')!.closest('[data-c-theme]') as HTMLElement
  expect(popup.getAttribute('data-c-theme')).toBe('light')
  expect(popup.style.getPropertyValue('--c-color-bg-2')).toBe('')
  expect(popup.style.getPropertyValue('--c-custom')).toBe('teal')
})
