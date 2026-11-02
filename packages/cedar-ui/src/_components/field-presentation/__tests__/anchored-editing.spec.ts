import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import Input from '../../../input/input.vue'
import EditorPanel from '../EditorPanel.vue'
import FieldPresentation from '../FieldPresentation.vue'

const owners: ReturnType<typeof mount>[] = []
afterEach(() => {
  owners.splice(0).forEach((owner) => owner.unmount())
  vi.restoreAllMocks()
})
function input(editMode: 'click' | 'dblclick') {
  const owner = mount(Input, {
    props: { editMode, modelValue: '原值' },
    attachTo: document.body,
  })
  owners.push(owner)
  return owner
}
test('double click leaves a single click readable and opens the original input on double click', async () => {
  const owner = input('dblclick')
  await owner.get('[aria-haspopup=dialog]').trigger('click')
  await flushPromises()
  expect(owner.findComponent(EditorPanel).exists()).toBe(false)
  await owner.get('[aria-haspopup=dialog]').trigger('dblclick')
  await flushPromises()
  expect(owner.getComponent(EditorPanel).get('input').element.value).toBe('原值')
  await owner.getComponent(EditorPanel).get('input').setValue('草稿')
  expect(owner.emitted('update:modelValue')).toBeUndefined()
  await owner.getComponent(EditorPanel).get('[aria-label=关闭]').trigger('click')
  await flushPromises()
  expect(owner.findComponent(EditorPanel).exists()).toBe(false)
  expect(owner.emitted('update:modelValue')).toBeUndefined()
})
test.each(['Enter', 'F2'])('%s enters keyboard editing and Escape cancels', async (key) => {
  const owner = input('dblclick')
  await owner.get('[aria-haspopup=dialog]').trigger('keydown', { key })
  await flushPromises()
  await owner.getComponent(EditorPanel).get('input').trigger('keydown', { key: 'Escape' })
  await flushPromises()
  expect(owner.findComponent(EditorPanel).exists()).toBe(false)
})
test('overlay covers the original position, can expand, stays within the viewport and follows scrolling', async () => {
  let top = 120
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(() => ({
    top,
    left: 1000,
    width: 240,
    height: 32,
    right: 1240,
    bottom: top + 32,
    x: 1000,
    y: top,
    toJSON() {},
  }))
  const owner = input('click')
  await owner.get('[aria-haspopup=dialog]').trigger('click')
  await flushPromises()
  const overlay = document.querySelector<HTMLElement>('.c-field-presentation__overlay')!
  expect(overlay.style.top).toBe('120px')
  const width = parseFloat(overlay.style.width),
    left = parseFloat(overlay.style.left)
  expect(width).toBeGreaterThan(240)
  expect(left + width).toBeLessThanOrEqual(window.innerWidth - 8)
  top = 80
  window.dispatchEvent(new Event('scroll'))
  await flushPromises()
  expect(overlay.style.top).toBe('80px')
  expect(owner.getComponent(FieldPresentation).find('.c-field-presentation__anchor').attributes('style')).toContain(
    'hidden',
  )
})
test('pretty reading does not mount or open an editor and is independent of presentation', async () => {
  const owner = input('click')
  await owner.setProps({ readPretty: true })
  expect(owner.text()).toContain('原值')
  expect(owner.find('input').exists()).toBe(false)
  expect(owner.find('[aria-haspopup=dialog]').exists()).toBe(false)
  await owner.setProps({ readPretty: false })
  await owner.get('[aria-haspopup=dialog]').trigger('click')
  await flushPromises()
  expect(owner.findComponent(EditorPanel).exists()).toBe(true)
})
