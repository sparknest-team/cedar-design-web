import {
  Icon,
  iconProps,
  type IconProps,
  type IconInstance,
} from "../src/icon";
import {
  Icon as RootIcon,
  type IconProps as RootProps,
  type IconInstance as RootInstance,
} from "../src";

const props: IconProps = {
  name: "check",
  spin: true,
  transition: "200",
  onClick: (event: MouseEvent) => event.preventDefault(),
};
const rootProps: RootProps = props;
const instance: IconInstance | undefined = undefined;
const rootInstance: RootInstance | undefined = instance;
// @ts-expect-error click receives a MouseEvent
const invalid: IconProps = { onClick: (event: string) => event };
void [Icon, RootIcon, iconProps, rootProps, rootInstance, invalid];
