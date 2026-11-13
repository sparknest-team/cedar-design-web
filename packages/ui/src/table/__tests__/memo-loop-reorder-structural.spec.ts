import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Fixture from './fixtures/memo-loop-reorder-structural.vue'

for (const kind of ['thead', 'tbody', 'tr', 'th', 'td'] as const) {
  for (const height of [undefined, 200]) {
    test(`${kind} follows the first keyed loop node through reorder, update and removal at height ${height}`, async () => {
      const wrapper = mount(Fixture, { props: { kind, height } })
      try {
        const check = (id: string, version: string) => {
          const nodes = wrapper.findAll('[data-marker]')
          expect(nodes.length).toBeGreaterThan(0)
          expect(nodes.every(node => node.attributes('data-marker') === id && node.attributes('data-version') === version)).toBe(true)
          expect(wrapper.text()).toContain('Name')
          expect(wrapper.text()).toContain('Ada')
        }
        check('alpha', '1')
        await wrapper.get('#reverse').trigger('click')
        check('beta', '1')
        await wrapper.get('#advance').trigger('click')
        check('beta', '2')
        await wrapper.get('#remove').trigger('click')
        check('alpha', '1')
        await wrapper.get('#remove').trigger('click')
        expect(wrapper.findAll('[data-marker]')).toHaveLength(0)
        expect(wrapper.text()).toContain('Ada')
        await wrapper.get('#add').trigger('click')
        check('gamma', '3')
      } finally {
        wrapper.unmount()
      }
    })
  }
}
