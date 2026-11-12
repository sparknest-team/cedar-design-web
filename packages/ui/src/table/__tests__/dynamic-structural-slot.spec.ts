import { mount } from '@vue/test-utils'
import { Comment, h, nextTick, ref } from 'vue'
import { expect, test } from 'vitest'
import Table from '..'
import CompiledFixture from './fixtures/dynamic-structural-slot.vue'
import ConditionalContent from './fixtures/conditional-structural-content.vue'

for (const slot of ['thead', 'tbody', 'tr', 'th', 'td'] as const) {
  for (const height of [undefined, 200]) {
    test(`an empty ${slot} structure slot retains the table at height ${height}`, () => {
      const columns = [{ title: 'Name', dataIndex: 'name' }]
      const data = [{ key: 'a', name: 'Ada' }]
      const wrapper = mount(Table, { props: { columns, data, pagination: false, height }, slots: { [slot]: () => h(Comment) } })
      try {
        expect(wrapper.text()).toContain('Name')
        expect(wrapper.text()).toContain('Ada')
        expect(wrapper.find('thead').exists()).toBe(true)
        expect(wrapper.find('tbody').exists()).toBe(true)
      } finally { wrapper.unmount() }
    })
  }
}

for (const kind of ['thead', 'tbody', 'tr', 'th', 'td'] as const) {
  for (const height of [undefined, 200]) {
    test(`compiled conditional ${kind} content falls back and updates at height ${height}`, async () => {
      const wrapper = mount(ConditionalContent, { props: { kind, height } })
      try {
        const check = () => { expect(wrapper.text()).toContain('Name'); expect(wrapper.text()).toContain('Ada') }
        check()
        await wrapper.get('#toggle-structure').trigger('click')
        expect(wrapper.find('[data-conditional-structure]').exists()).toBe(true)
        check()
        await wrapper.get('#toggle-structure').trigger('click')
        expect(wrapper.find('[data-conditional-structure]').exists()).toBe(false)
        check()
      } finally { wrapper.unmount() }
    })
  }
}

for (const slot of ['thead', 'tbody', 'tr', 'td'] as const) {
  for (const height of [undefined, 200]) {
    test(`dynamic ${slot} slot updates in table height ${height}`, async () => {
      const enabled = ref(false)
      const columns = [{ title: 'Name', dataIndex: 'name' }]
      const data = [{ key: 'a', name: 'Ada' }]
      const wrapper = mount({ render: () => h(Table, { columns, data, pagination: false, height },
        enabled.value ? { [slot]: () => h(slot, { 'data-dynamic-structure': slot }) } : {}) })
      try {
        const target = () => wrapper.find(`[data-dynamic-structure="${slot}"]`)
        expect(target().exists()).toBe(false)
        enabled.value = true
        await nextTick()
        expect(target().exists()).toBe(true)
        expect(wrapper.text()).toContain('Ada')
        enabled.value = false
        await nextTick()
        expect(target().exists()).toBe(false)
        expect(wrapper.text()).toContain('Ada')
      } finally { wrapper.unmount() }
    })
  }
}

for (const slot of ['thead', 'tbody', 'tr', 'td'] as const) {
  test(`replacing ${slot} preserves an existing cell input and draft`, async () => {
    const variant = ref(false)
    const columns = [{ title: 'Name', dataIndex: 'name', slotName: 'value' }]
    const data = [{ key: 'a', name: 'Ada' }]
    const alpha = () => h(slot, { 'data-kind': 'alpha' })
    const beta = () => h(slot, { 'data-kind': 'beta' })
    const value = () => h('input', { 'data-editor': '' })
    const wrapper = mount({ render: () => h(Table, { columns, data, pagination: false, height: 200 },
      { [slot]: variant.value ? beta : alpha, value }) }, { attachTo: document.body })
    try {
      const input = wrapper.get('input[data-editor]').element as HTMLInputElement
      input.value = 'Draft'
      input.focus()
      expect(wrapper.get(`[data-kind="alpha"]`).exists()).toBe(true)
      variant.value = true
      await nextTick()
      expect(wrapper.get(`[data-kind="beta"]`).exists()).toBe(true)
      expect(wrapper.get('input[data-editor]').element).toBe(input)
      expect(input.value).toBe('Draft')
      expect(document.activeElement).toBe(input)
    } finally { wrapper.unmount() }
  })
}


for (const kind of ['thead', 'tbody', 'tr', 'td'] as const) {
  test(`compiled conditional ${kind} slot updates and preserves draft`, async () => {
    const wrapper = mount(CompiledFixture, { attachTo: document.body, props: { kind } })
    try {
      const input = wrapper.get('input[data-editor]').element as HTMLInputElement
      input.value = 'Draft'
      input.focus()
      await wrapper.get('#toggle').trigger('click')
      expect(wrapper.find(`[data-dynamic="${kind}"]`).exists()).toBe(true)
      expect(wrapper.get('input[data-editor]').element).toBe(input)
      expect(input.value).toBe('Draft')
      expect(document.activeElement).toBe(input)
      await wrapper.get('#toggle').trigger('click')
      expect(wrapper.find(`[data-dynamic="${kind}"]`).exists()).toBe(false)
      expect(wrapper.get('input[data-editor]').element).toBe(input)
      expect(input.value).toBe('Draft')
    } finally { wrapper.unmount() }
  })
}
