import { Fragment, createSSRApp, h } from 'vue'
import { mount } from '@vue/test-utils'
import { renderToString } from '@vue/server-renderer'
import { describe, expect, test } from 'vitest'
import { Avatar, AvatarGroup } from '../index'

describe('Avatar same source', () => {
  test('renders on the server without starting browser work', async () => {
    const html = await renderToString(
      createSSRApp({
        render: () =>
          h(AvatarGroup, { maxCount: 1, size: 32 }, () => [
            h(Avatar, null, () => 'A'),
            h(Avatar, { imageUrl: '/a.png', alt: 'Ada' }),
          ]),
      }),
    )
    expect(html).toContain('c-avatar')
    expect(html).toContain('c-avatar-group')
    expect(html).toContain('c-avatar--circle')
    expect(html).toContain('+1')
  })

  test('group size reaches children and z-index follows zIndexAscend', () => {
    const wrapper = mount(AvatarGroup, {
      props: { size: 48, zIndexAscend: true },
      slots: {
        default: () => h(Fragment, [h(Avatar), h(Avatar)]),
      },
    })
    const items = wrapper.findAll('.c-avatar')
    expect(items).toHaveLength(2)
    expect(items[0].attributes('style')).toContain('width: 48px')
    expect(items[0].attributes('style')).toContain('z-index: 1')
    expect(items[1].attributes('style')).toContain('z-index: 2')
    wrapper.unmount()
  })
})
