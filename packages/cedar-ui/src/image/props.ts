import type { PropType } from 'vue'
import type { ImagePreviewProps } from './types'

export const imageProps = {
  renderToBody: {
    type: Boolean,
    default: true,
  },
  /**
   * @zh 图片获取地址
   * @en Image src
   */
  src: {
    type: String,
  },
  /**
   * @zh 图片显示宽度
   * @en Image width
   */
  width: {
    type: [String, Number] as PropType<string | number>,
  },
  /**
   * @zh 图片显示高度
   * @en Image height
   */
  height: {
    type: [String, Number] as PropType<string | number>,
  },
  /**
   * @zh 标题
   * @en Title
   */
  title: {
    type: String,
  },
  /**
   * @zh 描述，将显示在底部，如果 alt 没有值，则会将其设置给 alt
   * @en Description, will be displayed at the bottom. if alt has no value, it will be set to alt
   */
  description: {
    type: String,
  },
  /**
   * @zh 确定图片如何适应容器框
   * @en indicate how the image should be resized to fit its container
   */
  fit: {
    type: String as PropType<'contain' | 'cover' | 'fill' | 'none' | 'scale-down'>,
  },
  /**
   * @zh 图片的文字描述
   * @en Text description of the image
   */
  alt: {
    type: String,
  },
  /**
   * @zh 是否隐藏 footer（2.36.0 版本支持 'never' 参数，支持在加载错误时显示底部内容）
   * @en Whether to hide footer (Version 2.36.0 supports the 'never' parameter, which supports displaying bottom content when loading errors)
   */
  hideFooter: {
    type: [Boolean, String] as PropType<boolean | 'never'>,
    default: false,
  },
  /**
   * @zh 底部显示的位置
   * @en The position shown at the bottom
   */
  footerPosition: {
    type: String as PropType<'inner' | 'outer'>,
    default: 'inner',
  },
  /**
   * @zh 是否显示加载中效果
   * @en Whether to show the loading effect
   */
  showLoader: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 是否开启预览
   * @en Whether to enable preview
   */
  preview: {
    type: Boolean,
    default: true,
  },
  /**
   * @zh 控制预览的打开状态，可与 previewOpenChange 配合使用
   * @en Control the open state of the preview, can be used in conjunction with previewOpenChange
   * @vModel
   */
  previewOpen: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @zh 预览的默认打开状态
   * @en The default open state of the preview
   */
  defaultPreviewOpen: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 预览的配置项（所有选项都是可选的） [ImagePreviewProps](#image-preview%20Props)
   * @en Preview configuration items (all options are optional) [ImagePreviewProps](#image-preview%20Props)
   */
  previewProps: {
    type: Object as PropType<ImagePreviewProps>,
  },
  /**
   * @zh 底部显示区域的类名
   * @en The class name of the bottom display area
   * @version 2.23.0
   */
  footerClass: {
    type: [String, Array, Object],
  },
} 
