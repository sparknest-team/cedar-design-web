export declare const useFetch: (f?: {
    get: any;
    post: any;
} | undefined) => {
    fetch: {
        get: any;
        post: any;
    } | undefined;
};
