import type { ExtractPropTypes } from 'vue'

export const loadingProps = {
  /**
   * 类型定义
   */
  type: String,
}

export type LoadingProps = ExtractPropTypes<typeof loadingProps>
