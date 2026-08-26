import type { CSSProperties, ExtractPropTypes, PropType } from 'vue';
import type { ComponentSize } from '../_utils/constant';
import type { SelectProps } from '../select';
export declare const paginationProps: {
    total: {
        type: NumberConstructor;
        required: boolean;
        validator: (value: number) => boolean;
    };
    current: NumberConstructor;
    defaultCurrent: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    pageSize: NumberConstructor;
    defaultPageSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    disabled: BooleanConstructor;
    hideOnSinglePage: BooleanConstructor;
    simple: BooleanConstructor;
    showTotal: BooleanConstructor;
    showMore: BooleanConstructor;
    showJumper: BooleanConstructor;
    showPageSize: BooleanConstructor;
    pageSizeOptions: {
        type: PropType<number[]>;
        default: () => number[];
        validator: (value: number[]) => boolean;
    };
    pageSizeProps: PropType<SelectProps>;
    size: {
        type: PropType<ComponentSize>;
        validator: (value: ComponentSize) => boolean;
    };
    pageItemStyle: PropType<CSSProperties>;
    activePageItemStyle: PropType<CSSProperties>;
    baseSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    bufferSize: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    autoAdjust: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type PaginationProps = Partial<ExtractPropTypes<typeof paginationProps>>;
