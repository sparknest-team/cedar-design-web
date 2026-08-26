import type { ExtractPropTypes, PropType } from 'vue';
export declare const pageHeaderProps: {
    /**
     * @zh 页头的主标题
     * @en Main title
     */
    title: StringConstructor;
    /**
     * @zh 页头的次标题
     * @en Subtitle
     */
    subtitle: StringConstructor;
    /**
     * @zh 是否显示返回按钮
     * @en Whether to show the back button
     */
    showBack: {
        type: PropType<boolean>;
        default: boolean;
    };
};
export type PageHeaderProps = ExtractPropTypes<typeof pageHeaderProps>;
