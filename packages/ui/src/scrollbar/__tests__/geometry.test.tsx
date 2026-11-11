import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test } from 'vitest'
import Public from '../Scrollbar.vue'
import Legacy from '../src/Scrollbar.vue'
const ResizeStub = defineComponent({ setup: (_, { slots }) => () => h('div', slots.default?.()) })
const ThumbStub = defineComponent({ props: ['orientation'], setup: (_, { expose }) => { expose({ setOffset: () => {} }); return () => h('i') } })
const owners: ReturnType<typeof mount>[] = []
afterEach(() => owners.splice(0).forEach(w => w.unmount()))
async function fixture(Component: typeof Public | typeof Legacy, props: Record<string, unknown> = {}) {
  const owner = mount(Component, { props, global: { stubs: { ResizeObserver: ResizeStub, Thumb: ThumbStub } } }); owners.push(owner)
  const vm = owner.vm as any
  const geometry = { clientWidth: 300, clientHeight: 200, offsetWidth: 300, offsetHeight: 200, scrollWidth: 900, scrollHeight: 600, offsetLeft: 10, offsetTop: 20, scrollTop: 30, scrollLeft: 40 }
  for (const key of Object.keys(geometry) as Array<keyof typeof geometry>) Object.defineProperty(vm.containerRef, key, { configurable: true, get: () => geometry[key] })
  vm.handleResize(); await nextTick(); await nextTick(); vm.handleResize(); await nextTick()
  return { owner, vm, container: vm.containerRef, geometry }
}
for (const [name, Component] of [['public', Public], ['legacy', Legacy]] as const) describe(name, () => {
  test('tracks share the measured inner viewport origin and axis lengths', async () => {
    const { vm } = await fixture(Component)
    const horizontal = vm.horizontalThumbRef.$el as HTMLElement
    const vertical = vm.verticalThumbRef.$el as HTMLElement
    expect([horizontal.style.left, horizontal.style.top, horizontal.style.width]).toEqual(['10px', '205px', '285px'])
    expect([vertical.style.left, vertical.style.top, vertical.style.height]).toEqual(['295px', '20px', '185px'])
    expect(vm.horizontalData.thumbSize + vm.horizontalData.max).toBe(285)
    expect(vm.verticalData.thumbSize + vm.verticalData.max).toBe(185)
  })
  for (const [disabled, axis] of [['disableVertical', 'horizontal'], ['disableHorizontal', 'vertical']] as const) test(`live ${disabled} matches its initial configuration without a resize`, async () => {
    const f = await fixture(Component)
    await f.owner.setProps({ [disabled]: true }); await nextTick(); await nextTick()
    expect(f.vm.containerRef).toBe(f.container)
    expect(f.vm.isBoth).toBe(false)
    const data = f.vm[axis + 'Data']
    const initial = await fixture(Component, { [disabled]: true })
    expect(data).toEqual(initial.vm[axis + 'Data'])
    expect(f.vm.containerRef.scrollTop).toBe(30); expect(f.vm.containerRef.scrollLeft).toBe(40)
  })
  test('position-only outer style updates realign tracks without a resize', async () => {
    const f = await fixture(Component)
    f.geometry.offsetLeft = 30
    await f.owner.setProps({ outerStyle: { paddingLeft: '30px' } }); await nextTick(); await nextTick()
    expect(f.vm.containerRef).toBe(f.container)
    expect(f.vm.horizontalThumbRef.$el.style.left).toBe('30px')
    expect(f.vm.verticalThumbRef.$el.style.left).toBe('315px')
  })
  test('changing embed to track recomputes the thumb track budget', async () => {
    const f = await fixture(Component)
    await f.owner.setProps({ type: 'track' }); await nextTick(); await nextTick()
    expect(f.vm.containerRef).toBe(f.container)
    const horizontal = f.vm.horizontalData, vertical = f.vm.verticalData
    const initial = await fixture(Component, { type: 'track' })
    expect(horizontal).toEqual(initial.vm.horizontalData)
    expect(vertical).toEqual(initial.vm.verticalData)
  })
})
