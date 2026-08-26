import { StepStatus } from './types';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./types").StepsType>;
        default: import("./types").StepsType;
    };
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: import("..").Direction;
    };
    labelPlacement: {
        type: import("vue").PropType<import("..").Direction>;
        default: import("..").Direction;
    };
    current: {
        type: NumberConstructor;
        default: undefined;
    };
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
    };
    status: {
        type: import("vue").PropType<StepStatus>;
        default: StepStatus;
    };
    showLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    changeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    cls: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (_step: number, _event: Event) => true;
    'update:current': (_step: number) => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./types").StepsType>;
        default: import("./types").StepsType;
    };
    direction: {
        type: import("vue").PropType<import("..").Direction>;
        default: import("..").Direction;
    };
    labelPlacement: {
        type: import("vue").PropType<import("..").Direction>;
        default: import("..").Direction;
    };
    current: {
        type: NumberConstructor;
        default: undefined;
    };
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
    };
    status: {
        type: import("vue").PropType<StepStatus>;
        default: StepStatus;
    };
    showLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    changeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((_step: number, _event: Event) => any) | undefined;
    "onUpdate:current"?: ((_step: number) => any) | undefined;
}>, {
    type: "default" | "dot" | "navigation" | "arrow";
    small: boolean;
    showLine: boolean;
    status: "error" | "wait" | "finish" | "process";
    direction: "horizontal" | "vertical";
    current: number;
    defaultCurrent: number;
    labelPlacement: "horizontal" | "vertical";
    changeable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
