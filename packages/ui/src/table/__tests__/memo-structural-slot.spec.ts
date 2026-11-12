import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Fixture from './fixtures/memo-structural-slot.vue'
import LoopFixture from './fixtures/memo-loop-structural-slot.vue'

for (const [mode, component] of [['root', Fixture], ['loop', LoopFixture]] as const) {
for (const kind of ['thead', 'tbody', 'tr', 'th', 'td'] as const) {
  for (const height of [undefined, 200]) {
    test(`compiled ${kind} ${mode} memo updates in table height ${height}`, async () => {
      const wrapper = mount(component, { props: { kind, height } })
      try {
        const first = wrapper.find('[data-version="1"]')
        expect(first.exists()).toBe(true)
        expect(wrapper.text()).toContain('Name')
        expect(wrapper.text()).toContain('Ada')
        await wrapper.get('#advance').trigger('click')
        expect(wrapper.find('[data-version="2"]').exists()).toBe(true)
        expect(wrapper.text()).toContain('Name')
        expect(wrapper.text()).toContain('Ada')
      } finally { wrapper.unmount() }
    })
  }
}
}
