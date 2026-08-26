import type { ExtractPropTypes, PropType } from 'vue'
import type { Direction } from '../_utils/constant'
import type { StepStatus, StepsType } from './types'

export type { StepStatus, StepsType, StepData } from './types'

export const stepsProps = {
  /**
   * 步骤条的类型（仅 PC）
   */
  type: {
    type: String as PropType<StepsType>,
    default: 'default' as StepsType,
  },
  /**
   * 步骤条的显示方向
   */
  direction: {
    type: String as PropType<Direction>,
    default: 'horizontal' as Direction,
  },
  /**
   * 标签描述文字放置的位置（仅 PC）
   */
  labelPlacement: {
    type: String as PropType<Direction>,
    default: 'horizontal' as Direction,
  },
  /**
   * 当前步骤数（受控，从 1 起计）
   */
  current: {
    type: Number,
    default: undefined,
  },
  /**
   * 默认的步骤数（非受控，从 1 起计）
   */
  defaultCurrent: {
    type: Number,
    default: 1,
  },
  /**
   * 当前步骤的状态
   */
  status: {
    type: String as PropType<StepStatus>,
    default: 'process' as StepStatus,
  },
  /**
   * 是否显示连接线（仅 PC）
   */
  showLine: {
    type: Boolean,
    default: true,
  },
  /**
   * 是否使用小型步骤条（仅 PC；dot 模式无效）
   */
  small: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否可以点击切换步骤
   */
  changeable: {
    type: Boolean,
    default: false,
  },
}

export const stepProps = {
  /**
   * 步骤的标题
   */
  title: String,
  /**
   * 步骤的描述信息
   */
  description: String,
  /**
   * 步骤的状态（覆盖自动推导）
   */
  status: {
    type: String as PropType<StepStatus>,
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean,
    default: false,
  },
}

export type StepsProps = ExtractPropTypes<typeof stepsProps>
export type StepProps = ExtractPropTypes<typeof stepProps>
