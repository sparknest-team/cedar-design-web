import { h, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, expect, test } from 'vitest'
import ConfigProvider from '..'
import SelectDropdown from '../../select/SelectDropdown.vue'
import CascaderPanel from '../../cascader/base-cascader-panel'
import TreeSelect from '../../tree-select/TreeSelect.vue'
const owners: ReturnType<typeof mount>[] = []
afterEach(() => owners.splice(0).forEach(w => w.unmount()))
for (const [name, Consumer, props] of [
  ['select', SelectDropdown, { empty: true }],
  ['cascader', CascaderPanel, { displayColumns: [], selectedPath: [], totalLevel: 0 }],
  ['tree-select', TreeSelect, { open: true, popupContainer: false }],
] as const) {
  test(`${name} renders all current inherited empty nodes and follows local slot overrides`, async () => {
    const local = ref(false)
    const w = mount({ render: () => h(ConfigProvider, {}, {
      empty: ({ component }) => [h('span', { 'data-global-empty': component }, 'Global'), h('span', { 'data-global-second': '' }, 'Second')],
      default: () => h(ConfigProvider, {}, { default: () => h(Consumer as any, props), ...(local.value ? { empty: () => h('span', { 'data-local-empty': '' }, 'Local') } : {}) }),
    }) })
    owners.push(w)
    await flushPromises()
    expect(w.find('[data-global-empty]').exists()).toBe(true)
    expect(w.findAll('[data-global-second]')).toHaveLength(1)
    local.value = true
    await flushPromises()
    expect(w.find('[data-local-empty]').exists()).toBe(true)
    expect(w.find('[data-global-empty]').exists()).toBe(false)
    local.value = false
    await flushPromises()
    expect(w.find('[data-global-empty]').exists()).toBe(true)
  })
}
