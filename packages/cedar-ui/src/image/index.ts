import { withInstall } from "../_utils/global-config";
import _Image from "./image.vue";
import _ImagePreview from "./preview.vue";
import _ImagePreviewGroup from "./preview-group.vue";
import _ImagePreviewAction from "./preview-action";
import previewImage from "./preview-api";
import { imagePreviewGroupProps } from "./groupProps";
import { imagePreviewProps } from "./previewProps";
import { imageProps } from "./props";

const Image = withInstall(
  _Image,
  Object.assign(_Image, {
    Preview: _ImagePreview,
    PreviewGroup: _ImagePreviewGroup,
    preview: previewImage,
  }),
  {
    components: [
      _Image,
      _ImagePreview,
      _ImagePreviewGroup,
      _ImagePreviewAction,
    ],
  },
);

export type ImagePreviewActionInstance = InstanceType<
  typeof _ImagePreviewAction
>;

export {
  _ImagePreview as ImagePreview,
  _ImagePreviewGroup as ImagePreviewGroup,
  _ImagePreviewAction as ImagePreviewAction,
  previewImage,
  previewImage as imagePreview,
  previewImage as ImagePreviewFn,
};

export const _ImageComponent = Image;
export const _ImagePreviewComponent = _ImagePreview;
export const _ImagePreviewGroupComponent = _ImagePreviewGroup;
export const _ImagePreviewActionComponent = _ImagePreviewAction;

export { Image };

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
} from "./api";

export { imageProps, imagePreviewProps, imagePreviewGroupProps };

export default Image;
