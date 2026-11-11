import { mount } from '@vue/test-utils'
import { beforeAll, afterAll, expect, test } from 'vitest'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import less from 'less'
import Loading from '..'

let stylesheet
beforeAll(async () => {
  const filename = fileURLToPath(new URL('../style/index.less', import.meta.url))
  const { css } = await less.render(readFileSync(filename, 'utf8'), { filename })
  stylesheet = document.createElement('style')
  stylesheet.textContent = css
  document.head.appendChild(stylesheet)
})
afterAll(() => stylesheet.remove())

test.each(['wave', 'cube', 'rect', 'disappear'])('%s numeric size gives animation primitives nonzero dimensions', async type => {
  const wrapper = mount(Loading, { props: { type, size: 20 }, attachTo: document.body })
  try {
    const container = () => wrapper.find(`.c-loading__${type}`)
    const items = () => wrapper.findAll(`.c-loading__${type}-item`)
    expect(container().element.style.width).toBe('20px')
    for (const item of items()) {
      const style = getComputedStyle(item.element)
      // jsdom keeps percentages; the browser also checks their resolved pixel sizes.
      expect(parseFloat(style.width)).toBeGreaterThan(0)
      expect(parseFloat(style.height)).toBeGreaterThan(0)
      expect(style.animation || style.animationName).toContain(type)
    }
    await wrapper.setProps({ size: 'sm' })
    expect(container().element.style.width).toBe('')
    expect(items()[0].classes()).toContain(`c-loading__${type}-item--sm`)
    await wrapper.setProps({ size: 40 })
    expect(container().element.style.width).toBe('40px')
    expect(items()[0].classes()).toContain(`c-loading__${type}-item--numeric`)
  } finally { wrapper.unmount() }
})
