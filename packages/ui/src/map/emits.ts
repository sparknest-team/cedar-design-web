type MapValue = Record<string, unknown>

export const mapEmits = {
  change: (_scopedValue: MapValue, _fullValue: MapValue) => true,
  error: (_error: unknown) => true,
  init: (_initialValue: MapValue, _completedValue: MapValue) => true,
  'loading:address': () => true,
  'loaded:address': () => true,
  'update:modelValue': (_value: MapValue) => true,
}

export const mapSelectEmits = {
  change: mapEmits.change,
  error: mapEmits.error,
  init: mapEmits.init,
  clear: () => true,
  'update:modelValue': mapEmits['update:modelValue'],
}

export type MapEmits = { [Event in keyof typeof mapEmits]: Parameters<(typeof mapEmits)[Event]> }
export type MapSelectEmits = { [Event in keyof typeof mapSelectEmits]: Parameters<(typeof mapSelectEmits)[Event]> }
