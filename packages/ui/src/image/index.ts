import { withInstall } from '../_utils/global-config'
import { imagePreviewGroupProps } from './groupProps'
import _Image from './Image.vue'
import previewImage from './preview-api'
import _ImagePreview from './Preview.vue'
import _ImagePreviewAction from './PreviewAction.vue'
import _ImagePreviewGroup from './PreviewGroup.vue'
import { imagePreviewProps } from './previewProps'
import { imageProps } from './props'

const ImagePreview: import('../_utils/global-config').ComponentWithInstall<typeof _ImagePreview> =
  withInstall(_ImagePreview)
const ImagePreviewGroup: import('../_utils/global-config').ComponentWithInstall<typeof _ImagePreviewGroup> =
  withInstall(_ImagePreviewGroup)

const Image: import('../_utils/global-config').ComponentWithInstall<
  typeof _Image & { Preview: typeof ImagePreview; PreviewGroup: typeof ImagePreviewGroup; preview: typeof previewImage }
> = withInstall(
  _Image,
  Object.assign(_Image, {
    Preview: ImagePreview,
    PreviewGroup: ImagePreviewGroup,
    preview: previewImage,
  }),
  {
    components: [_Image, ImagePreview, ImagePreviewGroup, _ImagePreviewAction],
  },
)

export type ImagePreviewActionInstance = InstanceType<typeof _ImagePreviewAction>

export {
  ImagePreview,
  ImagePreviewGroup,
  _ImagePreviewAction as ImagePreviewAction,
  previewImage,
  previewImage as imagePreview,
  previewImage as ImagePreviewFn,
}

export const _ImageComponent: typeof Image = Image
export const _ImagePreviewComponent: typeof ImagePreview = ImagePreview
export const _ImagePreviewGroupComponent: typeof ImagePreviewGroup = ImagePreviewGroup
export const _ImagePreviewActionComponent: typeof _ImagePreviewAction = _ImagePreviewAction

export { Image }

export type {
  ImageSlots,
  ImagePreviewImageSlotProps,
  ImagePreviewSlots,
  ImagePreviewGroupSlots,
  ImagePreviewActionSlots,
  ImageFit,
  ImageInteraction,
  ImagePreviewActionName,
  ImageProps,
  ImageInstance,
  ImagePreviewProps,
  ImagePreviewInstance,
  ImagePreviewGroupProps,
  ImagePreviewGroupInstance,
  ImagePreviewOptions,
  ImagePreviewHandle,
  UserImagePreviewOptions,
} from './api'

export { imageProps, imagePreviewProps, imagePreviewGroupProps }

export default Image
