import StepTypes from '../steps/__demos__/types.vue'
import { flushPromises, mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Cedar from '../cedar-vue'
import Icons from '@cedar-design/icons-vue'
import Dialog from '../dialog'
import Loading from '../loading'
import DialogComparison from '../dialog/__demos__/size-comparison.vue'

const modules = import.meta.glob('../*/__demos__/*comparison.vue', { eager: true })
const globals = {
  plugins: [Cedar, Icons],
  components: { CLoading: Loading },
  provide: { [Symbol.for('v-scx')]: { modules: new Set() } },
  config: {
    warnHandler(message: string) {
      if (/was accessed during render but is not defined|Failed to resolve component/.test(message)) throw new Error(message)
    },
  },
}

describe('authored configuration comparisons', () => {
  for (const [file, load] of Object.entries(modules)) {
    test(file, async () => {
      const module = load as { default: any }
      const owner = mount(module.default, { global: globals, attachTo: document.body })
      try {
        await flushPromises()
        expect(owner.findAll('[data-comparison-scene]').length || owner.findAll('[data-config-comparison]').length * 2).toBeGreaterThanOrEqual(2)
        expect(owner.findAll('[data-comparison-scene]').length).toBeLessThanOrEqual(3)
      } finally { owner.unmount() }
    }, 15000)
  }
})

test('merged dialog launchers keep isolated state and working handlers', async () => {
  const owner = mount(DialogComparison, { global: globals, attachTo: document.body })
  try {
    await owner.get('button').trigger('click')
    await flushPromises()
    const dialogs = owner.findAllComponents(Dialog)
    expect(dialogs[0].props('open')).toBe(true)
    expect(dialogs.slice(1).every(dialog => !dialog.props('open'))).toBe(true)
    dialogs[0].vm.$emit('cancel')
    await flushPromises()
    expect(dialogs.every(dialog => !dialog.props('open'))).toBe(true)
  } finally { owner.unmount() }
})

const appearanceModules = import.meta.glob('../*/__demos__/appearance-lab.vue', { eager: true })
const stateModules = import.meta.glob('../*/__demos__/state-lab.vue', { eager: true })
const targetModules = import.meta.glob('../*/index.ts', { eager: true })

describe('live configuration models', () => {
  for (const [file, load] of Object.entries(appearanceModules)) {
    test(file + ' compares a complete axis', async () => {
      const module = load as { default: any }
      const owner = mount(module.default, { global: globals, attachTo: document.body })
      try {
        await flushPromises()
        if (!file.includes('/message/')) expect(owner.findAll('.demo-config-comparison > section').length).toBeGreaterThan(1)
        const axis = owner.findAllComponents({ name: 'CRadioGroup' }).at(-1)
        const choices = axis.props('options')
        if (choices.length > 1) {
          axis.vm.$emit('update:modelValue', choices[1].value)
          await flushPromises()
          expect(owner.text()).toContain(choices[1].value + '=')
        }
        if (/\/(input|textarea)\//.test(file)) {
          const family = file.split('/')[1]
          const target = targetModules['../' + family + '/index.ts'] as { default: any }
          const controls = owner.findAllComponents(target.default)
          expect(controls.length).toBeGreaterThan(1)
          controls[0].vm.$emit('update:modelValue', 'Shared comparison value')
          await flushPromises()
          expect(controls.every(control => control.props('modelValue') === 'Shared comparison value')).toBe(true)
        }
      } finally { owner.unmount() }
    }, 15000)
  }
  for (const [file, load] of Object.entries(stateModules)) {
    test(file + ' recovers after disabling the target', async () => {
      const module = load as { default: any }
      const family = file.split('/')[1]
      const target = targetModules['../' + family + '/index.ts'] as { default: any }
      const owner = mount(module.default, { global: globals, attachTo: document.body })
      try {
        await flushPromises()
        const controls = owner.findAllComponents({ name: 'CCheckbox' })
        const first = controls[0]
        const specimen = owner.findAllComponents(target.default).at(-1)
        const disabled = first.text().includes('disabled')
        const key = disabled ? 'disabled' : 'readonly'
        await first.get('input').setValue(true)
        await flushPromises()
        expect(specimen.props(key)).toBe(true)
        expect(first.get('input').element.disabled).toBe(false)
        await first.get('input').setValue(false)
        await flushPromises()
        expect(specimen.props(key)).toBe(false)
      } finally { owner.unmount() }
    }, 15000)
  }
})


test('form sizing switches preserve one live model and dynamic fields', async () => {
  const owner = mount(modules['../form/__demos__/label-width-comparison.vue'].default, { global: { plugins: [Cedar] }, attachTo: document.body })
  try {
    const form = owner.findComponent({ name: 'CForm' })
    const input = form.findAll('input')[0]
    await input.setValue('Shared form value')
    const mode = owner.findComponent({ name: 'CRadioGroup' })
    for (const value of ['columns', 'fixed', 'auto']) {
      mode.vm.$emit('update:modelValue', value)
      await flushPromises()
      expect(form.props('model').name).toBe('Shared form value')
      expect(form.props('autoLabelWidth')).toBe(value === 'auto')
      if (value === 'fixed') expect(form.props('labelColFlex')).toBe('6rem')
      if (value === 'columns') expect(form.props('labelColProps')).toEqual({ span: 6, xs: 24, sm: 6 })
    }
    await owner.findComponent({ name: 'CCheckbox' }).get('input').setValue(false)
    expect(form.findAllComponents({ name: 'CFormItem' })).toHaveLength(2)
    await owner.findComponent({ name: 'CCheckbox' }).get('input').setValue(true)
    expect(form.findAllComponents({ name: 'CFormItem' })).toHaveLength(3)
    expect(form.get('input').element.value).toBe('Shared form value')
  } finally { owner.unmount() }
})

test('carousel indicator comparisons share the active slide', async () => {
  const owner = mount(modules['../carousel/__demos__/indicator-comparison.vue'].default, { global: { plugins: [Cedar] }, attachTo: document.body })
  try {
    const carousels = owner.findAllComponents({ name: 'CCarousel' })
    expect(carousels.length).toBeGreaterThan(3)
    carousels[0].vm.$emit('update:modelValue', 2)
    await flushPromises()
    expect(carousels.every(carousel => carousel.props('modelValue') === 2)).toBe(true)
    expect(owner.get('[role=status]').text()).toContain('2')
  } finally { owner.unmount() }
})


test('message presets open the visible specimen and can reopen it', async () => {
  const owner = mount(appearanceModules['../message/__demos__/appearance-lab.vue'].default, { global: { plugins: [Cedar] }, attachTo: document.body })
  try {
    const message = owner.findComponent({ name: 'CMessage' })
    const preset = owner.findAll('button').find(button => button.text().includes('variant='))
    expect(message.props('open')).toBe(false)
    await preset.trigger('click')
    expect(message.props('open')).toBe(true)
    message.vm.$emit('update:open', false)
    await flushPromises()
    expect(message.props('open')).toBe(false)
    await preset.trigger('click')
    expect(message.props('open')).toBe(true)
  } finally { owner.unmount() }
})


test('step type comparisons share progress and status', async () => {
 const owner=mount(StepTypes,{global:{plugins:[Cedar]},attachTo:document.body})
 try {
 const steps=owner.findAllComponents({name:'CSteps'})
 expect(steps).toHaveLength(4)
 steps[0].vm.$emit('update:modelValue',3)
 await flushPromises()
 expect(steps.every(step=>step.props('modelValue')===3)).toBe(true)
 const status=owner.findAllComponents({name:'CRadioGroup'}).at(-1)
 status.vm.$emit('update:modelValue','error')
 await flushPromises()
 expect(steps.every(step=>step.props('status')==='error')).toBe(true)
 } finally {owner.unmount()}
})
