import { afterEach, expect, test, vi } from 'vitest'
import { defineComponent, h, nextTick, provide, ref } from 'vue'
import { mount } from '@vue/test-utils'
import AnchorLink from '../AnchorLink.vue'
import { anchorInjectionKey } from '../context'

const owners: ReturnType<typeof mount>[] = []
afterEach(() => owners.splice(0).forEach(owner => owner.unmount()))
async function fixture() {
  const href = ref('#first')
  const add = vi.fn(), remove = vi.fn()
  const owner = mount(defineComponent({ setup() {
    provide(anchorInjectionKey, { currentLink: '', addLink: add, removeLink: remove, handleClick: () => {} })
    return () => h(AnchorLink, { href: href.value, title: 'link' })
  } }))
  owners.push(owner); await nextTick()
  return { owner, href, add, remove }
}
test('link disposal unregisters its measured DOM node', async () => {
  const f = await fixture(); const node = f.owner.find('li').element
  f.owner.unmount()
  expect(f.remove.mock.calls[0]?.[0]).toBe('#first')
  expect(f.remove.mock.calls[0]?.[1]).toBe(node)
})
test('href replacement releases the old registration and registers the current node', async () => {
  const f = await fixture(); f.href.value = '#second'; await nextTick()
  expect(f.remove.mock.calls[0]?.[0]).toBe('#first')
  expect(f.add.mock.calls.at(-1)?.[0]).toBe('#second')
})
