import { defineComponent, h, KeepAlive, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test } from 'vitest'
import Tree from '../Tree.vue'
import VirtualList from '../../_components/virtual-list-v2/VirtualList.vue'

const cleanups: Array<() => void> = []
afterEach(() => cleanups.splice(0).reverse().forEach((cleanup) => cleanup()))

async function create(virtual = true) {
  const active = ref(true)
  const props = ref({
    data: Array.from({ length: 40 }, (_, index) => ({ value: `node-${index}`, label: `Node ${index}` })),
    virtualListProps: virtual ? { height: 90, estimatedSize: 30, fixedSize: true, buffer: 2 } : undefined,
  })
  const wrapper = mount(defineComponent({
    setup: () => () => h(KeepAlive, {}, () => active.value ? h(Tree, props.value) : null),
  }), { global: { stubs: { TreeNode: true } } })
  let mounted = true
  const dispose = () => { if (mounted) { mounted = false; wrapper.unmount() } }
  cleanups.push(dispose)
  await nextTick()
  const tree = wrapper.findComponent(Tree)
  const child = wrapper.findComponent(VirtualList)
  const element = child.exists() ? child.element as HTMLElement : undefined
  if (element) {
    Object.defineProperty(element, 'clientHeight', { configurable: true, value: 90 })
  }
  return { active, props, tree, child, element, dispose, scroll: tree.vm.scrollIntoView }
}

describe('Tree actual VirtualList scroll consumer', () => {
  test('index/top command reaches actual virtual container', async () => {
    const f = await create()
    f.scroll({ index: 20, align: 'top' })
    expect(f.element!.scrollTop).toBe(600)
    await nextTick()
    expect(f.element!.scrollTop).toBe(600)
  })
  test('key/bottom options retain downstream alignment semantics', async () => {
    const f = await create()
    f.scroll({ value: 'node-15', align: 'bottom' })
    await nextTick()
    expect(f.element!.scrollTop).toBe(390)
  })
  test('latest command wins the downstream correction queue', async () => {
    const f = await create()
    f.scroll({ index: 20, align: 'top' })
    f.scroll({ index: 3, align: 'top' })
    await nextTick()
    expect(f.element!.scrollTop).toBe(90)
  })
  test('retained inactive parent command cannot scroll inactive child', async () => {
    const f = await create()
    f.active.value = false
    await nextTick()
    f.element!.scrollTop = 37
    f.scroll({ index: 20, align: 'top' })
    await nextTick()
    expect(f.element!.scrollTop).toBe(37)
  })
  test('reactivation accepts a fresh command without replaying an old one', async () => {
    const f = await create()
    f.active.value = false
    await nextTick()
    f.scroll({ index: 20, align: 'top' })
    f.active.value = true
    await nextTick()
    f.scroll({ index: 4, align: 'top' })
    await nextTick()
    expect(f.element!.scrollTop).toBe(120)
  })
  test('unmount invalidates queued child correction and retained parent command', async () => {
    const f = await create()
    f.scroll({ index: 20, align: 'top' })
    f.dispose()
    f.element!.scrollTop = 37
    f.scroll({ index: 3, align: 'top' })
    await nextTick()
    expect(f.element!.scrollTop).toBe(37)
  })
  test('nonvirtual parent command is a safe no-op', async () => {
    const f = await create(false)
    expect(f.child.exists()).toBe(false)
    expect(() => f.scroll({ index: 20, align: 'top' })).not.toThrow()
  })
})
