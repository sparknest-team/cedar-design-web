import type { ExtractPropTypes, PropType } from 'vue'
import { defineListenerProp } from '../_utils/components'

/**
 * Alert 类型（状态色系，与 `Status` 对齐；瞬时消息类用 `MessageType` 含 `error`）
 */
export type AlertType = 'info' | 'success' | 'warning' | 'danger' | 'default'

/**
 * Alert 视觉变体
 * - tonal：浅色填充
 * - outlined：透明描边
 * - standard：浅色填充 + 描边（默认）
 */
export type AlertVariant = 'tonal' | 'outlined' | 'standard'

export const alertProps = {
  /**
   * 警告提示的类型
   */
  type: {
    type: String as PropType<AlertType>,
    default: 'info',
  },
  /**
   * 视觉变体
   */
  variant: {
    type: String as PropType<AlertVariant>,
    default: 'standard',
  },
  /**
   * 警告提示的标题
   */
  title: String,
  /**
   * 警告提示的内容；与默认 slot 同时存在时 slot 优先
   */
  message: String,
  /**
   * 是否展示图标
   */
  showIcon: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否展示关闭按钮
   */
  closable: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否作为顶部公告使用（去除边框和圆角）
   */
  banner: {
    type: Boolean,
    default: false,
  },
  /**
   * 内容是否居中显示
   */
  center: {
    type: Boolean,
    default: false,
  },
  /**
   * 自定义背景色，仅覆盖 background-color
   */
  color: String,
  /**
   * 投影层级
   */
  elevation: {
    type: [Boolean, String, Number] as PropType<boolean | string | number>,
    default: false,
  },
  /**
   * 关闭按钮点击事件
   */
  onClose: defineListenerProp<(e: MouseEvent) => void>(),
  /**
   * 关闭过渡结束事件
   */
  onAfterClose: defineListenerProp<() => void>(),
}

export type AlertProps = ExtractPropTypes<typeof alertProps>
