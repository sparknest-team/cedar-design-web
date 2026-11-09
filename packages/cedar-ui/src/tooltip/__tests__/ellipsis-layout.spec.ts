import { defineComponent, h, nextTick, ref, withDirectives } from 'vue'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { vTooltip } from '..'
import { isTextOverflow } from '../utils'

test('detects actual horizontal and vertical layout overflow', () => {
  const el = document.createElement('div')
  Object.defineProperties(el, { clientWidth: { value: 100 }, scrollWidth: { value: 101 }, clientHeight: { value: 20 }, scrollHeight: { value: 20 } })
  expect(isTextOverflow(el)).toBe(true)
  const other = document.createElement('div')
  Object.defineProperties(other, { clientWidth: { value: 100 }, scrollWidth: { value: 100 }, clientHeight: { value: 20 }, scrollHeight: { value: 21 } })
  expect(isTextOverflow(other)).toBe(true)
})

test('adds and removes only its own ellipsis class as argument changes', async () => {
  const ellipsis = ref(true)
  const Fixture = defineComponent({ render: () => h('div', [
    withDirectives(h('span', { id: 'owned' }, 'Text'), [[vTooltip, { content: 'Info' }, ellipsis.value ? 'ellipsis' : 'top']]),
    withDirectives(h('span', { id: 'existing', class: 'text-ellipsis' }, 'Text'), [[vTooltip, { content: 'Info' }, ellipsis.value ? 'ellipsis' : 'top']]),
  ]) })
  const owner = mount(Fixture)
  try {
    expect(owner.get('#owned').classes()).toContain('text-ellipsis')
    ellipsis.value = false
    await nextTick()
    expect(owner.get('#owned').classes()).not.toContain('text-ellipsis')
    expect(owner.get('#existing').classes()).toContain('text-ellipsis')
    ellipsis.value = true
    await nextTick()
    expect(owner.get('#owned').classes()).toContain('text-ellipsis')
  } finally { owner.unmount() }
})
