import { withInstall } from '../_utils/global-config'
import _Skeleton from './Skeleton.vue'
import _SkeletonLine from './Line.vue'
import _SkeletonShape from './Shape.vue'
import { skeletonLineProps, skeletonProps, skeletonShapeProps } from './props'

const Skeleton: import('../_utils/global-config').CedarComponentWithInstall<typeof _Skeleton & { Line: typeof _SkeletonLine; Shape: typeof _SkeletonShape }> = withInstall(_Skeleton, Object.assign(_Skeleton, {
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
  SkeletonSize,
} from './props'
export { Skeleton }
export { _SkeletonLine as SkeletonLine, _SkeletonShape as SkeletonShape }

export const _SkeletonComponent: typeof Skeleton = Skeleton
export const _SkeletonLineComponent: typeof _SkeletonLine = _SkeletonLine
export const _SkeletonShapeComponent: typeof _SkeletonShape = _SkeletonShape

export default Skeleton
