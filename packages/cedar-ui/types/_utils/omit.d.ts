import type { Data } from './types';
export declare const omit: <T extends Data, K extends keyof any>(object: T, path: Array<K>) => Omit<T, K>;
