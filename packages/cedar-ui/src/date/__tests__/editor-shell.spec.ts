import { defineComponent } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import DateInput from '../index'
import DatePicker from '../DatePicker.vue'
import DatePanel from '../DatePanel.vue'
import TimePanel from '../../time/picker/Panel.vue'
import EditorPanel from '../../_components/field-presentation/EditorPanel.vue'

const Surface = defineComponent({ template: '<div><slot /><slot name="content" /></div>' })
const Content = defineComponent({ template: '<div />' })
const wrappers: ReturnType<typeof mount>[] = []
afterEach(() => wrappers.splice(0).forEach(wrapper => wrapper.unmount()))

describe('date editor action ownership', () => {
  it('keeps native date controls inside the compact editor; Now changes only the draft until host confirmation', async () => {
    const wrapper = mount(DateInput, {
      props: { modelValue: '2025-01-15 09:30:00', showTime: true, datePickerProps: { showNowButton: true }, presentation: 'dblclick' },
      global: { stubs: { Dialog: Surface, DatePanelContent: Content } },
    })
    wrappers.push(wrapper)
    await wrapper.get('[aria-haspopup=dialog]').trigger('click')
    await flushPromises()
    expect(wrapper.findComponent(EditorPanel).exists()).toBe(false)
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    await wrapper.get('[aria-haspopup=dialog]').trigger('dblclick')
    await flushPromises()
    const panel = wrapper.getComponent(EditorPanel)
    expect(panel.find('[role=heading]').exists()).toBe(false)
    expect(panel.findAll('button[aria-label="关闭"]')).toHaveLength(1)
    expect(panel.findAll('footer button').map(button => button.text())).toEqual(['确定', '×'])
    await panel.get('input').trigger('click')
    await flushPromises()
    const native = wrapper.getComponent(DatePanel)
    expect(native.findAll('button').filter(button => button.text() === '确定')).toHaveLength(0)
    await native.findAll('button').find(button => button.text() === '此刻')!.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    const candidate = wrapper.emitted('select')?.[0][0]
    expect(candidate).toBeTruthy()
    await panel.findAll('footer button')[0].trigger('click')
    await flushPromises()
    expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual(candidate)
  })

  it('keeps the independent panel footer and replaces it when an actions slot is supplied', () => {
    const wrapper = mount(DatePicker, {
      props: { defaultValue: '2025-01-15', disableConfirm: false },
      global: { stubs: { DatePanelContent: Content } },
      slots: { actions: '<button>自定义操作</button>' },
    })
    wrappers.push(wrapper)
    expect(wrapper.findAll('button').map(button => button.text())).toEqual(['自定义操作'])
  })
  it('enables the embedded time columns and forwards a chosen hour', async () => {
    const wrapper = mount(DatePicker, { props: { defaultValue: '2025-01-15 09:30:00', showTime: true, disableConfirm: false } })
    wrappers.push(wrapper)
    expect(wrapper.getComponent(TimePanel).props('visible')).toBe(true)
    const hour = wrapper.findAll('.c-timepicker-column')[0].findAll('li').find(item => item.text() === '10')!
    await hour.trigger('click')
    const selections = wrapper.emitted('select')!
    expect(String(selections[selections.length - 1][0])).toContain('10:30')
  })

})
