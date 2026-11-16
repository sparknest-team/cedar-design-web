import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, expect, test, vi } from 'vitest'
import Base from '../base'
import { typographyEmits } from '../emits'
import { TypographyText, TypographyTitle, TypographyParagraph } from '../index'

afterEach(() => { vi.restoreAllMocks(); vi.useRealTimers() })

test.each([TypographyText, TypographyTitle, TypographyParagraph])('forwards every notification once with its payload', (component) => {
  const callbacks = Object.fromEntries(Object.keys(typographyEmits).map((name) => [name, vi.fn()]))
  const listeners = Object.fromEntries(Object.keys(callbacks).map((name) => [`on${name[0].toUpperCase()}${name.slice(1)}`, callbacks[name]]))
  const wrapper = mount(component, { attrs: listeners, slots: { default: 'content' } })
  const instance = wrapper.findComponent(Base).vm
  const payloads: Record<string, unknown[]> = { 'edit-start': [], change: ['text'], 'update:editText': ['text'], 'edit-end': [], 'update:editing': [true], copy: ['text'], ellipsis: [true], expand: [false] }
  for (const [name, args] of Object.entries(payloads)) {
    instance.$emit(name, ...args)
    expect(callbacks[name]).toHaveBeenCalledTimes(1)
    expect(callbacks[name]).toHaveBeenCalledWith(...args)
  }
  wrapper.unmount()
})

test('invalid heading and CSS row counts have safe fallbacks', async () => {
  vi.spyOn(console, 'warn').mockImplementation(() => {})
  const title = mount(TypographyTitle, { props: { heading: 0 as any }, slots: { default: 'title' } })
  expect(title.find('h1').exists()).toBe(true)
  const wrapper = mount(TypographyParagraph, { props: { ellipsis: { css: true, rows: 0 } }, slots: { default: 'text' } })
  const clamp = () => wrapper.get('[style*="-webkit-line-clamp"]').attributes('style')
  expect(clamp()).toContain('-webkit-line-clamp: 1')
  await wrapper.setProps({ ellipsis: { css: true, rows: 2.5 } }); await nextTick()
  expect(clamp()).toContain('-webkit-line-clamp: 1')
  await wrapper.setProps({ ellipsis: { css: true, rows: 3 } }); await nextTick()
  expect(clamp()).toContain('-webkit-line-clamp: 3')
  title.unmount(); wrapper.unmount()
})

test.each(['README.md', 'README.en-US.md'])('%s lists the events and slots on each content component', (file) => {
  const docs = readFileSync(resolve(import.meta.dirname, '..', file), 'utf8')
  for (const component of ['TypographyText', 'TypographyTitle', 'TypographyParagraph']) {
    const section = (name: string) => docs.split(`### ${component} ${name}\n`)[1]?.split('\n### ')[0] ?? ''
    for (const event of Object.keys(typographyEmits)) expect(section('Events')).toContain(`| ${event} |`)
    for (const slot of ['default', 'expand-node', 'copy-icon', 'copy-tooltip']) expect(section('Slots')).toContain(`| ${slot} |`)
  }
})
