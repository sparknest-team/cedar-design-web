import { responsiveArray, type Breakpoint } from '../_utils/responsive-observe'
import { isResizeBoxSize } from '../resize-box/validation'
export const isSiderPlacement = (value: unknown): value is 'left' | 'right' => value === 'left' || value === 'right'
export const isSiderCollapseMode = (value: unknown): value is 'width' | 'transform' => value === 'width' || value === 'transform'
export const isSiderBreakpoint = (value: unknown): value is Breakpoint => responsiveArray.includes(value as Breakpoint)
export const isSiderWidth = (value: unknown): value is number | string => isResizeBoxSize(value) || typeof value === 'string' && value.trim().length > 0
