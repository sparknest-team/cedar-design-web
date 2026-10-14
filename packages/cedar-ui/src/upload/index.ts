import { withInstall } from '../_utils/global-config'
import _Upload from './upload.vue'
const Upload = withInstall(_Upload, _Upload, { components: [_Upload] })
export type UploadInstance = InstanceType<typeof _Upload>
export type * from './interfaces'
export type { UploadProps } from './props'
export type { UseUploaderOptions } from './composables/use-uploader'
export { uploadProps } from './props'
export { useUploader } from './composables/use-uploader'
export const _UploadComponent = Upload
export { Upload }
export default Upload
