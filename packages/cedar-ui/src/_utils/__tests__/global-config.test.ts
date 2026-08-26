import { createApp, defineComponent, h } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ConfigProvider from '../../config-provider'
import { createNamespace, getComponentName, getPrefixCls, withInstall } from '../global-config'

const moduleNamespace = createNamespace('probe')
const NamespaceProbe = defineComponent({
  name: moduleNamespace.name,
  setup() {
    return () => h('div', { class: moduleNamespace.n(), 'data-token': moduleNamespace.cssVarPrefix })
  },
})

describe('getComponentName', () => {
  test('does not duplicate the default prefix', () => {
    expect(getComponentName(undefined, 'CButton')).toBe('CButton')
    expect(getComponentName(undefined, 'Button')).toBe('CButton')
  })

  test('replaces the default prefix with a configured prefix', () => {
    expect(getComponentName({ componentPrefix: 'Acme' }, 'CButton')).toBe('AcmeButton')
    expect(getComponentName({ componentPrefix: 'Acme' }, 'Button')).toBe('AcmeButton')
  })
})

describe('withInstall', () => {
  test('registers root and child components with Cedar options and runs setup', () => {
    const Root = defineComponent({ name: 'CRoot', render: () => null })
    const Child = defineComponent({ name: 'CChild', render: () => null })
    let setupCalled = false
    const plugin = withInstall(Root, undefined, {
      components: [Root, Child],
      setup: () => { setupCalled = true },
    })
    const app = createApp({})

    app.use(plugin, { componentPrefix: 'Acme' })

    expect(app.component('AcmeRoot')).toBe(Root)
    expect(app.component('AcmeChild')).toBe(Child)
    expect(setupCalled).toBe(true)
  })
})

describe('createNamespace', () => {
  test('is safe to create outside component setup', () => {
    expect(moduleNamespace.name).toBe('CProbe')
    expect(getPrefixCls('probe')).toBe('c-probe')
  })

  test('lazily resolves classes and tokens from ConfigProvider', async () => {
    const wrapper = mount(ConfigProvider, {
      props: { prefixCls: 'acme' },
      slots: { default: () => h(NamespaceProbe) },
    })
    const probe = wrapper.get('.acme-probe')

    expect(probe.attributes('data-token')).toBe('--acme-probe')

    await wrapper.setProps({ prefixCls: 'next' })
    expect(wrapper.get('.next-probe').attributes('data-token')).toBe('--next-probe')
  })
})
