import type { TriggerEvent } from '../_utils/constant';
export type PopoverTrigger = TriggerEvent | 'manual';
export declare const POPOVER_PLACEMENTS: readonly ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"];
export type PopoverPlacement = (typeof POPOVER_PLACEMENTS)[number];
