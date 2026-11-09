import type { SplitProps, SplitInstance } from '../src'
import type { SplitProps as SubSplitProps } from '../src/split'
const empty: SplitProps = {}
const split: SplitProps = { ariaLabel: 'Resize navigation', orientation: 'vertical', size: '50%', 'onMove-start': (event: MouseEvent) => event.preventDefault(), 'onMove-end': (event: MouseEvent) => event.preventDefault(), onMoving: (event: MouseEvent) => event.preventDefault(), 'onUpdate:size': (size: number | string) => String(size) }
const sub: SubSplitProps = split
// @ts-expect-error separators have one textual name
const wrongLabel: SplitProps = { ariaLabel: ['one', 'two'] }
// @ts-expect-error the real move-end payload is a native MouseEvent
const wrongEvent: SplitProps = { 'onMove-end': (value: string) => value.toUpperCase() }
// @ts-expect-error ratio and pixel updates are both valid payloads
const wrongUpdate: SplitProps = { 'onUpdate:size': (value: boolean) => value }
// @ts-expect-error the layout axis has two orientations
const wrongAxis: SplitProps = { orientation: 'diagonal' }
declare const instance: SplitInstance
// @ts-expect-error Split exposes no custom resize method
instance.resize(100)
void [empty, split, sub, wrongLabel, wrongEvent, wrongUpdate, wrongAxis]
