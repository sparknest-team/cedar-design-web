import { App } from 'vue'
import { CedarOptions } from '../_utils/types'
import { getComponentPrefix, setGlobalConfig } from '../_utils/global-config'
import _Image from './image.vue'
import _ImagePreview from './preview.vue'
import _ImagePreviewGroup from './preview-group.vue'
import _ImagePreviewAction from './preview-action'
import previewImage from './preview-api'

const Image = Object.assign(_Image, {
  Preview: _ImagePreview,
  PreviewGroup: _ImagePreviewGroup,
  preview: previewImage,
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Image.name, _Image)
    app.component(componentPrefix + _ImagePreview.name, _ImagePreview)
    app.component(componentPrefix + _ImagePreviewGroup.name, _ImagePreviewGroup)
    app.component(componentPrefix + _ImagePreviewAction.name, _ImagePreviewAction)
  },
})

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

export default Image
