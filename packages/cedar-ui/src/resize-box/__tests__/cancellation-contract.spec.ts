import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import { mount, type VueWrapper } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ResizeBox from '../ResizeBox.vue'
import Split from '../../split/Split.vue'
import { useColumnResize } from '../../table/hooks/use-column-resize'

const owners: VueWrapper[] = []
const originalCursor = document.body.style.cursor
const settle = async () => { await nextTick(); await Promise.resolve(); await nextTick() }
const up = () => window.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }))
function box() {
  const owner = mount(ResizeBox, { attrs: { style: { width: '200px', height: '120px' } } })
  owners.push(owner)
  return owner
}
afterEach(() => { owners.splice(0).forEach(owner => owner.unmount()); document.body.style.cursor = originalCursor })

describe('resize terminal notification ownership', () => {
  it('ends once when directions are removed and ignores a later physical mouseup', async () => {
    const owner = box()
    await owner.find('.c-resizebox-direction-right').trigger('mousedown', { button: 0, clientX: 100 })
    expect(owner.emitted('moving-start')).toHaveLength(1)
    await owner.setProps({ directions: [] })
    expect(owner.emitted('moving-end')).toHaveLength(1)
    expect(owner.emitted('moving-end')?.[0][0]).toBeInstanceOf(MouseEvent)
    expect(document.body.style.cursor).toBe(originalCursor)
    up()
    expect(owner.emitted('moving-end')).toHaveLength(1)
  })
  it('ends an active transaction during unmount', async () => {
    const owner = box()
    await owner.find('.c-resizebox-direction-right').trigger('mousedown', { button: 0 })
    owners.pop()?.unmount()
    expect(owner.emitted('moving-end')).toHaveLength(1)
    expect(document.body.style.cursor).toBe(originalCursor)
    up()
    expect(owner.emitted('moving-end')).toHaveLength(1)
  })
  it('ends on deactivation and starts a fresh transaction after reactivation', async () => {
    const show = ref(true)
    const owner = mount({ setup: () => () => h(KeepAlive, null, { default: () => show.value ? h(ResizeBox) : null }) })
    owners.push(owner)
    const child = owner.findComponent(ResizeBox)
    await child.find('.c-resizebox-direction-right').trigger('mousedown', { button: 0 })
    show.value = false
    await settle()
    expect(child.emitted('moving-end')).toHaveLength(1)
    show.value = true
    await settle()
    await child.find('.c-resizebox-direction-right').trigger('mousedown', { button: 0 })
    expect(child.emitted('moving-start')).toHaveLength(2)
    up()
    expect(child.emitted('moving-end')).toHaveLength(2)
  })
  it('does not duplicate a completed transaction when configuration changes later', async () => {
    const owner = box()
    await owner.find('.c-resizebox-direction-right').trigger('mousedown', { button: 0 })
    up()
    await owner.setProps({ directions: [] })
    expect(owner.emitted('moving-end')).toHaveLength(1)
  })
  it('also ends Split on disable after a real start', async () => {
    const owner = mount(Split)
    owners.push(owner)
    Object.defineProperty(owner.element, 'clientWidth', { configurable: true, value: 400 })
    await owner.find('[role="separator"]').trigger('mousedown', { button: 0 })
    expect(owner.emitted('move-start')).toHaveLength(1)
    await owner.setProps({ disabled: true })
    expect(owner.emitted('move-end')).toHaveLength(1)
    up()
    expect(owner.emitted('move-end')).toHaveLength(1)
  })
  it('does not report a Split start when its gesture rejects an unmeasured extent', async () => {
    const owner = mount(Split)
    owners.push(owner)
    await owner.find('[role="separator"]').trigger('mousedown', { button: 0 })
    expect(owner.emitted('move-start')).toBeUndefined()
    expect(owner.emitted('move-end')).toBeUndefined()
  })
  it('clears table resize ownership across KeepAlive deactivation', async () => {
    const show = ref(true), resized = vi.fn(), cell = document.createElement('th')
    cell.getBoundingClientRect = () => ({ width: 200 } as DOMRect)
    let controls!: ReturnType<typeof useColumnResize>
    const Child = defineComponent({ setup() { controls = useColumnResize(ref({ amount: cell }), resized); return () => h('div') } })
    const owner = mount({ setup: () => () => h(KeepAlive, null, { default: () => show.value ? h(Child) : null }) })
    owners.push(owner)
    controls.handleThMouseDown('amount', new MouseEvent('mousedown', { button: 0, clientX: 100 }))
    expect(controls.resizingColumn.value).toBe('amount')
    show.value = false
    await settle()
    expect(controls.resizingColumn.value).toBe('')
    show.value = true
    await settle()
    controls.handleThMouseDown('amount', new MouseEvent('mousedown', { button: 0, clientX: 100 }))
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 120 }))
    expect(resized).toHaveBeenLastCalledWith('column-resize', 'amount', 220)
    up()
  })
})
