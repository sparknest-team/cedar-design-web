import { withInstall } from '../_utils/global-config'
import _Upload from './upload'

const Upload = withInstall(_Upload, Object.assign(_Upload, {
}), { components: [_Upload] })

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

export const _UploadComponent = Upload

export { Upload }

export default Upload
export type UploadProps = import('vue').ExtractPublicPropTypes<typeof import('./props').uploadProps>
