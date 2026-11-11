import type { ScrollbarProps, ScrollbarInstance } from '../src'
import type { ScrollbarProps as SubProps } from '../src/scrollbar'
import type { ScrollbarProps as LegacyProps } from '../src/scrollbar/src/types'
const optional: ScrollbarProps = {}
const legacy: LegacyProps = {}
const scrollbar: ScrollbarProps = { outerClass: ['custom', { active: true }], outerStyle: [{ width: '300px' }, false], onScroll: (event: Event) => event.preventDefault() }
const sub: SubProps = scrollbar
// @ts-expect-error private decoration controls are not public props
const privateFlag: ScrollbarProps = { disableVertical: true }
// @ts-expect-error outer class uses the existing ClassName contract
const wrongClass: ScrollbarProps = { outerClass: 123 }
// @ts-expect-error styles use Vue StyleValue
const wrongStyle: ScrollbarProps = { outerStyle: 123 }
// @ts-expect-error scroll receives a native Event
const wrongListener: ScrollbarProps = { onScroll: (event: string) => event.toUpperCase() }
declare const instance: ScrollbarInstance
instance.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
instance.scrollTo(0, 0); instance.scrollTo(); instance.scrollTop(0); instance.scrollLeft(-120)
// @ts-expect-error native options have a fixed behavior union
instance.scrollTo({ behavior: 'unknown' })
// @ts-expect-error scroll position is numeric
instance.scrollTop('0')
void [optional, legacy, scrollbar, sub, privateFlag, wrongClass, wrongStyle, wrongListener]

// Keep the compact public interface equivalent to the actual public component fields.
type RuntimePublic = Pick<InstanceType<typeof import('../src/scrollbar')['default']>['$props'], 'type' | 'outerClass' | 'outerStyle' | 'onScroll'>
const acceptsRuntime = (value: RuntimePublic): ScrollbarProps => value
const acceptsPublic = (value: ScrollbarProps): RuntimePublic => value
void [acceptsRuntime, acceptsPublic]
