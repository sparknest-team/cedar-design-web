import { withInstall } from '../_utils/global-config'
import { withPropsDefaultsSetter } from '../_utils/maple/components'
import _Image from './Image.vue'
import _ImagePreview from './Preview.vue'
import _ImagePreviewGroup from './PreviewGroup.vue'
import _ImagePreviewAction from './PreviewAction.vue'
import previewImage from './preview-api'
import { imagePreviewGroupProps } from './groupProps'
import { imagePreviewProps } from './previewProps'
import { imageProps } from './props'

const ImagePreview = withInstall(_ImagePreview)
const ImagePreviewGroup = withInstall(_ImagePreviewGroup)

const Image = withInstall(
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

withPropsDefaultsSetter(Image, imageProps)
withPropsDefaultsSetter(ImagePreview, imagePreviewProps)
withPropsDefaultsSetter(ImagePreviewGroup, imagePreviewGroupProps)

export type ImagePreviewActionInstance = InstanceType<typeof _ImagePreviewAction>

export {
  ImagePreview,
  ImagePreviewGroup,
  _ImagePreviewAction as ImagePreviewAction,
  previewImage,
  previewImage as imagePreview,
  previewImage as ImagePreviewFn,
}

export const _ImageComponent = Image
export const _ImagePreviewComponent = ImagePreview
export const _ImagePreviewGroupComponent = ImagePreviewGroup
export const _ImagePreviewActionComponent = _ImagePreviewAction

export { Image }

export type {
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
