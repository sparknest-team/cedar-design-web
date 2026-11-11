import type { VNodeChild } from 'vue'

export interface ColorPickerTriggerSlotProps {
  describedBy?: string
}

export interface ColorPickerSlots {
  default?: (props: ColorPickerTriggerSlotProps) => VNodeChild
}

export interface RGB {
  r: number
  g: number
  b: number
}

export interface HSV {
  h: number
  s: number
  v: number
}

export interface Color {
  hsv: HSV
  rgb: RGB
  hex: string
}
