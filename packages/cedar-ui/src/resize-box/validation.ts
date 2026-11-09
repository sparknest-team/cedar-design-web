export const resizeBoxDirections = ['left', 'right', 'top', 'bottom'] as const
export type ResizeBoxDirection = typeof resizeBoxDirections[number]
export const isResizeBoxSize = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value) && value >= 0
const isDirection = (value: unknown): value is ResizeBoxDirection => resizeBoxDirections.includes(value as ResizeBoxDirection)
export const isResizeBoxDirections = (value: unknown): value is ResizeBoxDirection[] => Array.isArray(value) && value.every(isDirection) && new Set(value).size === value.length
export const normalizeResizeBoxDirections = (value: unknown): ResizeBoxDirection[] => Array.isArray(value) ? [...new Set(value.filter(isDirection))] : []
export const isResizeBoxTag = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0
