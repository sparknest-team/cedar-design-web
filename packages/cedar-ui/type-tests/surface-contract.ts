import PaperDefault, { Paper, paperProps } from '../src/paper'
import { Paper as RootPaper } from '../src'
import type { PaperProps, PaperInstance } from '../src'
import type { PaperProps as SubProps } from '../src/paper'
const minimal: PaperProps = {}
const props: PaperProps = { width: 0, radius: 'calc(1rem + 2px)', onClick: (event: MouseEvent) => event.preventDefault() }
const sub: SubProps = props
const components: typeof PaperDefault[] = [Paper, RootPaper]
// @ts-expect-error click receives the real native MouseEvent
const wrong: PaperProps = { onClick: (value: string) => value.toUpperCase() }
declare const instance: PaperInstance
// @ts-expect-error surfaces do not expose business execution methods
instance.run()
void [minimal, sub, props, components, paperProps, wrong]
