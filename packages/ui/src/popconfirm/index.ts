import { withInstall } from "../_utils/global-config";
import _Popconfirm from "./Popconfirm.vue";
import { popconfirmProps } from "./props";

const Popconfirm: import('../_utils/global-config').ComponentWithInstall<typeof _Popconfirm> = withInstall(_Popconfirm, Object.assign(_Popconfirm, {}), {
  components: [_Popconfirm],
});

export type PopconfirmInstance = InstanceType<typeof _Popconfirm>;
export type {
  PopconfirmBeforeConfirm,
  PopconfirmProps,
  PopconfirmBeforeCancel,
} from "./props";
export { Popconfirm, popconfirmProps };
export const _PopconfirmComponent: typeof Popconfirm = Popconfirm;

export default Popconfirm;
