import { type PoiKeys } from './props';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "init" | "loading:address" | "loaded:address")[], "change" | "update:modelValue" | "init" | "loading:address" | "loaded:address", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInit?: ((...args: any[]) => any) | undefined;
    "onLoading:address"?: ((...args: any[]) => any) | undefined;
    "onLoaded:address"?: ((...args: any[]) => any) | undefined;
}>, {
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
