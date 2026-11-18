import { describe, expect, it } from 'vitest'
import { createApp, createSSRApp, defineComponent, h, nextTick, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import Table from '../table'
import Column from '../table-column'
import BranchFixture from './fixtures/column-slot-branch-state.vue'

describe('column slot reconstruction', () => {
  it('replaces the entire columns slot and restores it while preserving reactivity', async () => {
    const branch = ref(true)
    const label = ref('old')
    const data = [{ key: 'a', a: 2, b: 3 }, { key: 'b', a: 1, b: 4 }]
    const Fixture = defineComponent({ setup: () => () => h(Table, { data, pagination: false }, {
      columns: branch.value
        ? () => [h(Column, { title: 'A', dataIndex: 'a', sortable: { sortDirections: ['ascend', 'descend'], sorter: (x: any, y: any) => x.a - y.a } }, { cell: ({ record }: any) => h('b', label.value + record.a) })]
        : () => [h(Column, { title: 'B', dataIndex: 'b' })],
    }) })
    const root = document.createElement('div')
    document.body.appendChild(root)
    const app = createApp(Fixture)
    app.mount(root)
    await nextTick(); await nextTick()
    expect(root.textContent).toContain('old2')
    branch.value = false; await nextTick(); await nextTick()
    expect(root.querySelector('thead')?.textContent).toContain('B')
    expect(root.querySelector('thead')?.textContent).not.toContain('A')
    branch.value = true; label.value = 'new'; await nextTick(); await nextTick()
    expect(root.querySelector('thead')?.textContent).toContain('A')
    expect(root.textContent).toContain('new2')
    app.unmount(); root.remove()
  })
  it('renders grouped columns and dynamic cell slots in SSR', async () => {
    const Fixture = defineComponent({ setup: () => () => h(Table, { data: [{ key: 'a', a: 7 }], pagination: false }, {
      columns: () => [h(Column, { title: 'Group' }, { default: () => [h(Column, { dataIndex: 'a' }, { title: () => 'SSR title', cell: ({ record }: any) => h('strong', 'SSR ' + record.a) })] })],
    }) })
    const html = await renderToString(createSSRApp(Fixture))
    expect(html).toContain('Group')
    expect(html).toContain('SSR title')
    expect(html).toContain('SSR 7')
  })
})

describe('column reconstruction hydration and state', () => {
  it('hydrates and keeps sorting and expansion when the columns slot is replaced', async () => {
    const branch = ref(true)
    const rows = [
      { key: 'a', value: 2, children: [{ key: 'child', value: 9 }] },
      { key: 'b', value: 1 },
    ]
    const sortable = { sortDirections: ['ascend', 'descend'] as ('ascend' | 'descend')[], sorter: (a: any, b: any) => a.value - b.value }
    const Fixture = defineComponent({ setup: () => () => h(Table, { data: rows, pagination: false, defaultExpandedKeys: ['a'], rowSelection: {}, defaultSelectedKeys: ['a'] }, {
      columns: branch.value
        ? () => [h(Column, { title: 'Original', dataIndex: 'value', sortable }, { cell: ({ record }: any) => h('b', String(record.value)) })]
        : () => [h(Column, { title: 'Replacement', dataIndex: 'value', sortable }, { cell: ({ record }: any) => h('b', String(record.value)) })],
    }) })
    const root = document.createElement('div')
    root.innerHTML = await renderToString(createSSRApp(Fixture))
    document.body.appendChild(root)
    const priorTable = root.querySelector('table')
    const diagnostics: string[] = []
    const oldError = console.error
    console.error = (...args: any[]) => { diagnostics.push(args.map(String).join(' ')) }
    const app = createSSRApp(Fixture)
    app.config.warnHandler = (message) => diagnostics.push(message)
    try {
      app.mount(root); await nextTick(); await nextTick()
      expect(root.querySelector('table')).toBe(priorTable)
      expect(diagnostics.filter((s) => /hydrat/i.test(s))).toEqual([])
      expect(root.textContent).toContain('9')
      expect(root.querySelectorAll('tbody input[type=checkbox]:checked')).toHaveLength(1)
      const unchecked = root.querySelector('tbody input[type=checkbox]:not(:checked)') as HTMLInputElement
      unchecked.click(); await nextTick(); await nextTick()
      expect(root.querySelectorAll('tbody input[type=checkbox]:checked')).toHaveLength(2)
      const sort = root.querySelector('th [role="button"]') as HTMLElement
      expect(sort).toBeTruthy()
      sort.click(); await nextTick(); await nextTick()
      const first = () => root.querySelector('tbody tr')?.textContent
      expect(first()).toContain('1')
      branch.value = false; await nextTick(); await nextTick(); await nextTick()
      expect(root.querySelector('thead')?.textContent).toContain('Replacement')
      expect(first()).toContain('1')
      expect(root.textContent).toContain('9')
      expect(root.querySelectorAll('tbody input[type=checkbox]:checked')).toHaveLength(2)
      expect(diagnostics.filter((s) => /hydrat/i.test(s))).toEqual([])
    } finally {
      app.unmount(); root.remove(); console.error = oldError
    }
  })
})


it('keeps the active filter when the columns slot is reconstructed', async () => {
  const branch = ref(true)
  const rows = [{key:'a',value:2},{key:'b',value:5}]
  const filterable = {defaultFilteredValue:['keep'],filters:[{text:'keep',value:'keep'}],filter:(values:string[],row:any)=> values.includes('keep') ? row.value===2 : row.value===5}
  const filterSlots = { 'filter-content': ({ setFilterValue, handleFilterConfirm }: any) => h('button', {class:'choose-other', onClick:(event: Event) => {setFilterValue(['other']);handleFilterConfirm(event)}}, 'Apply other') }
  const Fixture = defineComponent({ setup: () => () => h(Table, {data:rows,pagination:false}, {columns: branch.value
    ? () => [h(Column,{title:'Original',dataIndex:'value',filterable},filterSlots)]
    : () => [h(Column,{title:'Replacement',dataIndex:'value',filterable},filterSlots)]}) })
  const root=document.createElement('div');document.body.appendChild(root);const app=createApp(Fixture)
  try {
    app.mount(root);await nextTick();await nextTick()
    expect(root.querySelector('tbody')?.textContent).toContain('2')
    expect(root.querySelector('tbody')?.textContent).not.toContain('5')
    ;(root.querySelector('.c-table-filters') as HTMLElement).click(); await nextTick(); await nextTick()
    ;(document.querySelector('.choose-other') as HTMLElement).click(); await nextTick(); await nextTick()
    expect(root.querySelector('tbody')?.textContent).toContain('5')
    expect(root.querySelector('tbody')?.textContent).not.toContain('2')
    branch.value=false;await nextTick();await nextTick();await nextTick()
    expect(root.querySelector('thead')?.textContent).toContain('Replacement')
    expect(root.querySelector('tbody')?.textContent).toContain('5')
    expect(root.querySelector('tbody')?.textContent).not.toContain('2')
  } finally {app.unmount();root.remove()}
})


it('retains a user-changed filter across compiled slot branches with different column counts', async () => {
  const branch = ref(true)
  const root=document.createElement('div');document.body.appendChild(root)
  const app=createApp(defineComponent({setup:()=>()=>h(BranchFixture,{branch:branch.value})}))
  try {
    app.mount(root);await nextTick();await nextTick()
    ;(root.querySelector('.c-table-filters') as HTMLElement).click();await nextTick();await nextTick()
    ;(document.querySelector('.choose-other') as HTMLElement).click();await nextTick();await nextTick()
    expect(root.querySelector('tbody')?.textContent).toContain('5')
    branch.value=false;await nextTick();await nextTick();await nextTick()
    expect(root.querySelector('thead')?.textContent).toContain('Replacement')
    expect(root.querySelector('thead')?.textContent).not.toContain('Name')
    expect(root.querySelector('tbody')?.textContent).toContain('5')
    expect(root.querySelector('tbody')?.textContent).not.toContain('2')
  } finally {app.unmount();root.remove()}
})
