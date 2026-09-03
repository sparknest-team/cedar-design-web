import { nextTick } from 'vue'
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
