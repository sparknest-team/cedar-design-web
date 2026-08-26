import _Map from './map';
import _MapSelect from './map-select';
import { mapProps } from './props';
declare const Map: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
            type: import("vue").PropType<import("./props").PoiKeys[]>;
            default: () => string[];
        };
        valueKeyAlias: {
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "init" | "loading:address" | "loaded:address")[], import("vue").PublicProps, {
        isInternational: boolean;
        showName: boolean;
        showLocateMeButton: boolean;
        showEditAddressButton: boolean;
        showMapTips: boolean;
        mapType: "amaps" | "google" | "qqmaps";
        enableGisSearch: boolean;
        basePath: string;
        valueKeyScope: import("./props").PoiKeys[];
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
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
            type: import("vue").PropType<import("./props").PoiKeys[]>;
            default: () => string[];
        };
        valueKeyAlias: {
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        isInternational: boolean;
        showName: boolean;
        showLocateMeButton: boolean;
        showEditAddressButton: boolean;
        showMapTips: boolean;
        mapType: "amaps" | "google" | "qqmaps";
        enableGisSearch: boolean;
        basePath: string;
        valueKeyScope: import("./props").PoiKeys[];
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
        type: import("vue").PropType<import("./props").PoiKeys[]>;
        default: () => string[];
    };
    valueKeyAlias: {
        type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "init" | "loading:address" | "loaded:address")[], "change" | "update:modelValue" | "init" | "loading:address" | "loaded:address", {
    isInternational: boolean;
    showName: boolean;
    showLocateMeButton: boolean;
    showEditAddressButton: boolean;
    showMapTips: boolean;
    mapType: "amaps" | "google" | "qqmaps";
    enableGisSearch: boolean;
    basePath: string;
    valueKeyScope: import("./props").PoiKeys[];
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
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Select: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
            type: import("vue").PropType<import("./props").PoiKeys[]>;
            default: () => string[];
        };
        valueKeyAlias: {
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
            type: import("vue").PropType<import("./props").PoiKeys[]>;
            default: () => string[];
        };
        valueKeyAlias: {
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
        valueKeyScope: import("./props").PoiKeys[];
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
}>;
export type MapInstance = InstanceType<typeof _Map>;
export type MapSelectInstance = InstanceType<typeof _MapSelect>;
export type { MapProps, ModelValueType, PoiKeys } from './props';
export { mapProps };
export { Map };
export { _MapSelect as MapSelect };
export declare const _MapComponent: import("../_utils/global-config").CedarComponentWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
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
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
            type: import("vue").PropType<import("./props").PoiKeys[]>;
            default: () => string[];
        };
        valueKeyAlias: {
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "init" | "loading:address" | "loaded:address")[], import("vue").PublicProps, {
        isInternational: boolean;
        showName: boolean;
        showLocateMeButton: boolean;
        showEditAddressButton: boolean;
        showMapTips: boolean;
        mapType: "amaps" | "google" | "qqmaps";
        enableGisSearch: boolean;
        basePath: string;
        valueKeyScope: import("./props").PoiKeys[];
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
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
            type: import("vue").PropType<import("./props").PoiKeys[]>;
            default: () => string[];
        };
        valueKeyAlias: {
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
    }>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, {
        isInternational: boolean;
        showName: boolean;
        showLocateMeButton: boolean;
        showEditAddressButton: boolean;
        showMapTips: boolean;
        mapType: "amaps" | "google" | "qqmaps";
        enableGisSearch: boolean;
        basePath: string;
        valueKeyScope: import("./props").PoiKeys[];
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
        type: import("vue").PropType<import("./props").PoiKeys[]>;
        default: () => string[];
    };
    valueKeyAlias: {
        type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "init" | "loading:address" | "loaded:address")[], "change" | "update:modelValue" | "init" | "loading:address" | "loaded:address", {
    isInternational: boolean;
    showName: boolean;
    showLocateMeButton: boolean;
    showEditAddressButton: boolean;
    showMapTips: boolean;
    mapType: "amaps" | "google" | "qqmaps";
    enableGisSearch: boolean;
    basePath: string;
    valueKeyScope: import("./props").PoiKeys[];
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
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    Select: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
            type: import("vue").PropType<import("./props").PoiKeys[]>;
            default: () => string[];
        };
        valueKeyAlias: {
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
            type: import("vue").PropType<import("./props").PoiKeys[]>;
            default: () => string[];
        };
        valueKeyAlias: {
            type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
        valueKeyScope: import("./props").PoiKeys[];
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
}>;
export declare const _MapSelectComponent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
        type: import("vue").PropType<import("./props").PoiKeys[]>;
        default: () => string[];
    };
    valueKeyAlias: {
        type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
        type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
        type: import("vue").PropType<import("./props").PoiKeys[]>;
        default: () => string[];
    };
    valueKeyAlias: {
        type: import("vue").PropType<{ [key in import("./props").PoiKeys]?: string; }>;
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
    valueKeyScope: import("./props").PoiKeys[];
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
export default Map;
