import type { ExtractPropTypes, PropType } from 'vue'

export const skeletonProps = {
  loading: { type: Boolean, default: true },
  animation: { type: Boolean, default: false },
} 

export const skeletonLineProps = {
  rows: { type: Number, default: 1 },
  widths: {
    type: Array as PropType<Array<number | string>>,
    default: () => [],
  },
  lineHeight: { type: Number, default: 20 },
  lineSpacing: { type: Number, default: 15 },
} 

export const skeletonShapeTypes = ['square', 'circle'] as const
export const skeletonShapeSizes = ['sm', 'md', 'lg'] as const

export type SkeletonShapeType = (typeof skeletonShapeTypes)[number]
export type SkeletonShapeSize = (typeof skeletonShapeSizes)[number]

export const skeletonShapeProps = {
  shape: {
    type: String as PropType<SkeletonShapeType>,
    default: 'square',
    validator: (value: unknown): value is SkeletonShapeType =>
      skeletonShapeTypes.includes(value as SkeletonShapeType),
  },
  size: {
    type: String as PropType<SkeletonShapeSize>,
    default: 'md',
    validator: (value: unknown): value is SkeletonShapeSize =>
      skeletonShapeSizes.includes(value as SkeletonShapeSize),
  },
} 

export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>
export type SkeletonLineProps = ExtractPropTypes<typeof skeletonLineProps>
export type SkeletonShapeProps = ExtractPropTypes<typeof skeletonShapeProps>
