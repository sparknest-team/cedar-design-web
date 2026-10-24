import { defineComponent, h } from "vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { IconAlert, IconCheckCircle } from '@cedar-design/icons-vue'
import IconComponent from "..";

describe("icon public contract", () => {
  it("exports a namespaced component", () => {
    expect(IconComponent).toBeTruthy();
    expect(IconComponent.name).toMatch(/^C/);
  });

  it("resolves name from explicitly registered application components", () => {
    const IconCheckCircleFill = defineComponent({
      template: '<svg class="registered-icon" />',
    });
    const wrapper = mount(IconComponent, {
      props: { name: "check-circle-fill" },
      global: { components: { IconCheckCircleFill } },
    });

    expect(wrapper.find("svg.registered-icon").exists()).toBe(true);
  });

  it('resolves icons installed by the Cedar icon package', () => {
    const wrapper = mount(IconComponent, {
      props: { name: 'check-circle' },
      global: { plugins: [IconCheckCircle] },
    })

    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('passes its size to a slotted SVG through em units', () => {
    const wrapper = mount(IconComponent, {
      props: { size: '28' },
      slots: { default: () => h(IconCheckCircle) },
    })

    expect(wrapper.attributes('style')).toContain('font-size: 28px')
    expect(wrapper.find('svg').attributes('width')).toBe('1em')
    expect(wrapper.find('svg').attributes('height')).toBe('1em')
    expect(wrapper.find('svg').attributes('stroke')).toBe('currentColor')
  })

  it('does not apply Cedar outline strokes to supplemental fill icons', () => {
    const wrapper = mount(IconAlert)

    expect(wrapper.attributes('style')).toContain('fill: currentColor')
    expect(wrapper.attributes('style')).toContain('stroke: none')
  })

  it('supports the shared standalone icon props', () => {
    const wrapper = mount(IconCheckCircle, {
      props: {
        size: '24',
        color: 'rgb(255, 0, 0)',
        rotate: 90,
        title: 'success',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
    })

    expect(wrapper.attributes('style')).toContain('font-size: 24px')
    expect(wrapper.attributes('style')).toContain('color: rgb(255, 0, 0)')
    expect(wrapper.attributes('style')).toContain('transform: rotate(90deg)')
    expect(wrapper.attributes('stroke-width')).toBe('2')
    expect(wrapper.attributes('stroke-linecap')).toBe('round')
    expect(wrapper.attributes('stroke-linejoin')).toBe('round')
    expect(wrapper.attributes('aria-hidden')).toBe('false')
    expect(wrapper.find('title').text()).toBe('success')
  })

  it('supports the shared wrapper props', () => {
    const wrapper = mount(IconComponent, {
      props: {
        name: 'check-circle',
        size: 28,
        color: 'blue',
        rotate: 45,
        spin: true,
        transition: 120,
      },
      global: { components: { IconCheckCircle } },
    })

    expect(wrapper.classes()).toContain('c-icon-spin')
    expect(wrapper.attributes('style')).toContain('font-size: 28px')
    expect(wrapper.attributes('style')).toContain('color: blue')
    expect(wrapper.attributes('style')).toContain('rotate: 45deg')
    expect(wrapper.attributes('style')).toContain('transition-duration: 120ms')
  })
});
