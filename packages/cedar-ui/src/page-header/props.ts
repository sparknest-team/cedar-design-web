import type { ExtractPropTypes, PropType } from 'vue'

export const pageHeaderProps = {
  /**
   * @zh 页头的主标题
   * @en Main title
   */
  title: String,
  /**
   * @zh 页头的次标题
   * @en Subtitle
   */
  subtitle: String,
  /**
   * @zh 是否显示返回按钮
   * @en Whether to show the back button
   */
  showBack: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
}

export type PageHeaderProps = ExtractPropTypes<typeof pageHeaderProps>
