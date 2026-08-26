export interface CacheInstance<T> {
    cache: T[];
    has(key: T): boolean;
    add(key: T): void;
    remove(key: T): void;
    clear(): void;
}
export declare const isHTMLSupportImage: (val: unknown) => val is string;
export declare const isHTMLSupportVideo: (val: unknown) => val is string;
export declare const createCache: <T>(max: number) => CacheInstance<T>;
export declare const linear: (value: number) => number;
export declare const cubic: (value: number) => number;
export declare const easeInOutCubic: (value: number) => number;
export declare const padStart: (str: string | undefined, maxLength: number, fillString?: string) => string;
