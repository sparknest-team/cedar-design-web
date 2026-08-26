import { type Ref } from 'vue';
export declare const usePureProp: <T extends Record<string, unknown>, K extends keyof T>(props: T, name: K) => Ref<T[K]>;
