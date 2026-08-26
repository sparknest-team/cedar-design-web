import { PropType } from 'vue';
import { CascaderOptionInfo } from './types';
import { VirtualListProps } from '../_components/virtual-list-v2/interface';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    column: {
        type: PropType<CascaderOptionInfo[]>;
        required: true;
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    selectedPath: {
        type: PropType<string[]>;
        required: true;
    };
    activeKey: StringConstructor;
    totalLevel: {
        type: NumberConstructor;
        required: true;
    };
    multiple: BooleanConstructor;
    checkStrictly: BooleanConstructor;
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    column: {
        type: PropType<CascaderOptionInfo[]>;
        required: true;
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    selectedPath: {
        type: PropType<string[]>;
        required: true;
    };
    activeKey: StringConstructor;
    totalLevel: {
        type: NumberConstructor;
        required: true;
    };
    multiple: BooleanConstructor;
    checkStrictly: BooleanConstructor;
    virtualListProps: {
        type: PropType<VirtualListProps>;
    };
}>> & Readonly<{}>, {
    multiple: boolean;
    level: number;
    checkStrictly: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
