import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import EditorPanel from '../../_components/field-presentation/EditorPanel.vue'
import TimeRange from '../../time-range'
import Time from '..'

const action = (panel, pattern) => panel.findAll('footer button').find(button => pattern.test(button.text()))
describe('Explicit empty time draft survives visible panel initialization', () => {
  for (const [name, Field, initial] of [['single', Time, '09:30'], ['range', TimeRange, ['09:30', '18:00']]]) {
    test(name + ' can clear to null and confirm once', async () => {
      const w = mount(Field, { props: { editMode: 'click', defaultValue: initial, emptyValue: null, clearable: true, format: 'HH:mm' } })
      try {
        await w.get('[aria-haspopup="dialog"]').trigger('click')
        await flushPromises()
        const panel = w.getComponent(EditorPanel)
        await action(panel, /清空|清除|Clear/).trigger('click')
        await flushPromises()
        expect(w.emitted('update:modelValue')).toBeUndefined()
        const confirm = action(panel, /确定|确认|Confirm|OK/)
        expect(confirm.attributes('disabled')).toBeUndefined()
        await confirm.trigger('click')
        await flushPromises()
        expect(w.emitted('update:modelValue')).toEqual([[null]])
        expect(w.emitted('change')).toHaveLength(1)
        expect(w.emitted('change')[0][0]).toBe(null)
        await w.get('[aria-haspopup="dialog"]').trigger('click')
        await flushPromises()
        await w.getComponent(EditorPanel).findAll('button').find(button => button.text() === '×').trigger('click')
        await flushPromises()
        expect(w.emitted('update:modelValue')).toEqual([[null]])
        await w.get('[aria-haspopup="dialog"]').trigger('click')
        await flushPromises()
        const emptyPanel = w.getComponent(EditorPanel)
        await action(emptyPanel, /清空|清除|Clear/).trigger('click')
        await flushPromises()
        const unchangedConfirm = action(emptyPanel, /确定|确认|Confirm|OK/)
        expect(unchangedConfirm.attributes('disabled')).toBeUndefined()
        await unchangedConfirm.trigger('click')
        await flushPromises()
        expect(w.get('[aria-haspopup="dialog"]').attributes('aria-expanded')).toBe('false')
        expect(w.emitted('update:modelValue')).toEqual([[null]])
      } finally { w.unmount() }
    })
  }
})
