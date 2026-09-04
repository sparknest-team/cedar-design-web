import { withInstall } from '../_utils/global-config'
import _Skeleton from './skeleton.vue'
import _SkeletonLine from './line.vue'
import _SkeletonShape from './shape.vue'
import { skeletonLineProps, skeletonProps, skeletonShapeProps } from './props'

const Skeleton = withInstall(_Skeleton, Object.assign(_Skeleton, {
  Line: _SkeletonLine,
  Shape: _SkeletonShape,
}), { components: [_Skeleton, _SkeletonLine, _SkeletonShape] })

export type SkeletonInstance = InstanceType<typeof _Skeleton>
export type SkeletonLineInstance = InstanceType<typeof _SkeletonLine>
export type SkeletonShapeInstance = InstanceType<typeof _SkeletonShape>
export { skeletonLineProps, skeletonProps, skeletonShapeProps }
export type {
  SkeletonLineProps,
  SkeletonProps,
  SkeletonShapeProps,
  SkeletonShapeSize,
  SkeletonShapeType,
} from './props'
export { Skeleton }
export { _SkeletonLine as SkeletonLine, _SkeletonShape as SkeletonShape }

export const _SkeletonComponent = Skeleton
export const _SkeletonLineComponent = _SkeletonLine
export const _SkeletonShapeComponent = _SkeletonShape

export default Skeleton
