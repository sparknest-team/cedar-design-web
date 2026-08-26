import { ComputedRef, Ref } from 'vue';
import { CascaderOptionInfo } from '../types';
export declare const useSelectedPath: (options: Ref<CascaderOptionInfo[]>, { optionMap, filteredLeafOptions, showSearchPanel, expandChild, }: {
    optionMap: Map<string, CascaderOptionInfo>;
    filteredLeafOptions: ComputedRef<CascaderOptionInfo[]>;
    showSearchPanel?: ComputedRef<boolean>;
    expandChild: Ref<boolean>;
}) => {
    activeKey: Ref<string | undefined, string | undefined>;
    activeOption: ComputedRef<CascaderOptionInfo | undefined>;
    selectedPath: Ref<string[], string[]>;
    displayColumns: ComputedRef<CascaderOptionInfo[][]>;
    setActiveKey: (key?: string) => void;
    setSelectedPath: (key?: string) => void;
    getNextActiveNode: (direction: "next" | "preview") => CascaderOptionInfo | undefined;
};
