import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, test, vi } from 'vitest'
import Split from '..'
import ResizeTrigger from '../../_components/ResizeTrigger.vue'

const wrappers: ReturnType<typeof mount>[] = []
beforeEach(() => {
  vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(400)
  vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(200)
})
afterEach(() => {
  wrappers.splice(0).forEach((w) => w.unmount())
  vi.restoreAllMocks()
})
async function settle() {
  await nextTick()
  await nextTick()
  await nextTick()
}
async function setup(props: Record<string, unknown> = {}) {
  const w = mount(Split, { props, slots: { first: () => h('input', { placeholder: 'draft' }) } })
  wrappers.push(w)
  await settle()
  w.findComponent(ResizeTrigger).vm.$emit('resize', { contentRect: { width: 6, height: 6 } })
  await settle()
  return w
}
test('dynamic bounds constrain presentation and aria together and notify a refusing parent once', async () => {
  const w = await setup({ size: '200px' })
  await w.get('[role="separator"]').trigger('keydown', { key: 'ArrowRight' })
  const previous = w.emitted('update:size')?.length ?? 0
  await w.setProps({ min: '70%', max: '80%' })
  await settle()
  expect(w.get('.c-split-pane-first').attributes('style')).toContain('280px')
  expect(Number(w.get('[role="separator"]').attributes('aria-valuenow'))).toBe(70)
  expect(w.emitted('update:size')?.slice(previous)).toEqual([['280px']])
  await settle()
  expect(w.emitted('update:size')?.length).toBe(previous + 1)
  await w.get('[role="separator"]').trigger('keydown', { key: 'ArrowRight' })
  expect(w.emitted('update:size')?.at(-1)).toEqual(['290px'])
})
test('changing orientation remeasures a rectangular container without a key or resize event', async () => {
  const w = await setup({ size: '100px' })
  await w.get('[role="separator"]').trigger('keydown', { key: 'ArrowRight' })
  expect(Number(w.get('[role="separator"]').attributes('aria-valuenow'))).toBe(25)
  await w.setProps({ orientation: 'vertical' })
  await settle()
  expect(Number(w.get('[role="separator"]').attributes('aria-valuenow'))).toBe(50)
})
test('disabled removes all handle compensation and preserves the pane draft node', async () => {
  const w = await setup()
  const input = w.get('input').element
  await w.get('input').setValue('keep me')
  await w.setProps({ disabled: true })
  const basis = w.get<HTMLElement>('.c-split-pane-first').element.style.flexBasis
  expect(basis).toMatch(/^(?:50%|calc\(50% [+-] 0px\))$/)
  expect(w.find('[role="separator"]').exists()).toBe(false)
  expect(w.get('input').element).toBe(input)
  expect((input as HTMLInputElement).value).toBe('keep me')
})
test('explicit percentages and numeric strings keep ratio updates instead of becoming pixels', async () => {
  for (const value of ['50%', '0.50']) {
    const w = await setup({ defaultSize: value })
    await w.get('[role="separator"]').trigger('keydown', { key: 'ArrowRight' })
    expect(w.emitted('update:size')?.at(-1)).toEqual([0.525])
  }
})
test('unsupported CSS and nonfinite sizes use safe defaults with no invalid CSS or aria', async () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  const w = await setup({ size: 'calc(50% - 2px)', min: Number.NaN, max: Number.POSITIVE_INFINITY })
  await w.get('[role="separator"]').trigger('keydown', { key: 'ArrowRight' })
  expect(Number(w.get('[role="separator"]').attributes('aria-valuenow'))).toBe(50)
  expect(w.emitted('update:size')?.at(-1)).toEqual([0.525])
  expect(w.html()).not.toMatch(/NaN|Infinity/)
  expect(warn).toHaveBeenCalled()
})
test('bounds remain finite, ordered and inside a container smaller than the configured minimum', async () => {
  const w = await setup({ min: '500px', max: '100px' })
  await w.get('[role="separator"]').trigger('keydown', { key: 'Home' })
  const h = w.get('[role="separator"]')
  expect(
    [h.attributes('aria-valuemin'), h.attributes('aria-valuemax'), h.attributes('aria-valuenow')].map(Number),
  ).toEqual([100, 100, 100])
  expect(w.emitted('update:size')?.at(-1)).toEqual([1])
})
