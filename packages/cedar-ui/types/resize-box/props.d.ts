import { PropType } from 'vue';
export declare const resizeBoxProps: {
    /**
     * @zh 宽度
     * @en Width
     * @vModel
     */
    width: {
        type: NumberConstructor;
    };
    /**
     * @zh 高度
     * @en Height
     * @vModel
     */
    height: {
        type: NumberConstructor;
    };
    /**
     * @zh 伸缩框的 html 标签
     * @en The html tag of the telescopic box
     */
    component: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @zh 可以进行伸缩的边，有上、下、左、右可以使用
     * @en Can be stretched side, there are up, down, left and right can be used
     * */
    directions: {
        type: PropType<("left" | "right" | "top" | "bottom")[]>;
        default: () => string[];
    };
};
