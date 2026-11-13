import { withInstall } from "../_utils/global-config";
import _Button from "./base";
import _ButtonGroup from "./ButtonGroup.vue";
import { buttonProps, buttonGroupProps } from "./props";

const Button: import('../_utils/global-config').CedarComponentWithInstall<typeof _Button & { Group: typeof _ButtonGroup }> = withInstall(
  _Button,
  Object.assign(_Button, {
    Group: _ButtonGroup,
  }),
  { components: [_Button, _ButtonGroup] },
);

export type ButtonInstance = InstanceType<typeof _Button>;
export type ButtonGroupInstance = InstanceType<typeof _ButtonGroup>;
export type { ButtonProps, ButtonGroupProps, ButtonVariant, ButtonLoadingMode } from "./props";

export { buttonProps, buttonGroupProps };
export { Button };
export { _ButtonGroup as ButtonGroup };

export const _ButtonComponent: typeof Button = Button;
export const _ButtonGroupComponent: typeof _ButtonGroup = _ButtonGroup;

export default Button;
