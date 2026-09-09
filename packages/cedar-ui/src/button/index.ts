import { withInstall } from "../_utils/global-config";
import _Button from "./button.vue";
import _ButtonGroup from "./button-group.vue";
import { buttonProps, buttonGroupProps } from "./props";

const Button = withInstall(
  _Button,
  Object.assign(_Button, {
    Group: _ButtonGroup,
  }),
  { components: [_Button, _ButtonGroup] },
);

export type ButtonInstance = InstanceType<typeof _Button>;
export type ButtonGroupInstance = InstanceType<typeof _ButtonGroup>;
export type { ButtonProps, ButtonGroupProps, ButtonVariant, ButtonLoadingMode, ButtonHandler } from "./props";

export { buttonProps, buttonGroupProps };
export { Button };
export { _ButtonGroup as ButtonGroup };

export const _ButtonComponent = Button;
export const _ButtonGroupComponent = _ButtonGroup;

export default Button;
