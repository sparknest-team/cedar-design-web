import type { ExtractPropTypes } from 'vue'

export const iconProps = {
  /**
   * 已显式注册到当前 Vue 应用的图标名称
   */
  name: String,
  /**
   * 自定义类型类名
   */
  type: String,
  /**
   * 图标尺寸
   */
  size: [Number, String],
  /**
   * 图标颜色
   */
  color: String,
  /**
   * 旋转角度
   */
  rotate: Number,
  /**
   * 是否持续旋转
   */
  spin: Boolean,
}

export type ComponentProps = ExtractPropTypes<typeof iconProps>
