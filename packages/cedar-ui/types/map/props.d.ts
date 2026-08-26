import type { ExtractPropTypes, PropType } from 'vue';
export type PoiKeys = 'longitude' | 'latitude' | 'address' | 'name' | 'adcode' | 'countryCode' | 'city' | 'country';
export declare const mapProps: {
    geocoderUrl: StringConstructor;
    geocoderHandler: FunctionConstructor;
    isInternational: BooleanConstructor;
    driver: ObjectConstructor;
    fetch: PropType<{
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
        type: PropType<"amaps" | "google" | "qqmaps">;
        default: string;
    };
    defaultValue: {
        type: PropType<{ [key in PoiKeys]?: string; }>;
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
        type: PropType<PoiKeys[]>;
        default: () => string[];
    };
    valueKeyAlias: {
        type: PropType<{ [key in PoiKeys]?: string; }>;
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
};
export type MapProps = ExtractPropTypes<typeof mapProps>;
export interface ModelValueType {
    adcode?: string;
    city?: string;
    country?: string;
    countryCode?: string;
    address?: string;
    latitude?: number;
    longitude?: number;
    name?: string;
}
