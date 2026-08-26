export declare const getMapInitData: (mapType: "amaps" | "google" | "qqmaps", baseUrl: string) => {
    key: string;
    geoUrl: string;
};
export declare const parseRgeoData: (data: any, location: {
    latitude: string;
    longitude: string;
}) => {
    longitude: string;
    latitude: string;
    address: any;
    name: any;
    adcode: any;
    countryCode: any;
    city: any;
    country: any;
};
export declare const useFetchGeocoder: (params: {
    mapType: "amaps" | "google" | "qqmaps";
    basePath: string;
    fetch?: {
        get: any;
        post: any;
    };
    geocoderHandler?: any;
}) => {
    fetchGeocoder: (latitude: string, longitude: string) => Promise<{
        longitude: string;
        latitude: string;
        address: any;
        name: any;
        adcode: any;
        countryCode: any;
        city: any;
        country: any;
    }>;
};
