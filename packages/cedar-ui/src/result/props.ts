import type { ExtractPropTypes, PropType } from 'vue'

export const resultStatuses = ['info', 'success', 'warning', 'danger', 'question', 'empty', '403', '404', '500'] as const

export type ResultStatus = (typeof resultStatuses)[number]

export const resultProps = {
  /** 结果页显示的状态。 */
  status: {
    type: String as PropType<ResultStatus>,
    default: 'info',
    validator: (value: unknown): value is ResultStatus =>
      resultStatuses.includes(value as ResultStatus),
  },
  /** 标题内容。 */
  title: String,
  /** 子标题内容。 */
  subtitle: String,
} 

export type ResultProps = import("vue").ExtractPublicPropTypes<typeof resultProps>
