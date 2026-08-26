import type { ExtractPropTypes } from 'vue';
export declare const iconComponentProps: {
    /**
     * 已显式注册到当前 Vue 应用的图标名称
     */
    name: StringConstructor;
    /**
     * 自定义类型类名
     */
    type: StringConstructor;
    /**
     * 图标尺寸
     */
    size: (StringConstructor | NumberConstructor)[];
    /**
     * 图标颜色
     */
    color: StringConstructor;
    /**
     * 旋转角度
     */
    rotate: NumberConstructor;
    /**
     * 是否持续旋转
     */
    spin: BooleanConstructor;
};
export type ComponentProps = ExtractPropTypes<typeof iconComponentProps>;
