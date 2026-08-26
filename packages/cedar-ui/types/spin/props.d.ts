export declare const spinProps: {
    /**
     * @zh 尺寸
     * @en Size
     */
    size: {
        type: NumberConstructor;
    };
    /**
     * @zh 是否为加载中状态（仅在容器模式下生效）
     * @en Whether it is loading state (Only effective in container mode)
     */
    loading: BooleanConstructor;
    /**
     * @zh 是否使用点类型的动画
     * @en Whether to use dot type animation
     */
    dot: BooleanConstructor;
    /**
     * @zh 提示内容
     * @en Prompt content
     */
    tip: StringConstructor;
    /**
     * @zh 是否隐藏图标
     * @en Whether to hide the icon
     */
    hideIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
};
