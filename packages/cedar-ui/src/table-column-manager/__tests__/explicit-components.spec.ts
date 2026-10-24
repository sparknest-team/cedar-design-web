import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import { expect, test, vi } from 'vitest'
import TableColumnManager from '../TableColumnManager.vue'
import { TableColumnManagerContextKey, type TableColumnManagerContext } from '../use-table-column-manager'
import Dialog from '../../dialog'
import { CheckboxGroup } from '../../checkbox'
import Input from '../../input'

test('insert and edit dialogs work without globally registered components or docs auto-imports', async () => {
  const context: TableColumnManagerContext = {
    headerActions: [], openInsert: vi.fn(), openEdit: vi.fn(), freezeColumn: vi.fn(), removeColumn: vi.fn(),
    insertVisible: ref(true), insertSide: ref('left'),
    insertableItems: ref([{ dataIndex: 'age', title: '年龄' }]), insertSelected: ref([]), handleInsertConfirm: vi.fn(),
    editVisible: ref(false), editGroupTitle: ref(''), editColumnTitle: ref('姓名'), handleEditConfirm: vi.fn(),
  }
  const warnings: string[] = []
  const wrapper = mount(TableColumnManager, {
    props: { inline: true }, attachTo: document.body,
    global: { provide: { [TableColumnManagerContextKey as symbol]: context }, config: { warnHandler: (message) => warnings.push(message) } },
  })
  try {
    await nextTick()
    expect(wrapper.findAllComponents(Dialog).map((dialog) => dialog.props('title'))).toEqual(expect.arrayContaining(['向左插入列', '编辑列']))
    expect(wrapper.findComponent(CheckboxGroup).exists()).toBe(true)
    expect(document.querySelector('[role="dialog"]')).not.toBeNull()
    await wrapper.findComponent(CheckboxGroup).get('input[type="checkbox"]').setValue(true)
    expect(context.insertSelected.value).toEqual(['age'])
    context.insertVisible.value = false
    context.editVisible.value = true
    await nextTick()
    const editor = wrapper.findAllComponents(Dialog).find((dialog) => dialog.props('title') === '编辑列')!
    expect(editor.findAllComponents(Input)).toHaveLength(2)
    await editor.findAllComponents(Input)[1].get('input').setValue('新列名称')
    expect(context.editColumnTitle.value).toBe('新列名称')
    expect(warnings.filter((message) => /Failed to resolve component/.test(message))).toEqual([])
    expect(wrapper.find('c-dialog').exists()).toBe(false)
  } finally { wrapper.unmount() }
})
