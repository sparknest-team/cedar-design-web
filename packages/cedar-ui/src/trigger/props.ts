import { triggerRenderProps } from './render-props'
import type { PropType } from 'vue'
import type { TriggerPosition } from '../_utils/constant'
import { popupContainerProp } from '../_utils/popup-container'
import type { TriggerPopupTranslate } from './types'
import { triggerInteractionProps } from './interaction-props'

export const triggerProps = {
  ...triggerInteractionProps,
  ...triggerRenderProps,
    /**
     * @zh 弹出位置
     * @en Popup placement
     * @values 'top','top-start','top-end','bottom','bottom-start','bottom-end','left','left-start','left-end','right','right-start','right-end'
     */
    placement: {
      type: String as PropType<TriggerPosition>,
      default: 'bottom',
    },
    cover: Boolean,
    /**
     * @zh 弹出框的偏移量（弹出框距离触发器的偏移距离）
     * @en The offset of the popup (the offset distance of the popup from the trigger)
     */
    popupOffset: {
      type: Number,
      default: 0,
    },
    /**
     * @zh 弹出框的移动距离
     * @en The moving distance of the popup
     */
    popupTranslate: {
      type: [Array, Object] as PropType<TriggerPopupTranslate>,
    },
    /**
     * @zh 弹出框是否跟随鼠标
     * @en Whether the popup follows the mouse
     */
    alignPoint: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 弹出动画的name
     * @en The name of the popup animation
     */
    animationName: {
      type: String,
      default: 'fade-in',
    },
    /**
     * @zh 是否将弹出框宽度设置为触发器宽度
     * @en Whether to set the width of the popup to the width of the trigger
     */
    autoFitPopupWidth: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否将弹出框的最小宽度设置为触发器宽度
     * @en Whether to set the minimum width of the popup to the trigger width
     */
    autoFitPopupMinWidth: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 当触发器的尺寸发生变化时，是否重新计算弹出框位置
     * @en When the size of the trigger changes, whether to recalculate the position of the popup
     */
    autoFixPosition: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for popup
     */
    popupContainer: popupContainerProp,
    /**
     * @zh 是否在容器滚动时更新弹出框的位置
     * @us Whether to update the position of the popup when the container is scrolled
     */
    updateAtScroll: {
      type: Boolean,
      default: false,
    },
    autoFitTransformOrigin: {
      type: Boolean,
      default: false,
    },
    hideEmpty: {
      type: Boolean,
      default: false,
    },
    openedClass: {
      type: [String, Array, Object],
    },
    /**
     * @zh 是否自动调整弹出框位置，以适应窗口大小
     * @en Whether to automatically adjust the position of the popup to fit the window size
     */
    autoFitPosition: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否阻止弹出层中的元素点击时获取焦点
     * @en Whether to prevent elements in the pop-up layer from gaining focus when clicked
     */
    preventFocus: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否在滚动时关闭弹出框
     * @en Whether to close the popover when scrolling
     * @version 2.46.0
     */
    scrollToClose: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 滚动阈值，当滚动距离超过该值时触发关闭
     * @en Scroll threshold, trigger close when the scroll distance exceeds this value
     */
    scrollToCloseDistance: {
      type: Number,
      default: 0,
    },
  }
