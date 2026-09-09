import { withInstall } from "../_utils/global-config";
import _Textarea from "./textarea.vue";
import { textareaProps } from "./props";

const Textarea = withInstall(_Textarea, Object.assign(_Textarea, {}), {
  components: [_Textarea],
});

export type TextareaInstance = InstanceType<typeof _Textarea>;
export { textareaProps };
export type {
  TextareaAutoSize,
  TextareaMaxLength,
  TextareaProps,
  WordLength,
  WordSlice,
} from "./props";
export const _TextareaComponent = Textarea;
export { Textarea };

export default Textarea;
