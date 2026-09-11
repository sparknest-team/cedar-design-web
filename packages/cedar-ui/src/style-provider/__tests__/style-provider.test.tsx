import { createApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import StyleProvider, { styleProviderProps } from '../index'

const originalDocument = document

afterEach(() => {
  vi.stubGlobal('document', originalDocument)
  StyleProvider.setStyleVars(null)
  StyleProvider.setPropsDefaults({ tag: 'div', styleVars: () => ({}) })
})

test('uses one component entry for installation and configuration', () => {
  const app = createApp({}).use(StyleProvider)
  expect(app.component(StyleProvider.name ?? '')).toBe(StyleProvider)
  expect('Component' in StyleProvider).toBe(false)
})

test('renders slots, attributes and reactive local variables', async () => {
  const wrapper = mount(StyleProvider, {
    attrs: { id: 'local' },
    slots: { default: 'content' },
    props: { tag: 'section', styleVars: { '--c-test': '1px' } },
  })
  expect(wrapper.element.tagName).toBe('SECTION')
  expect(wrapper.attributes('id')).toBe('local')
  expect(wrapper.text()).toBe('content')
  expect(wrapper.element.style.getPropertyValue('--c-test')).toBe('1px')
  await wrapper.setProps({ styleVars: null })
  expect(wrapper.element.style.getPropertyValue('--c-test')).toBe('')
  wrapper.unmount()
})

test('the default setter supports objects, factories and null', () => {
  StyleProvider.setPropsDefaults({ tag: 'section', styleVars: { '--c-test': '2px' } })
  const first = styleProviderProps.styleVars.default()
  const second = styleProviderProps.styleVars.default()
  expect(first).toEqual(second)
  expect(first).not.toBe(second)
  const wrapper = mount(StyleProvider)
  expect(wrapper.element.tagName).toBe('SECTION')
  wrapper.unmount()
  StyleProvider.setPropsDefaults({ styleVars: () => ({ '--c-test': '3px' }) })
  expect(styleProviderProps.styleVars.default()).toEqual({ '--c-test': '3px' })
  StyleProvider.setPropsDefaults({ styleVars: null })
  expect(styleProviderProps.styleVars.default()).toBeNull()
})

test('global calls replace rather than accumulate and normalize theme names', () => {
  StyleProvider.setStyleVars({ cColorScheme: 'dark', '--c-first': '1px' })
  expect(document.documentElement.getAttribute('cedar-theme')).toBe('dark')
  StyleProvider.setStyleVars({ '--c-second': '2px' })
  const style = document.getElementById('cedar-style-vars')
  expect(style?.textContent).not.toContain('first')
  expect(style?.textContent).toContain('--c-second:2px')
  expect(document.querySelectorAll('#cedar-style-vars')).toHaveLength(1)
  StyleProvider.setStyleVars({ '--c-color-scheme': 'light' })
  expect(document.documentElement.hasAttribute('cedar-theme')).toBe(false)
  StyleProvider.setStyleVars(null)
  expect(document.getElementById('cedar-style-vars')).toBeNull()
})

test('omits baseline variables without losing overrides on repeated calls', () => {
  const baseline = document.createElement('style')
  baseline.textContent = ':root { --c-baseline: 1px; }'
  document.head.appendChild(baseline)
  try {
    for (let i = 0; i < 2; i++) {
      StyleProvider.setStyleVars({ '--c-baseline': '1px', '--c-other': '3px' })
      expect(document.getElementById('cedar-style-vars')?.textContent).not.toContain('baseline')
      expect(document.getElementById('cedar-style-vars')?.textContent).toContain('other:3px')
    }
    StyleProvider.setStyleVars({})
    expect(document.getElementById('cedar-style-vars')).toBeNull()
  } finally {
    baseline.remove()
  }
})

test('does not clear another library theme or style', () => {
  const other = document.createElement('style')
  other.id = 'maple-style-vars'
  document.head.appendChild(other)
  document.documentElement.setAttribute('maple-theme', 'dark')
  try {
    StyleProvider.setStyleVars({ '--c-color-scheme': 'dark' })
    StyleProvider.setStyleVars(null)
    expect(document.getElementById('maple-style-vars')).toBe(other)
    expect(document.documentElement.getAttribute('maple-theme')).toBe('dark')
  } finally {
    other.remove()
    document.documentElement.removeAttribute('maple-theme')
  }
})

test('SSR renders local styles and global calls are no-ops', async () => {
  vi.stubGlobal('document', undefined)
  expect(() => StyleProvider.setStyleVars({ '--c-test': '1px' })).not.toThrow()
  expect(() => StyleProvider.setStyleVars(null)).not.toThrow()
  const html = await renderToString(h(StyleProvider, { styleVars: { '--c-test': '1px' } }))
  expect(html).toContain('--c-test:1px')
})
