export interface PoiInfo {
    type?: string;
    address?: string;
    countryCode?: string;
    adcode?: string;
    city?: string;
    name?: string;
    longitude?: number;
    latitude?: number;
}
export declare const useSuggest: (fetch?: {
    get: any;
    post: any;
}, basePath?: string) => {
    suggestSearch: (params: Record<string, unknown>) => Promise<PoiInfo[]>;
};
