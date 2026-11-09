import type { LayoutProps, LayoutContentProps, LayoutHeaderProps, SiderProps, LayoutSiderInstance, ResizeBoxProps, ResizeBoxDirection } from '../src'
import type { ResizeBoxProps as SubResizeBoxProps } from '../src/resize-box'
const edge: ResizeBoxDirection = 'right'
const box: ResizeBoxProps = { width: 0, directions: [edge], 'onMoving-end': (event: MouseEvent) => event.preventDefault(), 'onUpdate:width': (width: number) => width.toFixed() }
const sub: SubResizeBoxProps = box
const layout: LayoutProps = { onScroll: (event: Event) => event.preventDefault() }
const content: LayoutContentProps = { onScroll: (event: Event) => event.preventDefault() }
const sider: SiderProps = { resizeDirections: ['right'], onCollapse: (_value: boolean, reason: 'clickTrigger' | 'responsive') => reason.toUpperCase(), onBreakpoint: (narrow: boolean) => String(narrow) }
declare const instance: LayoutSiderInstance
instance.scrollTo({ top: 10 }); instance.scrollTo(0, 10)
// @ts-expect-error physical edge names are restricted
const invalidEdges: SiderProps = { resizeDirections: ['start'] }
// @ts-expect-error resize events receive a native MouseEvent
const invalidListener: ResizeBoxProps = { 'onMoving-end': (event: string) => event.toUpperCase() }
// @ts-expect-error collapse reason is a fixed union
const invalidReason: SiderProps = { onCollapse: (_value: boolean, reason: 'other') => reason }
// @ts-expect-error header bordered is boolean
const invalidHeader: LayoutHeaderProps = { bordered: 'yes' }
// @ts-expect-error scrollTo accepts options or x/y numbers
instance.scrollTo('top')
void [edge, box, sub, layout, content, sider, invalidEdges, invalidListener, invalidReason, invalidHeader]
