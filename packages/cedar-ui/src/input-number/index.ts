import { withInstall } from "../_utils/global-config";
import _InputNumber from "./input-number";
import { inputNumberProps } from "./props";

const InputNumber = withInstall(_InputNumber, Object.assign(_InputNumber, {}), {
  components: [_InputNumber],
});

export type InputNumberInstance = InstanceType<typeof _InputNumber>;
export { InputNumber, inputNumberProps };
export type {
  InputNumberMode,
  InputNumberFormatter,
  InputNumberModelEvent,
  InputNumberParser,
  InputNumberProps,
} from "./props";
export const _InputNumberComponent = InputNumber;

export default InputNumber;
