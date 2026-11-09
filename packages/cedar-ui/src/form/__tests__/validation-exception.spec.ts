import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import Form, { FormItem } from '..'
import Input from '../../input'
const owners: ReturnType<typeof mount>[] = []
afterEach(() => { owners.splice(0).forEach(w => w.unmount()); vi.restoreAllMocks() })
function fixture() {
  const tasks: { resolve: () => void; reject: (reason: Error) => void; done: (message?: string) => void }[] = []
  const owner = mount(Form, { props: { model: { name: 'value' } }, slots: { default: () => h(FormItem, { field: 'name', label: 'Name', feedback: true, validateTrigger: [], rules: [{ validator: (_value: unknown, done: (message?: string) => void) => new Promise<void>((resolve, reject) => tasks.push({ resolve, reject, done })) }] }, () => h(Input)) } })
  owners.push(owner)
  return { owner, tasks, run: () => owner.vm.validate().catch((error: unknown) => error), pending: () => owner.find('.c-input-feedback--validating').exists() }
}
const settle = () => new Promise(resolve => setTimeout(resolve, 20))
test('a synchronous rule exception rejects and releases validating feedback', async () => {
  const cause = new Error('sync failure'), owner = mount(Form, { props: { model: { name: 'value' } }, slots: { default: () => h(FormItem, { field: 'name', feedback: true, validateTrigger: [], rules: [{ validator: () => { throw cause } }] }, () => h(Input)) } })
  owners.push(owner)
  await expect(owner.vm.validate()).rejects.toBe(cause)
  await nextTick()
  expect(owner.find('.c-input-feedback--validating').exists()).toBe(false)
})
test('a rejected rule settles the public result and releases feedback', async () => {
  const f = fixture(), cause = new Error('reject failure')
  const result = f.run(); await nextTick(); expect(f.pending()).toBe(true)
  f.tasks[0].reject(cause)
  const outcome = await Promise.race([result, settle().then(() => 'still pending')])
  expect(outcome).toBe(cause); await nextTick(); expect(f.pending()).toBe(false)
})
test('stale rejection does not clear latest pending validation', async () => {
  const f = fixture(), first = f.run(), second = f.run(), cause = new Error('stale failure')
  f.tasks[0].reject(cause)
  expect(await Promise.race([first, settle().then(() => 'still pending')])).toBe(cause)
  await nextTick(); expect(f.pending()).toBe(true)
  f.tasks[1].resolve(); expect(await second).toBeUndefined(); await nextTick(); expect(f.pending()).toBe(false)
})

test('unexpected exception preserves a previous business error and later validation recovers', async () => {
  const f = fixture(), invalid = f.run()
  f.tasks[0].done('Known error'); f.tasks[0].resolve(); await invalid; await nextTick()
  expect(f.owner.text()).toContain('Known error')
  const failed = f.run(), cause = new Error('later exception')
  f.tasks[1].reject(cause); expect(await failed).toBe(cause); await nextTick()
  expect(f.pending()).toBe(false); expect(f.owner.text()).toContain('Known error')
  const recovered = f.run(); f.tasks[2].resolve(); expect(await recovered).toBeUndefined(); await nextTick()
  expect(f.pending()).toBe(false); expect(f.owner.text()).not.toContain('Known error')
})
