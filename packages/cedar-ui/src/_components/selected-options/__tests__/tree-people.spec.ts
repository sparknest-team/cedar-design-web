import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PeopleSelect from '../../../people-select'
import SelectMenu from '../../../select/SelectMenu'
import TreeSelect from '../../../tree-select'

const Surface = { template: '<div><slot/><slot name="content"/></div>' }
const global = {
  stubs: {
    Trigger: Surface,
    CTrigger: Surface,
    Dialog: Surface,
    CDialog: Surface,
    teleport: true,
  },
}
for (const editMode of ['click'] as const) {
  describe(`${editMode} option editors`, () => {
    it('reuses the tree field and its removable tags before confirming', async () => {
      const wrapper = mount(TreeSelect, {
        props: {
          editMode,
          defaultOpen: true,
          multiple: true,
          treeCheckable: true,
          modelValue: ['shanghai'],
          filterable: true,
          data: [
            {
              value: 'east',
              label: '华东',
              children: [
                { value: 'shanghai', label: '上海' },
                { value: 'hangzhou', label: '杭州' },
              ],
            },
          ],
          treeProps: { defaultExpandAll: true },
        },
        global,
      })
      try {
        await wrapper.get('[aria-haspopup=dialog]').trigger('click')
        await flushPromises()
        const editor = wrapper.get('.c-field-presentation__body')
        expect(editor.find('.c-tree-select-trigger').exists()).toBe(true)
        expect(editor.findAll('input:not([type=checkbox])')).toHaveLength(1)
        await editor.get('[role="button"][aria-label="IconClose"]').trigger('click')
        await flushPromises()
        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
        await wrapper.get('.c-field-presentation__footer').findAll('button').find(button => ['确定', '确认'].includes(button.text()))!.trigger('click')
        await flushPromises()
        expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual([])
      } finally {
        wrapper.unmount()
      }
    })
    it('loads and selects people through the original field before confirming', async () => {
      const options = [
        { value: 'lin', label: '林晓' },
        { value: 'chen', label: '陈晨' },
      ]
      const wrapper = mount(PeopleSelect, {
        props: { editMode, defaultOpen: true, options },
        global,
      })
      try {
        await wrapper.get('[aria-haspopup=dialog]').trigger('click')
        await flushPromises()
        await flushPromises()
        const editor = wrapper.get('.c-field-presentation__body')
        expect(editor.find('.c-select-trigger').exists()).toBe(false)
        expect(editor.findAll('input')).toHaveLength(1)
        wrapper.getComponent(SelectMenu).props('controller').handleOpenChange(true)
        await flushPromises()
        await editor
          .findAll('[role=option]')
          .find((option) => option.text().includes('陈晨'))!
          .trigger('click')
        await flushPromises()
        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
        await wrapper.get('.c-field-presentation__footer').findAll('button').find(button => ['确定', '确认'].includes(button.text()))!.trigger('click')
        await flushPromises()
        expect(wrapper.emitted('update:modelValue')?.[0][0]).toBe('chen')
      } finally {
        wrapper.unmount()
      }
    })
  })
}

it('replaces externally supplied people candidates without resetting the model', async () => {
  const wrapper = mount(PeopleSelect, {
    props: { editMode: 'click', options: [{ value: 'lin', label: '林晓' }] },
    global,
  })
  try {
    await wrapper.get('[aria-haspopup=dialog]').trigger('click')
    await flushPromises()
    await wrapper.setProps({ options: [{ value: 'chen', label: '陈晨' }] })
    await flushPromises()
    expect(wrapper.get('[role=option]').text()).toContain('陈晨')
    expect(wrapper.findAll('[role=option]')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  } finally {
    wrapper.unmount()
  }
})

it('clears removable tree selections while retaining disabled selections', async () => {
  const wrapper = mount(TreeSelect, {
    props: {
      editMode: 'click',
      multiple: true,
      clearable: true,
      modelValue: ['open', 'locked'],
      data: [
        { value: 'open', label: '可修改' },
        { value: 'locked', label: '不可修改', disabled: true },
      ],
    },
    global,
  })
  try {
    await wrapper.get('[aria-haspopup=dialog]').trigger('click')
    await flushPromises()
    wrapper.getComponent((TreeSelect as any).__fieldControl).vm.onInnerClear()
    await flushPromises()
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    await wrapper.get('.c-field-presentation__footer').findAll('button').find(button => ['确定', '确认'].includes(button.text()))!.trigger('click')
    await flushPromises()
    expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual(['locked'])
  } finally {
    wrapper.unmount()
  }
})
