import type { ExtractPropTypes, PropType } from 'vue'
import { Status, Size } from '../_utils/constant'
import { defineListenerProp } from '../_utils/components'


export type ButtonVariant = 'default' | 'text' | 'outline' | 'link' | 'tonal'

export const buttonProps = {
  /**
   * 按钮主题色
   */
  status: {
    type: String as PropType<Status>,
  },
  /**
   * 变体
   */
  variant: {
    type: String as PropType<ButtonVariant>,
  },
  /**
   * 是否为圆形按钮
   */
  round: {
    type: Boolean,
    default: false,
  },
  /**
   * 原生按钮类型： button | submit | reset
   */
  htmlType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
  /**
   * 组件标签
   */
  component: {
    type: String as PropType<'button' | 'a'>,
    default: 'button',
  },
  /**
   * 是否为块级元素
   */
  block: {
    type: Boolean,
    default: false,
  },
  /**
   * 按钮尺寸
   */
  size: {
    type: String as PropType<Size>
  },
  /**
   * 是否为加载中状态
   */
  loading: {
    type: Boolean,
    default: false,
  },
  /**
   * 加载类型
   */
  loadingType: {
    type: String as PropType<'default' | 'fill' | 'line'>,
    default: 'default',
  },
  /**
   * 是否自动loading，方便处理异步任务
   */
  autoLoading: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否为图标容器
   */
  iconContainer: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否为禁用状态
   */
  disabled: {
    type: Boolean,
    default: undefined
  },
  /**
   * 是否使用水波纹
   */
  ripple: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否可以被聚焦
   */
  focusable: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否自动聚焦
   */
  autofocus: {
    type: Boolean,
    default: false,
  },
  /**
   * 文字颜色
   */
  textColor: {
    type: String
  },
  /**
   * 背景颜色
   */
  color: {
    type: String
  },
  /**
   * 海拔高度可选值为 true、false 和 0-24 的等级
   */
  elevation: {
    type: [Boolean, Number] as PropType<boolean | number>,
    default: true,
  },
  /**
   * 是否为堆叠状态
   */
  stacked: {
    type: Boolean,
    default: undefined,
  },
  onClick: defineListenerProp<(e: Event) => void | Promise<any>>(),
  onTouchstart: defineListenerProp<(e: Event) => void | Promise<any>>(),
}
export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export const buttonGroupProps = {
  /**
   * 按钮组尺寸
   */
  size: {
    type: String as PropType<Size>,
    default: 'md',
  },
  /**
   * 按钮组主题色
   */
  status: {
    type: String as PropType<Status>,
    default: 'default',
  },
  /**
   * 按钮组变体
   */
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'default',
  },
  /**
   * 按钮组背景色
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * 按钮组文字颜色
   */
  textColor: {
    type: String,
    default: '',
  },
  /**
   * 是否为堆叠状态
   */
  stacked: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否为禁用
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否为垂直排列
   */
  vertical: {
    type: Boolean,
    default: false,
  },
  /**
 * 海拔高度可选值为 true、false 和 0-24 的等级
 */
  elevation: {
    type: [Boolean, Number] as PropType<boolean | number>,
    default: true,
  },
}

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
