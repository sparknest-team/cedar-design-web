import { type SpaceDirection, type SpaceJustify } from './props';
export interface SpaceMarginOptions {
    direction: SpaceDirection;
    justify: SpaceJustify;
    index: number;
    lastIndex: number;
}
export declare function half(value: string): string;
export declare function computeMargin(y: string, x: string, options: SpaceMarginOptions): string;
