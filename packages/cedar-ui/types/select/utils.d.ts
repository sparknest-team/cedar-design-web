import type { FilterOption, SelectOptionGroup, SelectOptionGroupInfo, SelectOption, SelectOptionData, SelectOptionInfo, SelectOptionValue, SelectFieldNames } from './types';
export declare const isGroupOption: (option: SelectOption) => option is SelectOptionGroup;
export declare const isGroupOptionInfo: (option: SelectOptionInfo | SelectOptionGroupInfo) => option is SelectOptionGroupInfo;
export declare const getValueString: (value: SelectOptionValue, valueKey?: string) => string;
export declare const getKeyFromValue: (value?: SelectOptionValue, valueKey?: string) => string;
export declare const hasEmptyStringKey: (optionInfoMap: Map<string, SelectOptionInfo>) => boolean;
export declare const createOptionInfo: (option: string | number | boolean | SelectOptionData, { fieldNames, origin, index, }: {
    fieldNames: Required<SelectFieldNames>;
    origin: "slot" | "options" | "extraOptions";
    index?: number;
}) => SelectOptionInfo;
export declare const getOptionInfos: (options: SelectOption[], { fieldNames, origin, optionInfoMap, }: {
    fieldNames: Required<SelectFieldNames>;
    origin: "options" | "extraOptions";
    optionInfoMap: Map<string, SelectOptionInfo>;
}) => (SelectOptionInfo | SelectOptionGroupInfo)[];
export declare const createOptionInfoMap: (optionInfos: (SelectOptionInfo | SelectOptionGroupInfo)[]) => Map<string, SelectOptionInfo>;
export declare const getValidOptions: (optionInfos: (SelectOptionInfo | SelectOptionGroupInfo)[], { inputValue, filterOption, }: {
    inputValue?: string;
    filterOption?: FilterOption;
}) => (SelectOptionInfo | SelectOptionGroupInfo)[];
export declare const isValidOption: (optionInfo: SelectOptionInfo, { inputValue, filterOption, }: {
    inputValue?: string;
    filterOption?: FilterOption;
}) => boolean;
