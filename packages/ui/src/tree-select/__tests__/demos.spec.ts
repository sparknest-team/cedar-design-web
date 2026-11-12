import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import TreeSelect from '..'
import Basic from '../__demos__/basic.vue'
import Multiple from '../__demos__/multiple.vue'
import Retain from '../__demos__/retain-input-value.vue'
import RetainEn from '../__demos__/en-US/retain-input-value.vue'
import OpenTarget from '../__demos__/open-trigger-target.vue'
import OpenTargetEn from '../__demos__/open-trigger-target.en-US.vue'
import RadioGroup from '../../radio/radio-group.vue'
import Switch from '../../switch'

const owners: ReturnType<typeof mount>[] = []
afterEach(() => {
  owners.splice(0).forEach((owner) => owner.unmount())
  vi.useRealTimers()
})
const Surface = { template: '<div><slot/><slot name="content"/></div>' }
function setup(demo: object) {
  const wrapper = mount(demo, { global: {
    components: { CTreeSelect: TreeSelect, CSpace: { template: '<div><slot/></div>' }, CRadioGroup: RadioGroup, CSwitch: Switch },
    stubs: { Trigger: Surface, CTrigger: Surface, teleport: true },
  } })
  owners.push(wrapper)
  return wrapper
}

test('basic demo expands a hierarchy, selects leaves and rejects disabled departments', async () => {
  const wrapper = setup(Basic)
  const host = wrapper.getComponent(TreeSelect)
  await host.get('input[role="combobox"]').trigger('keydown', { key: 'ArrowDown' })
  await flushPromises()
  expect(wrapper.findAll('.c-tree-select-option').map((row) => row.text())).toContain('设计部')
  await wrapper.findAll('.c-tree-select-option').find((row) => row.text() === '设计部')!.trigger('click')
  await flushPromises()
  expect(host.props('modelValue')).toBe('design')
  await host.get('input[role="combobox"]').trigger('keydown', { key: 'ArrowDown' })
  await wrapper.findAll('.c-tree-select-option').find((row) => row.text() === '归档部门（禁用）')!.trigger('click')
  await flushPromises()
  expect(host.props('modelValue')).toBe('design')
})

for (const [locale, demo] of [['zh-CN', OpenTarget], ['en-US', OpenTargetEn]] as const) {
  test(`${locale} icon-trigger demo supplies real data and resolves names`, async () => {
    const wrapper = setup(demo)
    const host = wrapper.getComponent(TreeSelect)
    expect(host.props('data')).toEqual([{ value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta' }])
    expect(host.attributes('options')).toBeUndefined()
    expect(wrapper.text()).toContain('Alpha')
    await host.get('input[role="combobox"]').trigger('keydown', { key: 'ArrowDown' })
    await flushPromises()
    await wrapper.findAll('.c-tree-select-option').find((row) => row.text() === 'Beta')!.trigger('click')
    await flushPromises()
    expect(host.props('modelValue')).toBe('b')
  })
}

for (const [locale, demo] of [['zh-CN', Retain], ['en-US', RetainEn]] as const) {
  test(`${locale} retain-input demo shows named candidates and preserves only the opted-in query`, async () => {
    vi.useFakeTimers()
    const wrapper = setup(demo)
    const hosts = wrapper.findAllComponents(TreeSelect)
    for (const [index, host] of hosts.entries()) {
      await host.get('input[role="combobox"]').trigger('keydown', { key: 'ArrowDown' })
      const input = host.get('input[role="combobox"]')
      await input.setValue('Al')
      vi.advanceTimersByTime(500)
      await flushPromises()
      const options = host.findAll('.c-tree-select-option')
      expect(options.map((row) => row.text())).toContain('Alice')
      expect(options.map((row) => row.text())).not.toContain('Bob')
      await options.find((row) => row.text() === 'Alice')!.trigger('click')
      await flushPromises()
      expect(host.props('modelValue')).toEqual(['alice'])
      expect(host.props('inputValue')).toBe(index === 0 ? '' : 'Al')
    }
  })
}

test('checkbox demo publishes leaf identities, shows a selected surface and keeps disabled rows unchanged', async () => {
  const wrapper = setup(Multiple)
  const host = wrapper.findAllComponents(TreeSelect)[0]
  await host.get('input[role="combobox"]').trigger('keydown', { key: 'ArrowDown' })
  await flushPromises()
  expect(wrapper.findAll('.c-tree-select-option-selected').map((row) => row.text())).toContain('设计部')
  await wrapper.findAll('.c-tree-select-option').find((row) => row.text() === '研发部')!.trigger('click')
  await flushPromises()
  expect(host.props('modelValue')).toEqual(['design', 'engineering'])
  await wrapper.findAll('.c-tree-select-option').find((row) => row.text() === '归档部门（禁用）')!.trigger('click')
  await flushPromises()
  expect(host.props('modelValue')).toEqual(['design', 'engineering'])
})
