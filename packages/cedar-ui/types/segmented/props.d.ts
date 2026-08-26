import type { ExtractPropTypes, PropType, VNodeChild } from 'vue';
import type { ComponentSize, Direction } from '../_utils/constant';
export type SegmentedValue = string | number;
export interface SegmentedOption {
    label?: string | (() => VNodeChild);
    value: SegmentedValue;
    disabled?: boolean;
    [key: PropertyKey]: unknown;
}
export declare const segmentedProps: {
    /**
     * @zh 绑定值
     * @en Binding value
     */
    modelValue: {
        type: PropType<SegmentedValue>;
        default: undefined;
    };
    /**
     * @zh 默认值（非受控）
     * @en Default value (uncontrolled)
     */
    defaultValue: {
        type: PropType<SegmentedValue>;
        default: undefined;
    };
    /**
     * @zh 选项
     * @en Options
     */
    options: {
        type: PropType<Array<SegmentedValue | SegmentedOption>>;
        default: () => never[];
    };
    /**
     * @zh 尺寸
     * @en Size
     */
    size: {
        type: PropType<ComponentSize>;
        default: string;
        validator: (value: unknown) => value is ComponentSize;
    };
    /**
     * @zh 是否禁用
     * @en Whether disabled
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否撑满父容器宽度
     * @en Fit parent width
     */
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 排列方向
     * @en Direction
     */
    direction: {
        type: PropType<Direction>;
        default: string;
        validator: (value: unknown) => value is Direction;
    };
    /**
     * @zh 原生 name，用于表单与无障碍
     * @en Native name for form and a11y
     */
    name: StringConstructor;
};
export type SegmentedProps = ExtractPropTypes<typeof segmentedProps>;
