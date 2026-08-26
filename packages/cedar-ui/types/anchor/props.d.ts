import type { PropType } from 'vue';
declare const BOUNDARY_POSITIONS: readonly ["start", "end", "center", "nearest"];
type BoundaryPosition = (typeof BOUNDARY_POSITIONS)[number];
export declare const anchorProps: {
    /**
     * @zh 滚动边界值，设置该值为数字后，将会在距离滚动容器 `boundary` 距离时停止滚动。
     * @en Scrolling boundary value. After setting the value to a number, it will stop scrolling when the distance is `boundary` from the scrolling container.
     * @values 'start', 'end', 'center', 'nearest', number
     */
    boundary: {
        type: PropType<BoundaryPosition | number>;
        default: string;
        validator: (value: any) => boolean;
    };
    /**
     * @zh 是否显示左侧轴线
     * @en Whether to show the left axis
     */
    showLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 是否显示背景
     * @en Whether to show the background
     */
    showBackground: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 滚动容器
     * @en Scroll container
     */
    scrollContainer: {
        type: PropType<string | HTMLElement | Window>;
    };
    /**
     * @zh 是否改变hash。设置为 `false` 时点击锚点不会改变页面的 hash
     * @en Whether to change the hash. When set to `false`, clicking on the anchor will not change the hash of the page
     */
    changeHash: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export {};
