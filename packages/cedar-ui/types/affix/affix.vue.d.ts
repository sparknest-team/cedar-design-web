import type { CSSProperties, Ref } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    offsetTop: {
        type: NumberConstructor;
        default: number;
    };
    offsetBottom: NumberConstructor;
    target: import("vue").PropType<import("./props").AffixTarget>;
    targetContainer: import("vue").PropType<import("./props").AffixTarget>;
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    disabled: BooleanConstructor;
    cssMode: BooleanConstructor;
}>, {
    wrapperRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    isFixed: Ref<boolean, boolean>;
    disabled: Ref<boolean, boolean>;
    cssMode: Ref<boolean, boolean>;
    classNames: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    placeholderStyles: Ref<CSSProperties, CSSProperties>;
    contentStyles: import("vue").ComputedRef<CSSProperties>;
    stickyStyles: import("vue").ComputedRef<CSSProperties>;
    updatePositionThrottle: {
        (...args: any[]): void;
        cancel(): void;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * @zh 固定状态发生改变时触发
     * @en Triggered when the fixed state changes
     * @param {boolean} fixed
     */
    change: (fixed: boolean) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    offsetTop: {
        type: NumberConstructor;
        default: number;
    };
    offsetBottom: NumberConstructor;
    target: import("vue").PropType<import("./props").AffixTarget>;
    targetContainer: import("vue").PropType<import("./props").AffixTarget>;
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    disabled: BooleanConstructor;
    cssMode: BooleanConstructor;
}>> & Readonly<{
    onChange?: ((fixed: boolean) => any) | undefined;
}>, {
    offsetTop: number;
    zIndex: number;
    disabled: boolean;
    cssMode: boolean;
}, {}, {
    ResizeObserver: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "resize"[], "resize", import("vue").PublicProps, Readonly<{}> & Readonly<{
        onResize?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
