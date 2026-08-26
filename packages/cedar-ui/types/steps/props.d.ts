import type { ExtractPropTypes, PropType } from 'vue';
import type { Direction } from '../_utils/constant';
import type { StepStatus, StepsType } from './types';
export type { StepStatus, StepsType, StepData } from './types';
export declare const stepsProps: {
    /**
     * 步骤条的类型（仅 PC）
     */
    type: {
        type: PropType<StepsType>;
        default: StepsType;
    };
    /**
     * 步骤条的显示方向
     */
    direction: {
        type: PropType<Direction>;
        default: Direction;
    };
    /**
     * 标签描述文字放置的位置（仅 PC）
     */
    labelPlacement: {
        type: PropType<Direction>;
        default: Direction;
    };
    /**
     * 当前步骤数（受控，从 1 起计）
     */
    current: {
        type: NumberConstructor;
        default: undefined;
    };
    /**
     * 默认的步骤数（非受控，从 1 起计）
     */
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 当前步骤的状态
     */
    status: {
        type: PropType<StepStatus>;
        default: StepStatus;
    };
    /**
     * 是否显示连接线（仅 PC）
     */
    showLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否使用小型步骤条（仅 PC；dot 模式无效）
     */
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * 是否可以点击切换步骤
     */
    changeable: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const stepProps: {
    /**
     * 步骤的标题
     */
    title: StringConstructor;
    /**
     * 步骤的描述信息
     */
    description: StringConstructor;
    /**
     * 步骤的状态（覆盖自动推导）
     */
    status: {
        type: PropType<StepStatus>;
    };
    /**
     * 是否禁用
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type StepsProps = ExtractPropTypes<typeof stepsProps>;
export type StepProps = ExtractPropTypes<typeof stepProps>;
