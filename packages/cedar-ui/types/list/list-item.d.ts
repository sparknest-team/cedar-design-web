import { PropType } from 'vue';
import type { Direction } from '../_utils/constant';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * @zh 操作组排列方向
     * @en Operation group arrangement direction
     */
    actionLayout: {
        type: PropType<Direction>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @zh 操作组排列方向
     * @en Operation group arrangement direction
     */
    actionLayout: {
        type: PropType<Direction>;
        default: string;
    };
}>> & Readonly<{}>, {
    actionLayout: "horizontal" | "vertical";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
