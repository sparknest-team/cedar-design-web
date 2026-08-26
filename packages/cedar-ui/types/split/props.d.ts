import { PropType } from 'vue';
export declare const splitProps: {
    /**
     * @zh 分割框的 html 标签
     * @en The html tag of the split box
     */
    component: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 分割的方向
     * @en Direction of division
     */
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    /**
     * @zh 分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px
     * @en The size of the segmentation, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px
     * @vModel
     */
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * @zh 默认分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px
     * @en Default split size, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px
     */
    defaultSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * @zh 最小阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px
     * @en Minimum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px
     */
    min: {
        type: (StringConstructor | NumberConstructor)[];
    };
    /**
     * @zh 最大阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px
     * @en Maximum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px
     * */
    max: {
        type: (StringConstructor | NumberConstructor)[];
    };
    /**
     * @zh 是否禁用
     * @en Whether to disable
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
