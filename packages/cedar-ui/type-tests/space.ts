import {
  Space,
  type SpaceProps,
  type SpaceSize,
  type SpaceInstance,
} from "../src/space";
import { Space as RootSpace, type SpaceProps as RootProps } from "../src";
const props: SpaceProps = {
  size: [8, "2rem"],
  direction: "column",
  align: "stretch",
  justify: "space-evenly",
};
const root: RootProps = props;
const zero: SpaceSize = 0;
const instance: SpaceInstance | undefined = undefined;
// @ts-expect-error direction uses row/column, not horizontal/vertical
const badDirection: SpaceProps = { direction: "horizontal" };
// @ts-expect-error tuple has exactly two lengths
const badSize: SpaceSize = [8, 16, 24];
void [Space, RootSpace, root, zero, instance, badDirection, badSize];
