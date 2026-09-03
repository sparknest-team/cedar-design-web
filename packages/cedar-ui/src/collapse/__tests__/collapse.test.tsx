import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Collapse, CollapseItem, collapseProps } from '../index'

describe('Collapse', () => {
  test('supports keyboard expansion with linked aria regions', async () => {
    const wrapper = mount(() => (
      <Collapse>
        <CollapseItem name="details" title="Details">
          Content
        </CollapseItem>
      </Collapse>
    ))

    const header = wrapper.get('[role="button"]')
    const panel = wrapper.get('[role="region"]')
    expect(Collapse.name).toBe('CCollapse')
    expect(Collapse.Item).toBe(CollapseItem)
    expect(collapseProps.expandIconPosition.default).toBe('left')
    expect(header.attributes('aria-controls')).toBe(panel.attributes('id'))
    expect(panel.attributes('aria-labelledby')).toBe(header.attributes('id'))

    await header.trigger('keydown', { key: 'Enter' })
    expect(header.attributes('aria-expanded')).toBe('true')
  })

  test('extra click does not toggle the panel', async () => {
    const wrapper = mount(() => (
      <Collapse>
        <CollapseItem name="details" title="Details">
          {{
            extra: () => <button class="extra-btn">extra</button>,
            default: () => 'Content',
          }}
        </CollapseItem>
      </Collapse>
    ))

    const header = wrapper.get('[role="button"]')
    await wrapper.get('.extra-btn').trigger('click')
    expect(header.attributes('aria-expanded')).toBe('false')
  })
})
