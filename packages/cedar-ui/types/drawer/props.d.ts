import type { CSSProperties, ExtractPropTypes, PropType, StyleValue } from 'vue';
import type { ButtonProps } from '../button';
export declare const DRAWER_PLACEMENTS: readonly ["top", "right", "bottom", "left"];
export type DrawerPlacement = (typeof DRAWER_PLACEMENTS)[number];
export declare const drawerProps: {
    /**
     * @zh 抽屉是否可见
     * @en Whether the drawer is visible
     * @vModel
     */
    open: {
        type: BooleanConstructor;
        default: undefined;
    };
    /**
     * @zh 抽屉默认是否可见（非受控模式）
     * @en Whether the drawer is visible by default (uncontrolled mode)
     */
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 抽屉放置的位置
     * @en Where the drawer is placed
     * @values 'top','right','bottom','left'
     */
    placement: {
        type: PropType<DrawerPlacement>;
        default: string;
        validator: (value: any) => boolean;
    };
    /**
     * @zh 标题
     * @en Title
     */
    title: StringConstructor;
    /**
     * @zh 是否显示遮罩层
     * @en Whether to show the mask
     */
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 点击遮罩层是否可以关闭
     * @en Click on the mask layer to be able to close
     */
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否展示关闭按钮
     * @en Whether to show the close button
     */
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 确认按钮的内容
     * @en The content of the ok button
     */
    okText: StringConstructor;
    /**
     * @zh 取消按钮的内容
     * @en The content of the cancel button
     */
    cancelText: StringConstructor;
    /**
     * @zh 确认按钮是否为加载中状态
     * @en Whether the ok button is in the loading state
     */
    okLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 确认按钮的Props
     * @en Props of confirm button
     * @version 2.9.0
     */
    okButtonProps: {
        type: PropType<ButtonProps>;
    };
    /**
     * @zh 取消按钮的Props
     * @en Props of cancel button
     * @version 2.9.0
     */
    cancelButtonProps: {
        type: PropType<ButtonProps>;
    };
    /**
     * @zh 关闭时是否卸载节点
     * @en Whether to uninstall the node when close
     * @version 2.12.0
     */
    unmountOnClose: BooleanConstructor;
    /**
     * @zh 抽屉的宽度（仅在placement为right,left时可用）
     * @en The width of the drawer (only available when placement is right, left)
     */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * @zh 抽屉的高度（仅在placement为top,bottom时可用）
     * @en The height of the drawer (only available when placement is top, bottom)
     */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for popup
     */
    popupContainer: {
        type: PropType<string | HTMLElement>;
        default: string;
    };
    /**
     * @zh 抽屉的样式
     * @en Drawer style
     */
    drawerStyle: {
        type: PropType<CSSProperties>;
    };
    /**
     * @zh 抽屉内容部分的类名
     * @en The classname of the drawer body
     * @version 2.57.0
     */
    bodyClass: {
        type: PropType<string | any[]>;
    };
    /**
     * @zh 抽屉内容部分的样式
     * @en Drawer body style
     * @version 2.57.0
     */
    bodyStyle: {
        type: PropType<StyleValue>;
    };
    /**
     * @zh 触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。
     * @en The callback function before the ok event is triggered. If false is returned, subsequent events will not be triggered, and done can also be used to close asynchronously.
     */
    beforeOk: {
        type: PropType<(done: (closed: boolean) => void) => void | boolean | Promise<void | boolean>>;
    };
    /**
     * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
     * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
     */
    beforeCancel: {
        type: PropType<() => boolean>;
    };
    /**
     * @zh 是否支持 ESC 键关闭抽屉
     * @en Whether to support the ESC key to close the dialog
     * @version 2.15.0
     */
    escToClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 抽屉是否挂载在 `body` 元素下
     * @en Whether the drawer is mounted under the `body` element
     */
    renderToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否展示头部内容
     * @en Whether to display high-quality content
     * @version 2.33.0
     */
    header: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否展示底部内容
     * @en Whether to display the bottom content
     * @version 2.11.0
     */
    footer: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否隐藏取消按钮
     * @en Whether to hide the cancel button
     * @version 2.19.0
     */
    hideCancel: {
        type: BooleanConstructor;
        default: boolean;
    };
    ariaLabel: StringConstructor;
    closeButtonAriaLabel: {
        type: StringConstructor;
        default: string;
    };
};
export type DrawerProps = Partial<ExtractPropTypes<typeof drawerProps>>;
