import type { ExtractPropTypes, PropType } from 'vue'
import { defineListenerProp } from '../_utils/components'
import type { BreadcrumbRoute } from './types'
import type { DropDownProps } from '../dropdown'


export const breadcrumbProps = {
  /**
   * 最多展示的面包屑数量（0 表示不限制）
   */
  maxCount: {
    type: Number,
    default: 0,
  },
  /**
   * 通过路径数据渲染面包屑
   */
  routes: {
    type: Array as PropType<BreadcrumbRoute[]>,
  },
  /**
   * 分隔符文字
   */
  separator: {
    type: [String, Number] as PropType<string | number>,
    default: '/',
  },
  /**
   * 自定义 routes 模式下的链接地址
   */
  customUrl: {
    type: Function as PropType<(paths: string[]) => string>,
  },
  /**
   * 是否开启滚动吸附（基于 Affix 组件）
   */
  sticky: {
    type: Boolean,
    default: false,
  },
  /**
   * 距窗口顶部达到指定偏移量后触发吸附，仅在 `sticky` 为 `true` 时生效
   */
  offsetTop: {
    type: Number,
  },
  /**
   * 距窗口底部达到指定偏移量后触发吸附，仅在 `sticky` 为 `true` 时生效
   */
  offsetBottom: {
    type: Number,
  },
  /**
   * 滚动容器，默认是 `window`，仅在 `sticky` 为 `true` 时生效
   */
  target: {
    type: [String, Object, Function] as PropType<string | HTMLElement | Window>,
  },
  /**
   * `target` 的外层滚动元素，默认是 `window`，仅在 `sticky` 为 `true` 时生效
   */
  targetContainer: {
    type: [String, Object, Function] as PropType<string | HTMLElement | Window>,
  },
}

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>


export const breadcrumbItemProps = {
  /**
   * 分隔符文字（覆盖父级 `separator`）
   */
  separator: {
    type: [String, Number] as PropType<string | number>,
  },
  /**
   * 下拉菜单内容
   */
  droplist: {
    type: Array as PropType<BreadcrumbRoute['children']>,
  },
  /**
   * 下拉菜单属性
   */
  dropdownProps: {
    type: Object as PropType<DropDownProps>,
  },
  /**
   * 点击事件
   */
  onClick: defineListenerProp<(e: Event) => void>(),
}

export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>
