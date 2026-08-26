import { PropType, StyleValue } from 'vue';
export declare const scrollbarProps: {
    /**
     * @zh 类型
     * @en Type
     */
    type: {
        type: PropType<"track" | "embed">;
        default: string;
    };
    /**
     * @zh 外层的类名
     * @en Outer class
     */
    outerClass: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
    /**
     * @zh 外层的样式
     * @en Outer style
     */
    outerStyle: {
        type: PropType<StyleValue>;
    };
    hide: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableHorizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableVertical: {
        type: BooleanConstructor;
        default: boolean;
    };
};
