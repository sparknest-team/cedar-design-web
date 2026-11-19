import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { Button, Card, FilterForm, Select, Table } from '@cedar-design/ui-vue'
import AboveTable from '../__demos__/above-table.vue'
import InsideCard from '../__demos__/inside-card.vue'

beforeEach(() => {
  vi.stubGlobal('matchMedia', () => ({
    matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn(),
    addListener: vi.fn(), removeListener: vi.fn(),
  }))
})
afterEach(() => vi.unstubAllGlobals())

it('filters the adjacent table as the keyword changes', async () => {
  const page = mount(AboveTable, { global: { plugins: [FilterForm, Table] } })
  try {
    await page.get('input').setValue('maya')
    await flushPromises()
    expect(page.getComponent(Table).props('data')).toEqual([{ key: 'SO-1043', customer: 'Maya Patel' }])
  } finally {
    page.unmount()
  }
})

it('applies and resets the draft filter inside the card', async () => {
  const page = mount(InsideCard, { global: { plugins: [FilterForm, Card, Button] } })
  try {
    const card = page.getComponent(Card)
    card.getComponent(Select).vm.$emit('update:modelValue', 'closed')
    await flushPromises()
    const [reset, search] = card.findAllComponents(Button)
    expect(page.findAll('li')).toHaveLength(3)
    await search.trigger('click')
    expect(page.get('ul').text()).toContain('SO-1043')
    expect(page.findAll('li')).toHaveLength(1)
    await reset.trigger('click')
    expect(page.findAll('li')).toHaveLength(3)
  } finally {
    page.unmount()
  }
})
