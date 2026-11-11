import { flushPromises, mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import Demo from '../__demos__/typed-config.vue'
import Table from '..'
import Button from '../../button'
import Space from '../../space'
vi.mock('@cedar-design/ui-vue', () => import('..'))
test('typed config demo binds reactive rows to the real Table without business casts', async () => {
  const owner = mount(Demo, { global: { components: { CTable: Table, CButton: Button, CSpace: Space }, stubs: { teleport: true } } })
  try {
    await flushPromises()
    expect(owner.findAll('tbody tr')).toHaveLength(2)
    expect(owner.get('tbody').text()).toContain('ALICE')
    expect(owner.get('tbody').text()).toContain('杭州')
    const sorter = owner.get('.c-table-cell-with-sorter')
    await sorter.trigger('click'); await flushPromises()
    expect(owner.findAll('tbody tr').map(row => row.findAll('td')[0].text())).toEqual(['BOB', 'ALICE'])
    await sorter.trigger('click'); await flushPromises()
    expect(owner.findAll('tbody tr').map(row => row.findAll('td')[0].text())).toEqual(['ALICE', 'BOB'])
    await owner.get('button').trigger('click')
    await flushPromises()
    expect(owner.findAll('tbody tr')).toHaveLength(3)
    expect(owner.get('tbody').text()).toContain('CAROL')
    expect(owner.get('button').attributes('disabled')).toBeDefined()
  } finally { owner.unmount() }
})
