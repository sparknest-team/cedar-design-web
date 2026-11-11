import { h, ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import ConfigProvider from '..'
import Button from '../../button'
import ButtonGroup from '../../button/ButtonGroup.vue'
test('Button inherits the nested provider default and updates without an explicit size', async () => {
  const size = ref<'sm' | 'lg'>('sm')
  const w = mount({ render: () => h(ConfigProvider, { size: size.value }, () => h(ConfigProvider, {}, () => h(Button, {}, () => 'Action'))) })
  try {
    expect(w.get('button').classes()).toContain('c-button--size-sm')
    size.value = 'lg'; await flushPromises()
    expect(w.get('button').classes()).toContain('c-button--size-lg')
  } finally { w.unmount() }
})
test('Button own size and group size override provider defaults and removal reveals the current fallback', async () => {
  const group = ref<'sm' | undefined>('sm'), own = ref<'xs' | undefined>('xs')
  const w = mount({ render: () => h(ConfigProvider, { size: 'lg' }, () => h(ButtonGroup, { size: group.value }, () => [h(Button, { id: 'grouped' }, () => 'Group'), h(Button, { id: 'own', size: own.value }, () => 'Own')])) })
  try {
    expect(w.get('#grouped').classes()).toContain('c-button--size-sm')
    expect(w.get('#own').classes()).toContain('c-button--size-xs')
    group.value = undefined; await flushPromises()
    expect(w.get('#grouped').classes()).toContain('c-button--size-lg')
    own.value = undefined; await flushPromises()
    expect(w.get('#own').classes()).toContain('c-button--size-lg')
  } finally { w.unmount() }
})
