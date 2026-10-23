import { afterEach, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import TimelineRows from '../components/SchedulerTimelineRows.vue'

const owners: Array<ReturnType<typeof mount>> = []
let commands: unknown[] = []
let onCommand = () => {}
const ListStub = defineComponent({
  name: 'ControlledVirtualList',
  props: { data: { type: Array, default: () => [] } },
  emits: ['scroll'],
  setup(props, { expose, slots }) {
    expose({ scrollTo: (options: unknown) => { commands.push(options); onCommand() } })
    return () => h('div', props.data.map((item) => slots.item?.({ item })))
  },
})
afterEach(() => {
  owners.splice(0).forEach((owner) => owner.unmount())
  commands = []
  onCommand = () => {}
  vi.restoreAllMocks()
})
async function settle() { for (let i = 0; i < 6; i++) await nextTick() }
async function fixture() {
  const active = ref(true)
  const layout = ref('first')
  const options = ref<{ height: number } | undefined>({ height: 200 })
  const groups = [{ key: 'g', label: 'G', resources: [{ id: 'a', label: 'A' }, { id: 'b', label: 'B' }] }]
  const owner = mount(defineComponent({ setup: () => () => h(KeepAlive, null, {
    default: () => active.value ? h(TimelineRows, {
      groups, grouped: false, expanded: [], options: options.value, layoutVersion: layout.value,
    }, { heading: () => 'Heading', resource: () => 'Resource' }) : null,
  }) }), { global: { stubs: { VirtualList: ListStub, CVirtualList: ListStub } } })
  owners.push(owner)
  await settle()
  expect(owner.findComponent(ListStub).exists()).toBe(true)
  return { owner, active, layout, options }
}
function eventFor(node: Element) {
  const event = new Event('scroll')
  Object.defineProperty(event, 'target', { value: node })
  return event
}

test('active layout rebuild forwards current anchor and horizontal offset', async () => {
  const { owner, layout } = await fixture()
  owner.get('.c-scheduler__virtual-rows').element.scrollLeft = 23
  layout.value = 'second'
  await settle()
  expect(commands).toEqual([{ key: 'resource:a' }])
  expect(owner.get('.c-scheduler__virtual-rows').element.scrollLeft).toBe(23)
})
test('inactive layout change does not invoke retained list commands', async () => {
  const { active, layout } = await fixture()
  active.value = false
  await settle()
  layout.value = 'second'
  await settle()
  expect(commands).toEqual([])
})
test('deactivation during first scroll command prevents second-phase viewport writes', async () => {
  const { active, layout } = await fixture()
  let viewport: HTMLElement | undefined
  // The new stub viewport is retained from the current owner, not a global lookup.
  const owner = owners[0]
  onCommand = () => {
    viewport = owner.get('.c-scheduler__virtual-rows').element as HTMLElement
    viewport.scrollLeft = 71
    active.value = false
  }
  layout.value = 'second'
  await settle()
  expect(commands).toHaveLength(1)
  expect(viewport!.scrollLeft).toBe(71)
})
test('inactive retained scroll callback cannot write detached heading', async () => {
  const { owner, active } = await fixture()
  const child = owner.findComponent(ListStub)
  const callback = child.vm.$.vnode.props!.onScroll as (event: Event) => void
  const viewport = child.element as HTMLElement
  const heading = owner.get('.c-scheduler__virtual-heading').element as HTMLElement
  active.value = false
  await settle()
  viewport.scrollLeft = 52
  callback(eventFor(viewport))
  expect(heading.scrollLeft).toBe(0)
})
test('old scroll callback cannot cross activation', async () => {
  const { owner, active } = await fixture()
  const child = owner.findComponent(ListStub)
  const callback = child.vm.$.vnode.props!.onScroll as (event: Event) => void
  const viewport = child.element as HTMLElement
  active.value = false
  await settle()
  active.value = true
  await settle()
  viewport.scrollLeft = 63
  callback(eventFor(viewport))
  expect((owner.get('.c-scheduler__virtual-heading').element as HTMLElement).scrollLeft).toBe(0)
})
test('second-phase row geometry disposal stops viewport reads', async () => {
  const { owner, layout } = await fixture()
  let viewport: HTMLElement | undefined
  onCommand = () => {
    viewport = owner.get('.c-scheduler__virtual-rows').element as HTMLElement
    vi.spyOn(viewport, 'getBoundingClientRect')
    const row = viewport.querySelector<HTMLElement>('[data-scheduler-entry]')!
    vi.spyOn(row, 'getBoundingClientRect').mockImplementation(() => {
      owners.pop(); owner.unmount()
      return { top: 0, bottom: 200 } as DOMRect
    })
  }
  layout.value = 'second'
  await settle()
  expect(viewport!.getBoundingClientRect).not.toHaveBeenCalled()
})
test('nonvirtual mode does not invoke list commands', async () => {
  const { options, layout } = await fixture()
  options.value = undefined
  layout.value = 'second'
  await settle()
  expect(commands).toEqual([])
})

test('activation performs one fresh rebuild for inactive changes', async () => {
  const { active, layout } = await fixture()
  active.value = false
  await settle()
  layout.value = 'second'
  await settle()
  expect(commands).toEqual([])
  active.value = true
  await settle()
  expect(commands).toEqual([{ key: 'resource:a' }])
})

test('fresh active scroll binding still synchronizes the heading', async () => {
  const { owner, active } = await fixture()
  active.value = false
  await settle()
  active.value = true
  await settle()
  const child = owner.findComponent(ListStub)
  const viewport = child.element as HTMLElement
  viewport.scrollLeft = 49
  child.vm.$emit('scroll', eventFor(viewport))
  expect((owner.get('.c-scheduler__virtual-heading').element as HTMLElement).scrollLeft).toBe(49)
})

test('scroll from a replaced list cannot move the current heading', async () => {
  const { owner, layout } = await fixture()
  const child = owner.findComponent(ListStub)
  const callback = child.vm.$.vnode.props!.onScroll as (event: Event) => void
  const old = child.element as HTMLElement
  layout.value = 'second'
  await settle()
  old.scrollLeft = 68
  callback(eventFor(old))
  expect((owner.get('.c-scheduler__virtual-heading').element as HTMLElement).scrollLeft).toBe(0)
})
