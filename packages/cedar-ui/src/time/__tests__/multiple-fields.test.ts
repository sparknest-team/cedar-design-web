import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Time from '../Time.vue'
import TimeRange from '../../time-range/TimeRange.vue'

describe('temporal field popup switching', () => {
  it('closes earlier Time and TimeRange popups without committing values', async () => {
    const wrapper = mount({ render: () => h('div', [h(Time), h(Time), h(TimeRange)]) }, { attachTo: document.body })
    try {
      const inputs = wrapper.findAll('input')
      const fields = [...wrapper.findAllComponents(Time), wrapper.findComponent(TimeRange)]
      for (let index = 0; index < fields.length; index++) {
        await inputs[index].trigger('click')
        await nextTick()
        await nextTick()
        expect(fields[index].emitted('update:open')).toEqual([[true]])
        if (index) expect(fields[index - 1].emitted('update:open')).toEqual([[true], [false]])
        expect(fields[index].emitted('change')).toBeUndefined()
      }
    } finally { wrapper.unmount() }
  })
})
