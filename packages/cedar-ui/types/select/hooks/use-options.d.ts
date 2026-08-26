import type { Ref } from 'vue';
import type { FilterOption, SelectOption, SelectOptionInfo, SelectFieldNames } from '../types';
export declare const useOptions: ({ options, extraOptions, inputValue, filterOption, showExtraOptions, fieldNames, }: {
    options?: Ref<SelectOption[]>;
    extraOptions?: Ref<SelectOption[]>;
    inputValue?: Ref<string>;
    filterOption?: Ref<FilterOption>;
    showExtraOptions?: Ref<boolean>;
    fieldNames?: Ref<SelectFieldNames | undefined>;
}) => {
    validOptions: import("vue").ComputedRef<(SelectOptionInfo | import("../types").SelectOptionGroupInfo)[]>;
    optionInfoMap: import("vue").Reactive<Map<string, SelectOptionInfo>>;
    validOptionInfos: import("vue").ComputedRef<{
        [x: string]: any;
        raw: Record<string, unknown>;
        key: string;
        index?: number | undefined;
        origin: "slot" | "options" | "extraOptions";
        value: import("../types").SelectOptionValue;
        label: string;
        disabled?: boolean | undefined;
        tagProps?: any;
        render?: import("vue").RenderFunction | undefined;
    }[]>;
    enabledOptionKeys: import("vue").ComputedRef<string[]>;
    getNextSlotOptionIndex: () => number;
    addSlotOptionInfo: (id: number, optionInfo: SelectOptionInfo) => void;
    removeSlotOptionInfo: (id: number) => void;
};
