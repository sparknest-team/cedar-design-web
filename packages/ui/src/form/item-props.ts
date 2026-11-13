import { emptyValuesProp, emptyTextProp } from "../_utils/empty-value";
import type { PropType } from "vue";
import {
  fieldEditModeProp,
  readPrettyProp,
} from "../_components/field-presentation/context";
import type { ComponentSize } from "../_utils/constant";
import type { RowProps } from "../row/props";
import { formItemDecorationProps } from "./item-decoration";
import { formItemLayoutProps } from "./layout-props";
import type { FieldRule, ValidateStatus, ValidateTrigger } from "./types";

export const formItemProps = {
  /** 编辑模式；未设置时继承 Form，字段可单独覆盖。 */
  editMode: fieldEditModeProp,
  readPretty: readPrettyProp,
  /** 模型空值识别；不改变受控判定或清空输出。 */
  emptyValues: emptyValuesProp,
  /** 纯阅读空值文案；字段 > FormItem > Form，缺省为 '-'。 */
  emptyText: emptyTextProp,
  ...formItemLayoutProps,
  ...formItemDecorationProps,
  /** 控件尺寸；未设置时继承 Form，不改变标签密度。 */
  size: String as PropType<ComponentSize>,
  field: { type: String, default: "" },
  label: String,
  noStyle: Boolean,
  disabled: { type: Boolean, default: undefined },
  readonly: { type: Boolean, default: undefined },
  help: String,
  extra: String,
  required: Boolean,
  /** 单项规则优先于 Form.rules。 */
  rules: [Object, Array] as PropType<FieldRule | FieldRule[]>,
  /** 仅覆盖展示状态，不改变实际校验结果。 */
  validateStatus: String as PropType<ValidateStatus>,
  validateTrigger: {
    type: [String, Array] as PropType<ValidateTrigger | ValidateTrigger[]>,
    default: "change",
  },
  hideLabel: Boolean,
  hideAsterisk: Boolean,
  rowProps: Object as PropType<RowProps>,
  rowClass: [String, Array, Object],
  feedback: Boolean,
};

export type FormItemProps = import('../_utils/public-props').CompatiblePublicProps<
  typeof formItemProps
>;
