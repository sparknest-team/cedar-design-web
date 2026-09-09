import { popupContainerProp } from '../_utils/popup-container'
import type { CSSProperties, ExtractPropTypes, PropType, StyleValue } from 'vue'
import type { ButtonProps } from '../button'

export const DRAWER_PLACEMENTS = ['top', 'right', 'bottom', 'left'] as const
export type DrawerPlacement = (typeof DRAWER_PLACEMENTS)[number]

export const drawerProps = {
    /**
     * @zh 抽屉是否可见
     * @en Whether the drawer is visible
     * @v-model
     */
    open: {
      type: Boolean,
      default: undefined,
    },
    /**
     * @zh 抽屉默认是否可见（非受控模式）
     * @en Whether the drawer is visible by default (uncontrolled mode)
     */
    defaultOpen: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 抽屉放置的位置
     * @en Where the drawer is placed
     * @values 'top','right','bottom','left'
     */
    placement: {
      type: String as PropType<DrawerPlacement>,
      default: 'right',
      validator: (value: any) => DRAWER_PLACEMENTS.includes(value),
    },
    /**
     * @zh 标题
     * @en Title
     */
    title: String,
    /**
     * @zh 是否显示背景层
     * @en Whether to show the overlay
     */
    overlay: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 背景层的类名
     * @en Class name of the overlay
     */
    overlayClass: String,
    /**
     * @zh 背景层的样式
     * @en Style of the overlay
     */
    overlayStyle: {
      type: Object as PropType<CSSProperties>,
    },
    /**
     * @zh 点击背景层是否可以关闭
     * @en Click on the overlay layer to be able to close
     */
    overlayClosable: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否展示关闭按钮
     * @en Whether to show the close button
     */
    closable: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 确认按钮的内容
     * @en The content of the ok button
     */
    confirmButtonText: String,
    /**
     * @zh 取消按钮的内容
     * @en The content of the cancel button
     */
    cancelText: String,
    /**
     * @zh 确认按钮是否为加载中状态
     * @en Whether the ok button is in the loading state
     */
    confirmButtonLoading: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 确认按钮的Props
     * @en Props of confirm button
     * @version 2.9.0
     */
    confirmButtonProps: {
      type: Object as PropType<ButtonProps>,
    },
    /**
     * @zh 取消按钮的Props
     * @en Props of cancel button
     * @version 2.9.0
     */
    cancelButtonProps: {
      type: Object as PropType<ButtonProps>,
    },
    /**
     * @zh 关闭时是否卸载节点
     * @en Whether to uninstall the node when close
     * @version 2.12.0
     */
    unmountOnClose: Boolean,
    /**
     * @zh 抽屉的宽度（仅在placement为right,left时可用）
     * @en The width of the drawer (only available when placement is right, left)
     */
    width: {
      type: [Number, String],
      default: 250,
    },
    /**
     * @zh 抽屉的高度（仅在placement为top,bottom时可用）
     * @en The height of the drawer (only available when placement is top, bottom)
     */
    height: {
      type: [Number, String],
      default: 250,
    },
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for popup
     */
    popupContainer: popupContainerProp,
    /**
     * @zh 抽屉的样式
     * @en Drawer style
     */
    drawerStyle: {
      type: Object as PropType<CSSProperties>,
    },
    /**
     * @zh 抽屉内容部分的类名
     * @en The classname of the drawer body
     * @version 2.57.0
     */
    bodyClass: {
      type: [String, Array] as PropType<string | any[]>,
    },
    /**
     * @zh 抽屉内容部分的样式
     * @en Drawer body style
     * @version 2.57.0
     */
    bodyStyle: {
      type: [String, Object, Array] as PropType<StyleValue>,
    },
    /**
     * @zh 触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。
     * @en The callback function before the ok event is triggered. If false is returned, subsequent events will not be triggered, and done can also be used to close asynchronously.
     */
    beforeConfirm: {
      type: Function as PropType<(done: (closed: boolean) => void) => void | boolean | Promise<void | boolean>>,
    },
    /**
     * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
     * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
     */
    beforeCancel: {
      type: Function as PropType<() => boolean>,
    },
    /**
     * @zh 是否支持 ESC 键关闭抽屉
     * @en Whether to support the ESC key to close the dialog
     * @version 2.15.0
     */
    escToClose: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 背景层动画名称
     * @en Transition name of the overlay
     */
    overlayAnimationName: {
      type: String,
      default: 'fade-drawer',
    },
    /**
     * @zh 是否展示头部内容
     * @en Whether to display high-quality content
     * @version 2.33.0
     */
    header: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否展示底部内容
     * @en Whether to display the bottom content
     * @version 2.11.0
     */
    footer: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否显示取消按钮
     * @en Whether to show the cancel button
     */
    cancelButton: {
      type: Boolean,
      default: true,
    },
    ariaLabel: String,
    closeButtonAriaLabel: {
      type: String,
      default: 'Close drawer',
    },
} 

export type DrawerProps = import("vue").ExtractPublicPropTypes<typeof drawerProps>
