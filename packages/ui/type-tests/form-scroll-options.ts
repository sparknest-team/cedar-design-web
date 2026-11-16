import type { Options } from 'scroll-into-view-if-needed'
import type { FormScrollOptions } from '../src/form/scroll-options'

type Assert<T extends true> = T
type BothDirections = Assert<FormScrollOptions extends Options ? Options extends FormScrollOptions ? true : false : false>
type KeysMatch = Assert<Exclude<keyof Options, keyof FormScrollOptions> extends never ? Exclude<keyof FormScrollOptions, keyof Options> extends never ? true : false : false>

const standard: FormScrollOptions = { block: 'start', boundary: element => element instanceof Element, behavior: 'smooth' }
const custom: FormScrollOptions = { behavior: actions => actions.map(({ el, top, left }) => ({ el, top, left })) }
// @ts-expect-error unsupported scroll mode
const invalid: FormScrollOptions = { scrollMode: 'sometimes' }
void [standard, custom, invalid, null as unknown as BothDirections | KeysMatch]
