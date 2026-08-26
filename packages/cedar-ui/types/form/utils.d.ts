import { ValidateStatus } from './types';
export declare function getValueByPath(obj: any, path: string, strict: boolean): {
    o: unknown;
    k: string;
    v: unknown;
};
export declare const getFinalValidateStatus: (validateStatus: Record<string, ValidateStatus | "">) => "" | "success" | "warning" | "error" | "validating";
export declare const getFinalValidateMessage: (validateMessage: Record<string, string>) => string[];
export declare const getFormElementId: (prefix: string | undefined, field: string) => string;
