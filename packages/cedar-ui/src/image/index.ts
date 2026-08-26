import { withInstall } from '../_utils/global-config'
import _Image from './image.vue'
import _ImagePreview from './preview.vue'
import _ImagePreviewGroup from './preview-group.vue'
import _ImagePreviewAction from './preview-action'
import previewImage from './preview-api'
import { imageProps } from './props'

const Image = withInstall(_Image, Object.assign(_Image, {
  Preview: _ImagePreview,
  PreviewGroup: _ImagePreviewGroup,
  preview: previewImage,
}), { components: [_Image, _ImagePreview, _ImagePreviewGroup, _ImagePreviewAction] })

export type ImageInstance = InstanceType<typeof _Image>
export type ImagePreviewInstance = InstanceType<typeof _ImagePreview>
export type ImagePreviewGroupInstance = InstanceType<typeof _ImagePreviewGroup>
export type ImagePreviewActionInstance = InstanceType<typeof _ImagePreviewAction>

export {
  _ImagePreview as ImagePreview,
  _ImagePreviewGroup as ImagePreviewGroup,
  _ImagePreviewAction as ImagePreviewAction,
  previewImage,
  previewImage as ImagePreviewFn,
}

export const _ImageComponent = Image

export { Image }

export type { ActionType } from './preview-toolbar.vue'

export { imageProps }

export default Image
