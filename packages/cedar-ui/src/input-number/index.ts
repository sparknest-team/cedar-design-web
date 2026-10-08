import { withInstall } from "../_utils/global-config";
import _InputNumber from "./InputNumber.vue";
import { inputNumberProps } from "./props";

const InputNumber = withInstall(_InputNumber, Object.assign(_InputNumber, {}), {
  components: [_InputNumber],
});

export type InputNumberInstance = InstanceType<typeof _InputNumber>;
export { InputNumber, inputNumberProps };
export type {
  InputNumberMode,
  InputNumberSize,
  InputNumberVariant,
  InputNumberFormatter,
  InputNumberModelEvent,
  InputNumberParser,
  InputNumberProps,
} from "./props";
export const _InputNumberComponent = InputNumber;

export default InputNumber;
