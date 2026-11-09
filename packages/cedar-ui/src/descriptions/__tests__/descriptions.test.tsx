import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { beforeAll, describe, test, expect, vi } from 'vitest'
import { Descriptions, DescriptionsItem, descriptionsProps } from '../index'

beforeAll(() => {
  vi.stubGlobal('matchMedia', vi.fn().mockImplementation(() => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })))
})

describe('Descriptions', () => {
  test('provides the original data index in every layout and after regrouping', async () => {
    const data = Array.from({ length: 5 }, (_, i) => ({ label: `L${i}`, value: `V${i}`, span: i === 1 ? 2 : 1 }))
    const wrapper = mount(Descriptions, {
      props: { data, column: 3 },
      slots: {
        label: ({ index }: { index: number }) => h('span', { class: 'label-index' }, String(index)),
        value: ({ index }: { index: number }) => h('span', { class: 'value-index' }, String(index)),
      },
    })
    for (const layout of ['horizontal', 'vertical', 'inline-horizontal', 'inline-vertical', 'inline-auto'] as const) {
      await wrapper.setProps({ layout, column: 2 })
      expect(wrapper.findAll('.label-index').map((el) => el.text())).toEqual(['0', '1', '2', '3', '4'])
      expect(wrapper.findAll('.value-index').map((el) => el.text())).toEqual(['0', '1', '2', '3', '4'])
      await wrapper.setProps({ column: 3 })
      expect(wrapper.findAll('.value-index').map((el) => el.text())).toEqual(['0', '1', '2', '3', '4'])
    }
    wrapper.unmount()
  })

  test('names the table from a title slot and normalizes invalid grid numbers', async () => {
    const warnings = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const wrapper = mount(Descriptions, {
      props: { column: { xs: 0 }, data: [{ label: 'Owner', value: 'Ada', span: -1 }] },
      slots: { title: () => 'Account details' },
    })
    const table = wrapper.get('table')
    const titleId = table.attributes('aria-labelledby')
    expect(titleId).toBeTruthy()
    expect(wrapper.get(`#${titleId}`).text()).toBe('Account details')
    expect(table.get('td').attributes('colspan')).toBe('5')
    expect(warnings).toHaveBeenCalled()
    await wrapper.setProps({ ariaLabel: 'Custom name' })
    expect(table.attributes('aria-label')).toBe('Custom name')
    expect(table.attributes('aria-labelledby')).toBeUndefined()
    expect(descriptionsProps.column.validator({ xs: 1, md: Infinity })).toBe(false)
    expect(descriptionsProps.column.validator(1.5)).toBe(false)
    wrapper.unmount()
    warnings.mockRestore()
  })

  test('render', async () => {
    const wrapper = mount(Descriptions, {
      props: {
        title: 'Account details',
        data: [{ label: 'Owner', value: 'Ada' }],
      },
    })
    await nextTick()
    expect(Descriptions.name).toBe('CDescriptions')
    expect(descriptionsProps.column.default).toBe(3)
    expect(wrapper.get('table').attributes('aria-label')).toBe('Account details')
    expect(wrapper.get('th').attributes('scope')).toBe('row')
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('renders DescriptionsItem children', async () => {
    const wrapper = mount({
      components: { Descriptions, DescriptionsItem },
      template: `
        <Descriptions>
          <DescriptionsItem label="Owner">Ada</DescriptionsItem>
          <DescriptionsItem label="Team">Research</DescriptionsItem>
        </Descriptions>
      `,
    })
    await nextTick()
    expect(wrapper.text()).toContain('Owner')
    expect(wrapper.text()).toContain('Ada')
    expect(wrapper.text()).toContain('Team')
    expect(wrapper.text()).toContain('Research')
  })

  test('inline-auto keeps items in one wrapping row', async () => {
    const wrapper = mount(Descriptions, {
      props: {
        layout: 'inline-auto',
        column: 3,
        data: [
          { label: 'Name:', value: 'Ada' },
          { label: 'City:', value: 'Beijing' },
          { label: 'Job:', value: 'Engineer' },
          { label: 'Team:', value: 'Research' },
        ],
      },
    })
    await nextTick()
    expect(wrapper.classes()).toContain('c-descriptions-layout-inline-auto')
    expect(wrapper.findAll('tr')).toHaveLength(1)
    expect(wrapper.findAll('.c-descriptions-item')).toHaveLength(4)
    expect(descriptionsProps.layout.validator('inline-auto')).toBe(true)
  })
})
