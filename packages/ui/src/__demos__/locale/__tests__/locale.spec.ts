import { nextTick, type Component, type Plugin } from 'vue'
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { addI18nMessages, cedarEnUS, useLocale } from '../../../locale'

// Load only the real components needed by the selected scenario. Eagerly
// importing every demo made even a dictionary-only test transform the whole UI.
const plugins = {
  Form: () => import('../../../form'),
  Section: () => import('../../../section'),
  Divider: () => import('../../../divider'),
  Input: () => import('../../../input'),
  InputNumber: () => import('../../../input-number'),
  Select: () => import('../../../select'),
  Checkbox: () => import('../../../checkbox'),
  Radio: () => import('../../../radio'),
  Space: () => import('../../../space'),
  Button: () => import('../../../button'),
  Textarea: () => import('../../../textarea'),
  Table: () => import('../../../table'),
  Icon: () => import('../../../icon'),
  Switch: () => import('../../../switch'),
  Alert: () => import('../../../alert'),
  Calendar: () => import('../../../calendar'),
  Carousel: () => import('../../../carousel'),
  Steps: () => import('../../../steps'),
  Countdown: () => import('../../../countdown'),
  Row: () => import('../../../row'),
  Col: () => import('../../../col'),
}
const demos: Record<
  string,
  {
    load: () => Promise<{ default: Component }>
    loadEnglish: () => Promise<{ default: Component }>
    plugins: (keyof typeof plugins)[]
    zh: string
    en: string
  }
> = {
  sectionHeadingOptions: {
    load: () => import('../../../section/__demos__/heading-options.vue'),
    loadEnglish: () => import('../../../section/__demos__/heading-options.en-US.vue'),
    plugins: ['Section', 'Radio', 'Checkbox', 'Space'],
    zh: '显示标题',
    en: 'Show heading',
  },
  sectionInlineForm: {
    load: () => import('../../../section/__demos__/inline-form.vue'),
    loadEnglish: () => import('../../../section/__demos__/inline-form.en-US.vue'),
    plugins: ['Section', 'Form', 'Input'],
    zh: '成员信息',
    en: 'Member details',
  },
  sectionLine: {
    load: () => import('../../../section/__demos__/line.vue'),
    loadEnglish: () => import('../../../section/__demos__/line.en-US.vue'),
    plugins: ['Section', 'Button'],
    zh: '发布记录',
    en: 'Release history',
  },
  inputLoading: {
    load: () => import('../../../input/__demos__/loading.vue'),
    loadEnglish: () => import('../../../input/__demos__/loading.en-US.vue'),
    plugins: ['Input', 'Switch', 'Form', 'Space'],
    zh: '加载状态',
    en: 'Loading',
  },
  selectLoading: {
    load: () => import('../../../select/__demos__/loading.vue'),
    loadEnglish: () => import('../../../select/__demos__/loading.en-US.vue'),
    plugins: ['Select', 'Switch', 'Form', 'Space'],
    zh: '北京',
    en: 'Beijing',
  },
  buttonLoading: {
    load: () => import('../../../button/__demos__/controlled-loading.vue'),
    loadEnglish: () => import('../../../button/__demos__/controlled-loading.en-US.vue'),
    plugins: ['Button', 'Space'],
    zh: '点击保存',
    en: 'Click Save to start',
  },
  alertLab: {
    load: () => import('../../../alert/__demos__/appearance-lab.vue'),
    loadEnglish: () => import('../../../alert/__demos__/appearance-lab.en-US.vue'),
    plugins: ['Alert', 'Space', 'Form', 'Radio'],
    zh: '选择一个对比维度',
    en: 'Compare one dimension',
  },
  alertContent: {
    load: () => import('../../../alert/__demos__/content-comparison.vue'),
    loadEnglish: () => import('../../../alert/__demos__/content-comparison.en-US.vue'),
    plugins: ['Alert', 'Row', 'Col'],
    zh: '提示标题',
    en: 'title',
  },
  carousel: {
    load: () => import('../../../carousel/__demos__/indicator-comparison.vue'),
    loadEnglish: () => import('../../../carousel/__demos__/indicator-comparison.en-US.vue'),
    plugins: ['Carousel'],
    zh: '指示器样式',
    en: 'Indicator types',
  },
  steps: {
    load: () => import('../../../steps/__demos__/types.vue'),
    loadEnglish: () => import('../../../steps/__demos__/types.en-US.vue'),
    plugins: ['Steps', 'Form', 'Radio'],
    zh: '当前步骤',
    en: 'Current step',
  },
  calendar: {
    load: () => import('../../../calendar/__demos__/basic.vue'),
    loadEnglish: () => import('../../../calendar/__demos__/basic.en-US.vue'),
    plugins: ['Calendar'],
    zh: '当前选择',
    en: 'Current selection',
  },
  calendarControlled: {
    load: () => import('../../../calendar/__demos__/controlled.vue'),
    loadEnglish: () => import('../../../calendar/__demos__/controlled.en-US.vue'),
    plugins: ['Calendar', 'Space', 'Button', 'Alert'],
    zh: '选择今天',
    en: 'Select today',
  },
  countdown: {
    load: () => import('../../../countdown/__demos__/format-comparison.vue'),
    loadEnglish: () => import('../../../countdown/__demos__/format-comparison.en-US.vue'),
    plugins: ['Countdown', 'Space'],
    zh: '自定义格式',
    en: 'format',
  },
  section: {
    load: () => import('../../../form/__demos__/section.vue'),
    loadEnglish: () => import('../../../form/__demos__/section.en-US.vue'),
    plugins: ['Form', 'Section', 'Select', 'Textarea', 'Radio', 'Checkbox', 'Space', 'Divider'],
    zh: '现场处置',
    en: 'Onsite handling',
  },
  layout: {
    load: () => import('../../../form/__demos__/layout.vue'),
    loadEnglish: () => import('../../../form/__demos__/layout.en-US.vue'),
    plugins: ['Form', 'Radio', 'Checkbox', 'Input', 'Space'],
    zh: '表单布局',
    en: 'Form layout',
  },
  labelWidth: {
    load: () => import('../../../form/__demos__/label-width-comparison.vue'),
    loadEnglish: () => import('../../../form/__demos__/label-width-comparison.en-US.vue'),
    plugins: ['Form', 'Radio', 'Checkbox', 'Input'],
    zh: '显示额外字段',
    en: 'Show extra field',
  },
  defaultValue: {
    load: () => import('../../../input/__demos__/default-value.vue'),
    loadEnglish: () => import('../../../input/__demos__/default-value.en-US.vue'),
    plugins: ['Input', 'Space', 'Button'],
    zh: '重新挂载输入框',
    en: 'Remount input',
  },
  quantity: {
    load: () => import('../../../input-number/__demos__/quantity-controls.vue'),
    loadEnglish: () => import('../../../input-number/__demos__/quantity-controls.en-US.vue'),
    plugins: ['InputNumber', 'Space', 'Checkbox', 'Button'],
    zh: '数量控制与步进方向',
    en: 'Quantity controls and step direction',
  },
  selection: {
    load: () => import('../../../select/__demos__/selection-data-flow.vue'),
    loadEnglish: () => import('../../../select/__demos__/selection-data-flow.en-US.vue'),
    plugins: ['Select', 'Form', 'Checkbox', 'Button'],
    zh: '重置两组表单和日志',
    en: 'Reset both forms and logs',
  },
  columnSizing: {
    load: () => import('../../../table/__demos__/column-sizing-playground.vue'),
    loadEnglish: () => import('../../../table/__demos__/column-sizing-playground.en-US.vue'),
    plugins: ['Table', 'Space', 'Checkbox', 'Radio'],
    zh: '充电设备巡检',
    en: 'Inspect charging equipment',
  },
  lifecycle: {
    load: () => import('../../../icon/__demos__/lifecycle.vue'),
    loadEnglish: () => import('../../../icon/__demos__/lifecycle.en-US.vue'),
    plugins: ['Icon', 'Space', 'Button'],
    zh: '切换名称',
    en: 'Switch name',
  },
}
const wrappers: VueWrapper[] = []
const unresolvedWarnings: string[] = []
async function render(name: keyof typeof demos, route: 'zh-CN' | 'en-US' = 'zh-CN') {
  const scenario = demos[name]
  const [module, registrations] = await Promise.all([
    route === 'en-US' ? scenario.loadEnglish() : scenario.load(),
    Promise.all(scenario.plugins.map((name) => plugins[name]())),
  ])
  const wrapper = mount(module.default, {
    attachTo: document.body,
    global: {
      plugins: registrations.map((module) => module.default as Plugin),
      config: {
        warnHandler(message) {
          if (message.startsWith('Failed to resolve component:')) {
            unresolvedWarnings.push(message)
          } else {
            console.warn(message)
          }
        },
      },
    },
  })
  wrappers.push(wrapper)
  return wrapper
}
function button(wrapper: VueWrapper, text: string) {
  const result = wrapper.findAll('button').find((item) => item.text() === text)
  expect(result, `button ${text}`).toBeTruthy()
  return result!
}
async function language(locale: 'zh-CN' | 'en-US') {
  useLocale(locale)
  await nextTick()
}
addI18nMessages({ 'en-US': cedarEnUS })
beforeEach(() => useLocale('zh-CN'))
afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount())
  useLocale('zh-CN')
  vi.useRealTimers()
  expect(unresolvedWarnings.splice(0)).toEqual([])
})

describe('demo locales', () => {
  it.each([
    [() => import('../../../section/__demos__/outline.vue'), '发布记录'],
    [() => import('../../../section/__demos__/outline.en-US.vue'), 'Release history'],
    [() => import('../../../section/__demos__/plain.vue'), '成员权限'],
    [() => import('../../../section/__demos__/plain.en-US.vue'), 'Member permissions'],
  ] as const)('renders the static example heading %s', async (load, heading) => {
    const [{ default: Demo }, { default: Section }] = await Promise.all([load(), plugins.Section()])
    const wrapper = mount(Demo, { global: { plugins: [Section] } })
    wrappers.push(wrapper)
    expect(wrapper.get('section :is(h3, h4)').text()).toBe(heading)
  })
  it.each(Object.keys(demos))(
    'renders both languages for %s',
    async (name) => {
      const wrapper = await render(name)
      expect(wrapper.text()).toContain(demos[name].zh)
      await language('en-US')
      const english = await render(name, 'en-US')
      expect(english.text()).toContain(demos[name].en)
      expect(english.text()).not.toContain(demos[name].zh)
    },
    120_000,
  )
  it('previews each Section variant with and without a heading or description', async () => {
    const wrapper = await render('sectionHeadingOptions')
    const section = wrapper.get('section')
    const [title, description, marker] = wrapper.findAll('input[type="checkbox"]')
    for (const radio of wrapper.get('[role="radiogroup"]').findAll('input[type="radio"]')) {
      await radio.setValue(true)
      expect(section.classes()).toContain(`c-section--${(radio.element as HTMLInputElement).value}`)
      expect(section.find('.c-section__header').exists()).toBe(false)
      for (const status of ['default', 'info', 'success', 'warning', 'danger']) {
        await wrapper.get(`input[value="${status}"]`).setValue(true)
        expect(section.classes()).toContain(`c-section--${status}`)
      }
      await marker.setValue(true)
      expect((wrapper.get('input[value="section"]').element as HTMLInputElement).checked).toBe(true)
      expect(section.find('.c-section__surface--marked').exists()).toBe(true)
      await title.setValue(true)
      await wrapper.get('input[value="section"]').setValue(true)
      expect(section.find('.c-section__label--marked').exists()).toBe(false)
      await wrapper.get('input[value="title"]').setValue(true)
      expect(section.find('.c-section__surface--marked').exists()).toBe(false)
      expect(section.find('.c-section__label--marked').exists()).toBe(true)
      await marker.setValue(false)
      expect(section.find('.c-section__label--marked').exists()).toBe(false)
      expect(section.get('h4').text()).toBe('成员权限')
      await description.setValue(true)
      expect(section.get('.c-section__description').text()).toContain('权限变更')
      await title.setValue(false)
      expect(section.find('h4').exists()).toBe(false)
      expect(section.find('.c-section__description').exists()).toBe(true)
      await description.setValue(false)
    }
  })
  it('formats the displayed calendar date with the global language', async () => {
    vi.useFakeTimers({ toFake: ['Date'] })
    const date = new Date(2026, 8, 9, 13, 5)
    vi.setSystemTime(date)
    const wrapper = await render('calendar')
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' } as const
    // 包名在测试里由 vitest 别名指向源码入口，所以这里不需要构建产物。
    const runtime = await import('@cedar-design/ui-vue')
    const previous = runtime.getLocale()
    runtime.addI18nMessages({ 'en-US': cedarEnUS })
    try {
      for (const locale of ['zh-CN', 'en-US'] as const) {
        runtime.useLocale(locale)
        await nextTick()
        expect(wrapper.get('.demo-result').text()).toContain(date.toLocaleDateString(locale, options))
      }
    } finally {
      runtime.useLocale(previous)
    }
  }, 120_000)
  it.each(['zh-CN', 'en-US'] as const)(
    'keeps typed text and allows further editing and remount after a round trip (%s)',
    async (route) => {
      const text = (zh: string, en: string) => (route === 'zh-CN' ? zh : en)
      await language(route)
      const wrapper = await render('defaultValue', route)
      const input = wrapper.findAll('input')[0]
      await input.setValue('user edited text')
      await language('en-US')
      expect((input.element as HTMLInputElement).value).toBe('user edited text')
      await input.setValue('edited in English')
      await language('zh-CN')
      expect((input.element as HTMLInputElement).value).toBe('edited in English')
      expect(wrapper.text()).toContain(text('最近一次用户更新', 'last emitted value'))
      await language('en-US')
      await button(wrapper, text('重新挂载输入框', 'Remount input')).trigger('click')
      expect((wrapper.findAll('input')[0].element as HTMLInputElement).value).toBe('A: initial text')
    },
    120_000,
  )
  it.each(['zh-CN', 'en-US'] as const)(
    'keeps selected values and event counts while allowing another selection (%s)',
    async (route) => {
      const text = (zh: string, en: string) => (route === 'zh-CN' ? zh : en)
      await language(route)
      const wrapper = await render('selection', route)
      const SelectField = (await plugins.Select()).default
      const field = wrapper.findAllComponents(SelectField)[0]
      const input = field.get('input')
      await input.trigger('keydown', { key: 'Enter' })
      await flushPromises()
      await input.trigger('keydown', { key: 'Enter' })
      await flushPromises()
      expect(field.props('modelValue')).toBe('hangzhou')
      const counts = field.emitted('update:modelValue')?.length
      await language('en-US')
      expect(field.props('modelValue')).toBe('hangzhou')
      expect(field.text()).toContain(text('杭州', 'Hangzhou'))
      expect(field.emitted('update:modelValue')?.length).toBe(counts)
      await input.trigger('keydown', { key: 'Enter' })
      await input.trigger('keydown', { key: 'ArrowDown' })
      await input.trigger('keydown', { key: 'Enter' })
      await flushPromises()
      expect(field.props('modelValue')).toBe('shanghai')
      await language('zh-CN')
      expect(field.text()).toContain(text('上海', 'Shanghai'))
      expect(field.emitted('update:modelValue')?.length).toBe((counts ?? 0) + 1)
    },
    120_000,
  )

  it.each(['zh-CN', 'en-US'] as const)(
    'finishes an in-flight save and permits failure recovery in the other language (%s)',
    async (route) => {
      const text = (zh: string, en: string) => (route === 'zh-CN' ? zh : en)
      await language(route)
      const wrapper = await render('buttonLoading', route)
      const Button = (await plugins.Button()).default
      vi.useFakeTimers()
      await button(wrapper, text('保存', 'Save')).trigger('click')
      expect(wrapper.findAllComponents(Button)[0].props('loading')).toBe(true)
      await language('en-US')
      expect(wrapper.findAllComponents(Button)[0].props('loading')).toBe(true)
      await vi.advanceTimersByTimeAsync(800)
      expect(wrapper.text()).toContain(text('保存完成', 'Saved'))
      expect(wrapper.findAllComponents(Button)[0].props('loading')).toBe(false)
      await button(wrapper, text('失败与恢复', 'Failure recovery')).trigger('click')
      await language('zh-CN')
      await vi.advanceTimersByTimeAsync(800)
      expect(wrapper.text()).toContain(text('模拟请求失败', 'Simulated failure'))
      expect(wrapper.findAllComponents(Button)[1].props('loading')).toBe(false)
      await button(wrapper, text('保存', 'Save')).trigger('click')
      await vi.advanceTimersByTimeAsync(800)
      expect(wrapper.text()).toContain(text('保存完成', 'Saved'))
    },
    120_000,
  )

  it.each(['zh-CN', 'en-US'] as const)(
    'keeps step selection and supports more clicks in both languages (%s)',
    async (route) => {
      await language(route)
      const wrapper = await render('steps', route)
      const steps = wrapper.findAll('.c-steps')
      await steps[0].findAll('.c-steps-item')[2].trigger('click')
      await language('en-US')
      for (const group of wrapper.findAll('.c-steps'))
        expect(group.findAll('.c-steps-item')[2].classes()).toContain('c-steps-item-active')
      await wrapper.findAll('.c-steps')[1].findAll('.c-steps-item')[0].trigger('click')
      await language('zh-CN')
      for (const group of wrapper.findAll('.c-steps'))
        expect(group.findAll('.c-steps-item')[0].classes()).toContain('c-steps-item-active')
    },
    120_000,
  )
  it.each(['zh-CN', 'en-US'] as const)(
    'keeps a pending quantity proposal and approves it after changing language (%s)',
    async (route) => {
      const text = (zh: string, en: string) => (route === 'zh-CN' ? zh : en)
      await language(route)
      const wrapper = await render('quantity', route)
      const NumberField = (await plugins.InputNumber()).default
      const field = wrapper.findAllComponents(NumberField)[1]
      await field.get('input').trigger('keydown', { key: 'ArrowUp' })
      expect(wrapper.text()).toContain(text('等待提交 3', 'Waiting to commit 3'))
      await language('en-US')
      expect(wrapper.text()).toContain(text('等待提交 3', 'Waiting to commit 3'))
      expect(field.props('modelValue')).toBe(2)
      await button(wrapper, text('允许本次变更', 'Approve')).trigger('click')
      await flushPromises()
      expect(field.props('modelValue')).toBe(3)
      expect(wrapper.text()).toContain(text('已允许', 'Approved'))
      await language('zh-CN')
      expect(wrapper.text()).toContain(text('已允许', 'Approved'))
      expect(field.props('modelValue')).toBe(3)
    },
    120_000,
  )
  it.each(['zh-CN', 'en-US'] as const)(
    'rejects, cancels and restores quantity controls across language changes (%s)',
    async (route) => {
      const text = (zh: string, en: string) => (route === 'zh-CN' ? zh : en)
      await language(route)
      const wrapper = await render('quantity', route)
      const NumberField = (await plugins.InputNumber()).default
      const field = wrapper.findAllComponents(NumberField)[1]
      await field.get('input').trigger('keydown', { key: 'ArrowUp' })
      await language('en-US')
      await button(wrapper, text('拒绝本次变更', 'Reject')).trigger('click')
      await flushPromises()
      expect(field.props('modelValue')).toBe(2)
      await language('zh-CN')
      expect(wrapper.text()).toContain(text('已拒绝', 'Rejected'))
      await field.get('input').trigger('keydown', { key: 'ArrowUp' })
      await language('en-US')
      await button(wrapper, text('禁用控件', 'Disable')).trigger('click')
      await flushPromises()
      expect(wrapper.text()).toContain(text('已取消，旧结果不再生效', 'Cancelled; old result ignored'))
      expect(field.props('modelValue')).toBe(2)
      await button(wrapper, text('恢复可用', 'Enable')).trigger('click')
      await field.get('input').trigger('keydown', { key: 'ArrowUp' })
      await button(wrapper, text('允许本次变更', 'Approve')).trigger('click')
      await flushPromises()
      expect(field.props('modelValue')).toBe(3)
    },
    120_000,
  )
  it.each(['zh-CN', 'en-US'] as const)(
    'recovers from a failed quantity proposal without publishing the failed value (%s)',
    async (route) => {
      const text = (zh: string, en: string) => (route === 'zh-CN' ? zh : en)
      await language(route)
      const wrapper = await render('quantity', route)
      const NumberField = (await plugins.InputNumber()).default
      const field = wrapper.findAllComponents(NumberField)[1]
      await language('en-US')
      await field.get('input').trigger('keydown', { key: 'ArrowUp' })
      await language('zh-CN')
      await button(wrapper, text('模拟失败', 'Simulate failure')).trigger('click')
      await flushPromises()
      expect(field.props('modelValue')).toBe(2)
      expect(field.emitted('update:modelValue')).toBeUndefined()
      expect(wrapper.text()).toContain(text('请求失败，保留原值', 'Request failed; value preserved'))
      await language('en-US')
      expect(wrapper.text()).toContain(text('请求失败，保留原值', 'Request failed; value preserved'))
      await field.get('input').trigger('keydown', { key: 'ArrowUp' })
      await button(wrapper, text('允许本次变更', 'Approve')).trigger('click')
      await flushPromises()
      expect(field.props('modelValue')).toBe(3)
      expect(field.emitted('update:modelValue')).toHaveLength(1)
    },
    120_000,
  )
})
