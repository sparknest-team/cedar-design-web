import type { ExtractPropTypes, PropType } from 'vue';
import type { Direction } from '../_utils/constant';
import type { CarouselArrowType, CarouselAutoPlayConfig, CarouselIndicatorPosition, CarouselIndicatorType, CarouselTriggerEvent } from './types';
export declare const carouselProps: {
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
        type: PropType<boolean | CarouselAutoPlayConfig>;
        default: boolean;
    };
    moveSpeed: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    trigger: {
        type: PropType<CarouselTriggerEvent>;
        default: string;
        validator: (value: CarouselTriggerEvent) => boolean;
    };
    direction: {
        type: PropType<Direction>;
        default: string;
        validator: (value: Direction) => boolean;
    };
    showArrow: {
        type: PropType<CarouselArrowType>;
        default: string;
        validator: (value: CarouselArrowType) => boolean;
    };
    arrowClass: StringConstructor;
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    indicatorType: {
        type: PropType<CarouselIndicatorType>;
        default: string;
        validator: (value: CarouselIndicatorType) => boolean;
    };
    indicatorPosition: {
        type: PropType<CarouselIndicatorPosition>;
        default: string;
        validator: (value: CarouselIndicatorPosition) => boolean;
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
        type: PropType<number | "auto">;
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
};
export type CarouselProps = Partial<ExtractPropTypes<typeof carouselProps>>;
