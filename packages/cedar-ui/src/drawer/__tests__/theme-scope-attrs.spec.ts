import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import { expect, test } from 'vitest'
import ThemeProvider from '../../theme-provider/ThemeProvider.vue'
import Drawer from '../drawer.vue'

test('the teleported drawer keeps both inherited theme variables and caller styles', async () => {
  const wrapper = mount(ThemeProvider, {
    attachTo: document.body,
    props: { theme: 'dark', styleVars: { '--c-test-theme': 'teal' } },
    slots: {
      default: () => h(Drawer, { open: true, style: { '--business-color': 'coral' }, 'data-drawer-scope-test': '' }),
    },
  })
  try {
    await nextTick()
    const root = document.querySelector('[data-drawer-scope-test]') as HTMLElement
    expect(root.getAttribute('data-c-theme')).toBe('dark')
    expect(root.style.getPropertyValue('--c-test-theme')).toBe('teal')
    expect(root.style.getPropertyValue('--business-color')).toBe('coral')
  } finally {
    wrapper.unmount()
  }
})
