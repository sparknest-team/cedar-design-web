import _Carousel from './carousel';
import _CarouselItem from './carousel-item.vue';
import { carouselProps } from './props';
declare const Carousel: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        current: NumberConstructor;
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoPlay: {
            type: import("vue").PropType<boolean | import("./types").CarouselAutoPlayConfig>;
            default: boolean;
        };
        moveSpeed: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        trigger: {
            type: import("vue").PropType<import("./types").CarouselTriggerEvent>;
            default: string;
            validator: (value: import("./types").CarouselTriggerEvent) => boolean;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
            validator: (value: import("..").Direction) => boolean;
        };
        showArrow: {
            type: import("vue").PropType<import("./types").CarouselArrowType>;
            default: string;
            validator: (value: import("./types").CarouselArrowType) => boolean;
        };
        arrowClass: StringConstructor;
        indicator: {
            type: BooleanConstructor;
            default: boolean;
        };
        indicatorType: {
            type: import("vue").PropType<import("./types").CarouselIndicatorType>;
            default: string;
            validator: (value: import("./types").CarouselIndicatorType) => boolean;
        };
        indicatorPosition: {
            type: import("vue").PropType<import("./types").CarouselIndicatorPosition>;
            default: string;
            validator: (value: import("./types").CarouselIndicatorPosition) => boolean;
        };
        indicatorClass: StringConstructor;
        indicatorColor: StringConstructor;
        height: StringConstructor;
        transitionTimingFunction: {
            type: StringConstructor;
            default: string;
        };
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        draggable: BooleanConstructor;
        mousewheel: BooleanConstructor;
        keyboard: BooleanConstructor;
        slidesPerView: {
            type: import("vue").PropType<number | "auto">;
            default: number;
            validator: (value: number | "auto") => boolean;
        };
        spaceBetween: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        ariaLabel: {
            type: StringConstructor;
            default: string;
        };
        previousButtonAriaLabel: {
            type: StringConstructor;
            default: string;
        };
        nextButtonAriaLabel: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:current"?: ((...args: any[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:current")[], import("vue").PublicProps, {
        direction: "horizontal" | "vertical";
        transitionTimingFunction: string;
        trigger: import("./types").CarouselTriggerEvent;
        showArrow: import("./types").CarouselArrowType;
        draggable: boolean;
        ariaLabel: string;
        defaultCurrent: number;
        loop: boolean;
        autoPlay: boolean | import("./types").CarouselAutoPlayConfig;
        moveSpeed: number;
        indicator: boolean;
        indicatorType: import("./types").CarouselIndicatorType;
        indicatorPosition: import("./types").CarouselIndicatorPosition;
        touchable: boolean;
        mousewheel: boolean;
        keyboard: boolean;
        slidesPerView: number | "auto";
        spaceBetween: string | number;
        previousButtonAriaLabel: string;
        nextButtonAriaLabel: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        current: NumberConstructor;
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoPlay: {
            type: import("vue").PropType<boolean | import("./types").CarouselAutoPlayConfig>;
            default: boolean;
        };
        moveSpeed: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        trigger: {
            type: import("vue").PropType<import("./types").CarouselTriggerEvent>;
            default: string;
            validator: (value: import("./types").CarouselTriggerEvent) => boolean;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
            validator: (value: import("..").Direction) => boolean;
        };
        showArrow: {
            type: import("vue").PropType<import("./types").CarouselArrowType>;
            default: string;
            validator: (value: import("./types").CarouselArrowType) => boolean;
        };
        arrowClass: StringConstructor;
        indicator: {
            type: BooleanConstructor;
            default: boolean;
        };
        indicatorType: {
            type: import("vue").PropType<import("./types").CarouselIndicatorType>;
            default: string;
            validator: (value: import("./types").CarouselIndicatorType) => boolean;
        };
        indicatorPosition: {
            type: import("vue").PropType<import("./types").CarouselIndicatorPosition>;
            default: string;
            validator: (value: import("./types").CarouselIndicatorPosition) => boolean;
        };
        indicatorClass: StringConstructor;
        indicatorColor: StringConstructor;
        height: StringConstructor;
        transitionTimingFunction: {
            type: StringConstructor;
            default: string;
        };
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        draggable: BooleanConstructor;
        mousewheel: BooleanConstructor;
        keyboard: BooleanConstructor;
        slidesPerView: {
            type: import("vue").PropType<number | "auto">;
            default: number;
            validator: (value: number | "auto") => boolean;
        };
        spaceBetween: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        ariaLabel: {
            type: StringConstructor;
            default: string;
        };
        previousButtonAriaLabel: {
            type: StringConstructor;
            default: string;
        };
        nextButtonAriaLabel: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:current"?: ((...args: any[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        direction: "horizontal" | "vertical";
        transitionTimingFunction: string;
        trigger: import("./types").CarouselTriggerEvent;
        showArrow: import("./types").CarouselArrowType;
        draggable: boolean;
        ariaLabel: string;
        defaultCurrent: number;
        loop: boolean;
        autoPlay: boolean | import("./types").CarouselAutoPlayConfig;
        moveSpeed: number;
        indicator: boolean;
        indicatorType: import("./types").CarouselIndicatorType;
        indicatorPosition: import("./types").CarouselIndicatorPosition;
        touchable: boolean;
        mousewheel: boolean;
        keyboard: boolean;
        slidesPerView: number | "auto";
        spaceBetween: string | number;
        previousButtonAriaLabel: string;
        nextButtonAriaLabel: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    current: NumberConstructor;
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoPlay: {
        type: import("vue").PropType<boolean | import("./types").CarouselAutoPlayConfig>;
        default: boolean;
    };
    moveSpeed: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    trigger: {
        type: import("vue").PropType<import("./types").CarouselTriggerEvent>;
        default: string;
        validator: (value: import("./types").CarouselTriggerEvent) => boolean;
    };
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: string;
        validator: (value: import("..").Direction) => boolean;
    };
    showArrow: {
        type: import("vue").PropType<import("./types").CarouselArrowType>;
        default: string;
        validator: (value: import("./types").CarouselArrowType) => boolean;
    };
    arrowClass: StringConstructor;
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    indicatorType: {
        type: import("vue").PropType<import("./types").CarouselIndicatorType>;
        default: string;
        validator: (value: import("./types").CarouselIndicatorType) => boolean;
    };
    indicatorPosition: {
        type: import("vue").PropType<import("./types").CarouselIndicatorPosition>;
        default: string;
        validator: (value: import("./types").CarouselIndicatorPosition) => boolean;
    };
    indicatorClass: StringConstructor;
    indicatorColor: StringConstructor;
    height: StringConstructor;
    transitionTimingFunction: {
        type: StringConstructor;
        default: string;
    };
    touchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: BooleanConstructor;
    mousewheel: BooleanConstructor;
    keyboard: BooleanConstructor;
    slidesPerView: {
        type: import("vue").PropType<number | "auto">;
        default: number;
        validator: (value: number | "auto") => boolean;
    };
    spaceBetween: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    previousButtonAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    nextButtonAriaLabel: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:current"?: ((...args: any[]) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:current")[], "change" | "update:current", {
    direction: "horizontal" | "vertical";
    transitionTimingFunction: string;
    trigger: import("./types").CarouselTriggerEvent;
    showArrow: import("./types").CarouselArrowType;
    draggable: boolean;
    ariaLabel: string;
    defaultCurrent: number;
    loop: boolean;
    autoPlay: boolean | import("./types").CarouselAutoPlayConfig;
    moveSpeed: number;
    indicator: boolean;
    indicatorType: import("./types").CarouselIndicatorType;
    indicatorPosition: import("./types").CarouselIndicatorPosition;
    touchable: boolean;
    mousewheel: boolean;
    keyboard: boolean;
    slidesPerView: number | "auto";
    spaceBetween: string | number;
    previousButtonAriaLabel: string;
    nextButtonAriaLabel: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<{}, {
        context: import("./context").CarouselContext;
        index: import("vue").ComputedRef<number>;
        itemCls: import("vue").ComputedRef<string[]>;
        itemStyle: import("vue").ComputedRef<{}>;
        isCurrent: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export type CarouselInstance = InstanceType<typeof _Carousel>;
export type CarouselItemInstance = InstanceType<typeof _CarouselItem>;
export type { CarouselProps } from './props';
export type { CarouselArrowType, CarouselAutoPlayConfig, CarouselIndicatorPosition, CarouselIndicatorType, CarouselTriggerEvent, } from './types';
export { Carousel, carouselProps };
export declare const _CarouselComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        current: NumberConstructor;
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoPlay: {
            type: import("vue").PropType<boolean | import("./types").CarouselAutoPlayConfig>;
            default: boolean;
        };
        moveSpeed: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        trigger: {
            type: import("vue").PropType<import("./types").CarouselTriggerEvent>;
            default: string;
            validator: (value: import("./types").CarouselTriggerEvent) => boolean;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
            validator: (value: import("..").Direction) => boolean;
        };
        showArrow: {
            type: import("vue").PropType<import("./types").CarouselArrowType>;
            default: string;
            validator: (value: import("./types").CarouselArrowType) => boolean;
        };
        arrowClass: StringConstructor;
        indicator: {
            type: BooleanConstructor;
            default: boolean;
        };
        indicatorType: {
            type: import("vue").PropType<import("./types").CarouselIndicatorType>;
            default: string;
            validator: (value: import("./types").CarouselIndicatorType) => boolean;
        };
        indicatorPosition: {
            type: import("vue").PropType<import("./types").CarouselIndicatorPosition>;
            default: string;
            validator: (value: import("./types").CarouselIndicatorPosition) => boolean;
        };
        indicatorClass: StringConstructor;
        indicatorColor: StringConstructor;
        height: StringConstructor;
        transitionTimingFunction: {
            type: StringConstructor;
            default: string;
        };
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        draggable: BooleanConstructor;
        mousewheel: BooleanConstructor;
        keyboard: BooleanConstructor;
        slidesPerView: {
            type: import("vue").PropType<number | "auto">;
            default: number;
            validator: (value: number | "auto") => boolean;
        };
        spaceBetween: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        ariaLabel: {
            type: StringConstructor;
            default: string;
        };
        previousButtonAriaLabel: {
            type: StringConstructor;
            default: string;
        };
        nextButtonAriaLabel: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:current"?: ((...args: any[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:current")[], import("vue").PublicProps, {
        direction: "horizontal" | "vertical";
        transitionTimingFunction: string;
        trigger: import("./types").CarouselTriggerEvent;
        showArrow: import("./types").CarouselArrowType;
        draggable: boolean;
        ariaLabel: string;
        defaultCurrent: number;
        loop: boolean;
        autoPlay: boolean | import("./types").CarouselAutoPlayConfig;
        moveSpeed: number;
        indicator: boolean;
        indicatorType: import("./types").CarouselIndicatorType;
        indicatorPosition: import("./types").CarouselIndicatorPosition;
        touchable: boolean;
        mousewheel: boolean;
        keyboard: boolean;
        slidesPerView: number | "auto";
        spaceBetween: string | number;
        previousButtonAriaLabel: string;
        nextButtonAriaLabel: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        current: NumberConstructor;
        defaultCurrent: {
            type: NumberConstructor;
            default: number;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoPlay: {
            type: import("vue").PropType<boolean | import("./types").CarouselAutoPlayConfig>;
            default: boolean;
        };
        moveSpeed: {
            type: NumberConstructor;
            default: number;
            validator: (value: number) => boolean;
        };
        trigger: {
            type: import("vue").PropType<import("./types").CarouselTriggerEvent>;
            default: string;
            validator: (value: import("./types").CarouselTriggerEvent) => boolean;
        };
        direction: {
            type: import("vue").PropType<import("..").Direction>;
            default: string;
            validator: (value: import("..").Direction) => boolean;
        };
        showArrow: {
            type: import("vue").PropType<import("./types").CarouselArrowType>;
            default: string;
            validator: (value: import("./types").CarouselArrowType) => boolean;
        };
        arrowClass: StringConstructor;
        indicator: {
            type: BooleanConstructor;
            default: boolean;
        };
        indicatorType: {
            type: import("vue").PropType<import("./types").CarouselIndicatorType>;
            default: string;
            validator: (value: import("./types").CarouselIndicatorType) => boolean;
        };
        indicatorPosition: {
            type: import("vue").PropType<import("./types").CarouselIndicatorPosition>;
            default: string;
            validator: (value: import("./types").CarouselIndicatorPosition) => boolean;
        };
        indicatorClass: StringConstructor;
        indicatorColor: StringConstructor;
        height: StringConstructor;
        transitionTimingFunction: {
            type: StringConstructor;
            default: string;
        };
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        draggable: BooleanConstructor;
        mousewheel: BooleanConstructor;
        keyboard: BooleanConstructor;
        slidesPerView: {
            type: import("vue").PropType<number | "auto">;
            default: number;
            validator: (value: number | "auto") => boolean;
        };
        spaceBetween: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        ariaLabel: {
            type: StringConstructor;
            default: string;
        };
        previousButtonAriaLabel: {
            type: StringConstructor;
            default: string;
        };
        nextButtonAriaLabel: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:current"?: ((...args: any[]) => any) | undefined;
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        direction: "horizontal" | "vertical";
        transitionTimingFunction: string;
        trigger: import("./types").CarouselTriggerEvent;
        showArrow: import("./types").CarouselArrowType;
        draggable: boolean;
        ariaLabel: string;
        defaultCurrent: number;
        loop: boolean;
        autoPlay: boolean | import("./types").CarouselAutoPlayConfig;
        moveSpeed: number;
        indicator: boolean;
        indicatorType: import("./types").CarouselIndicatorType;
        indicatorPosition: import("./types").CarouselIndicatorPosition;
        touchable: boolean;
        mousewheel: boolean;
        keyboard: boolean;
        slidesPerView: number | "auto";
        spaceBetween: string | number;
        previousButtonAriaLabel: string;
        nextButtonAriaLabel: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    current: NumberConstructor;
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoPlay: {
        type: import("vue").PropType<boolean | import("./types").CarouselAutoPlayConfig>;
        default: boolean;
    };
    moveSpeed: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    trigger: {
        type: import("vue").PropType<import("./types").CarouselTriggerEvent>;
        default: string;
        validator: (value: import("./types").CarouselTriggerEvent) => boolean;
    };
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: string;
        validator: (value: import("..").Direction) => boolean;
    };
    showArrow: {
        type: import("vue").PropType<import("./types").CarouselArrowType>;
        default: string;
        validator: (value: import("./types").CarouselArrowType) => boolean;
    };
    arrowClass: StringConstructor;
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    indicatorType: {
        type: import("vue").PropType<import("./types").CarouselIndicatorType>;
        default: string;
        validator: (value: import("./types").CarouselIndicatorType) => boolean;
    };
    indicatorPosition: {
        type: import("vue").PropType<import("./types").CarouselIndicatorPosition>;
        default: string;
        validator: (value: import("./types").CarouselIndicatorPosition) => boolean;
    };
    indicatorClass: StringConstructor;
    indicatorColor: StringConstructor;
    height: StringConstructor;
    transitionTimingFunction: {
        type: StringConstructor;
        default: string;
    };
    touchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: BooleanConstructor;
    mousewheel: BooleanConstructor;
    keyboard: BooleanConstructor;
    slidesPerView: {
        type: import("vue").PropType<number | "auto">;
        default: number;
        validator: (value: number | "auto") => boolean;
    };
    spaceBetween: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    previousButtonAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    nextButtonAriaLabel: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:current"?: ((...args: any[]) => any) | undefined;
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:current")[], "change" | "update:current", {
    direction: "horizontal" | "vertical";
    transitionTimingFunction: string;
    trigger: import("./types").CarouselTriggerEvent;
    showArrow: import("./types").CarouselArrowType;
    draggable: boolean;
    ariaLabel: string;
    defaultCurrent: number;
    loop: boolean;
    autoPlay: boolean | import("./types").CarouselAutoPlayConfig;
    moveSpeed: number;
    indicator: boolean;
    indicatorType: import("./types").CarouselIndicatorType;
    indicatorPosition: import("./types").CarouselIndicatorPosition;
    touchable: boolean;
    mousewheel: boolean;
    keyboard: boolean;
    slidesPerView: number | "auto";
    spaceBetween: string | number;
    previousButtonAriaLabel: string;
    nextButtonAriaLabel: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Item: import("vue").DefineComponent<{}, {
        context: import("./context").CarouselContext;
        index: import("vue").ComputedRef<number>;
        itemCls: import("vue").ComputedRef<string[]>;
        itemStyle: import("vue").ComputedRef<{}>;
        isCurrent: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}>;
export { _CarouselItem as CarouselItem };
export default Carousel;
