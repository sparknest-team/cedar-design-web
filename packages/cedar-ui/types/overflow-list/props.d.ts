import type { PropType } from 'vue';
export declare const overflowListProps: {
    /**
     * @zh 最少展示的元素个数
     * @en Minimum number of elements to display
     */
    min: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 项目间隔
     * @en Item Margin
     */
    margin: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @zh 折叠方向
     * @en Overflow From
     */
    from: {
        type: PropType<"start" | "end">;
        default: string;
    };
};
