import { PropType } from 'vue';
import { ResponsiveValue } from './types';
export declare const gridProps: {
    /**
     * @zh 每一行展示的列数
     * @en Number of columns displayed in each row
     */
    cols: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    /**
     * @zh 行与行之间的间距
     * @en The space in row-to-row
     */
    rowGap: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    /**
     * @zh 列与列之间的间距
     * @en The space in column-to-column
     */
    colGap: {
        type: PropType<number | ResponsiveValue>;
        default: number;
    };
    /**
     * @zh 是否折叠
     * @en Whether to collapsed
     */
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @zh 折叠时显示的行数
     * @en Number of rows displayed when collapsed
     */
    collapsedRows: {
        type: NumberConstructor;
        default: number;
    };
};
