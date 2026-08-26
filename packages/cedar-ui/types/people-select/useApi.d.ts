import type { Ref } from 'vue';
export declare function useApi(fetch?: {
    get: any;
    post: any;
}, urlType?: Ref<string | undefined>): {
    getPeople: (name?: string) => Promise<unknown>;
    getPeopleFromNaponen: (userId?: string) => Promise<unknown>;
};
