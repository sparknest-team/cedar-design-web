import type { OverflowListProps, OverflowListInstance } from '../src'
import type { OverflowListProps as SubProps } from '../src/overflow-list'
const empty: OverflowListProps = {}
const props: SubProps = { min: 1, margin: 0, from: 'start', onChange: (count: number) => count.toFixed() }
// @ts-expect-error only start and end are supported
const direction: OverflowListProps = { from: 'left' }
// @ts-expect-error change reports the hidden count
const event: OverflowListProps = { onChange: (value: string) => value }
declare const instance: OverflowListInstance
instance.$slots.overflow?.({ number: 2 })
// @ts-expect-error overflow scope requires a numeric count
instance.$slots.overflow?.({ number: 'two' })
// @ts-expect-error no own imperative layout API
instance.resize()
void [empty, props, direction, event]
