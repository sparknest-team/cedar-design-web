import { type ExtractPropTypes, type PropType } from 'vue';
export type SpaceAlign = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type SpaceDirection = 'row' | 'column';
export type SpaceJustify = 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
export type SpaceInternalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpaceSize = SpaceInternalSize | number | string | [number | string, number | string];
export declare const spaceProps: {
    /**
     * 间距大小，可选值为 `xs` `sm` `md` `lg` `xl`，也可以传入数字 / 长度单位 / `[rowGap, columnGap]`
     */
    size: {
        type: PropType<SpaceSize>;
        default: string;
    };
    /**
     * 是否超出换行
     */
    wrap: {
        type: BooleanConstructor;
    };
    /**
     * 布局方向，可选值为 `row` `column`
     */
    direction: {
        type: PropType<SpaceDirection>;
        default: string;
    };
    /**
     * 主轴排列方式
     */
    justify: {
        type: PropType<SpaceJustify>;
        default: string;
    };
    /**
     * 交叉轴排列方式，未传入时根据 `direction` 推断（`row` → `center`，`column` → `stretch`）
     */
    align: {
        type: PropType<SpaceAlign>;
    };
    /**
     * 是否撑满父容器宽度（true 使用 `display: flex`，false 使用 `display: inline-flex`）
     */
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type SpaceProps = ExtractPropTypes<typeof spaceProps>;
