import { type PoiKeys } from './props';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    mapStyle: {
        type: ObjectConstructor;
        default: () => {
            height: string;
        };
    };
    geocoderUrl: StringConstructor;
    geocoderHandler: FunctionConstructor;
    isInternational: BooleanConstructor;
    driver: ObjectConstructor;
    fetch: import("vue").PropType<{
        get: any;
        post: any;
    }>;
    popupContainer: StringConstructor;
    showName: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLocateMeButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showEditAddressButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMapTips: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: ObjectConstructor;
        required: boolean;
    };
    mapType: {
        type: import("vue").PropType<"amaps" | "google" | "qqmaps">;
        default: string;
    };
    defaultValue: {
        type: import("vue").PropType<{ [key in PoiKeys]?: string; }>;
    };
    enableGisSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    basePath: {
        type: StringConstructor;
        default: string;
    };
    valueKeyScope: {
        type: import("vue").PropType<PoiKeys[]>;
        default: () => string[];
    };
    valueKeyAlias: {
        type: import("vue").PropType<{ [key in PoiKeys]?: string; }>;
        default: () => {
            longitude: string;
            latitude: string;
            address: string;
            name: string;
            adcode: string;
            countryCode: string;
            city: string;
            country: string;
        };
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "change" | "update:modelValue" | "init")[], "clear" | "change" | "update:modelValue" | "init", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    mapStyle: {
        type: ObjectConstructor;
        default: () => {
            height: string;
        };
    };
    geocoderUrl: StringConstructor;
    geocoderHandler: FunctionConstructor;
    isInternational: BooleanConstructor;
    driver: ObjectConstructor;
    fetch: import("vue").PropType<{
        get: any;
        post: any;
    }>;
    popupContainer: StringConstructor;
    showName: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLocateMeButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showEditAddressButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMapTips: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: ObjectConstructor;
        required: boolean;
    };
    mapType: {
        type: import("vue").PropType<"amaps" | "google" | "qqmaps">;
        default: string;
    };
    defaultValue: {
        type: import("vue").PropType<{ [key in PoiKeys]?: string; }>;
    };
    enableGisSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    basePath: {
        type: StringConstructor;
        default: string;
    };
    valueKeyScope: {
        type: import("vue").PropType<PoiKeys[]>;
        default: () => string[];
    };
    valueKeyAlias: {
        type: import("vue").PropType<{ [key in PoiKeys]?: string; }>;
        default: () => {
            longitude: string;
            latitude: string;
            address: string;
            name: string;
            adcode: string;
            countryCode: string;
            city: string;
            country: string;
        };
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInit?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    clearable: boolean;
    isInternational: boolean;
    showName: boolean;
    showLocateMeButton: boolean;
    showEditAddressButton: boolean;
    showMapTips: boolean;
    mapType: "amaps" | "google" | "qqmaps";
    enableGisSearch: boolean;
    basePath: string;
    valueKeyScope: PoiKeys[];
    valueKeyAlias: {
        name?: string | undefined;
        address?: string | undefined;
        country?: string | undefined;
        longitude?: string | undefined;
        latitude?: string | undefined;
        adcode?: string | undefined;
        countryCode?: string | undefined;
        city?: string | undefined;
    };
    mapStyle: Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
