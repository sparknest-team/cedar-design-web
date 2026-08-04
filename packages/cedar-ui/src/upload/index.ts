import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Upload from './upload'

const Upload = Object.assign(_Upload, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Upload.name, _Upload)
  },
})

export type UploadInstance = InstanceType<typeof _Upload>

export type {
  UploadBeforeRead,
  UploadBeforeRemove,
  UploadBeforeUpload,
  UploadCreateThumbnailUrl,
  UploadCustomRequest,
  UploadFileItem,
  UploadHeaders,
  UploadImageFit,
  UploadListType,
  UploadPublicMethods,
  UploadProgressEvent,
  UploadRejectedFile,
  UploadRequest,
  UploadStatus,
} from './interfaces'

export { uploadProps } from './props'
export { useUploader } from './composables/use-uploader'

export default Upload
