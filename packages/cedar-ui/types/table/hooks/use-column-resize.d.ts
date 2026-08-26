import { Ref } from 'vue';
import { EmitFn2 } from '../../_utils/types';
export declare const useColumnResize: (thRefs: Ref<Record<string, HTMLElement>>, emit: EmitFn2<{
    columnResize: (dataIndex: string, width: number) => true;
}>) => {
    resizingColumn: Ref<string, string>;
    columnWidth: Record<string, number>;
    handleThMouseDown: (dataIndex: string, ev: MouseEvent) => void;
    handleThMouseUp: () => void;
};
