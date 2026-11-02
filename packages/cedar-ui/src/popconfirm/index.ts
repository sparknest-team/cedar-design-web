import { withInstall } from "../_utils/global-config";
import _Popconfirm from "./Popconfirm.vue";
import { popconfirmProps } from "./props";

const Popconfirm = withInstall(_Popconfirm, Object.assign(_Popconfirm, {}), {
  components: [_Popconfirm],
});

export type PopconfirmInstance = InstanceType<typeof _Popconfirm>;
export type {
  PopconfirmBeforeConfirm,
  PopconfirmProps,
  PopconfirmBeforeCancel,
} from "./props";
export { Popconfirm, popconfirmProps };
export const _PopconfirmComponent = Popconfirm;

export default Popconfirm;
