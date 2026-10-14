import type { InjectionKey } from 'vue'

export const PickerInjectionKey: InjectionKey<PickerContext> = Symbol('PickerInjectionKey')

export type PickerContext = Readonly<{
  datePickerT: (key: string, ...args: any[]) => any
}>
