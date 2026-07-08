// ColorPicker,
import { Row } from '../grid'
import Cascader from '../cascader'
import DatePicker, { RangePicker } from '../date-picker'
import Form, { FormItem } from '../form'
import Input from '../input'
import InputNumber from '../input-number'
import Select, { Option } from '../select'
import RadioGroup from '../radio'
import Switch from '../switch'
import Textarea from '../textarea'
import PeopleSelect from '../people-select'

// import { ImageUpload } from '../imageUpload'
// import { FileUpload } from '../fileUpload'
// import { People } from '../form/people'
// import {ResourceSuggest} from '../form/resourceSuggest'

export enum ComponentEnum {
  PEOPLE_SELECT = 'people-select',
  RESOURCE_SUGGEST = 'resource-suggest',
  CASCADER = 'c-cascader',
  COLOR_PICKER = 'color-picker',
  IMAGE_UPLOAD = 'portal-upload',
  FILE_UPLOAD = 'file-upload',
  INPUT = 'c-input',
  TEXTAREA = 'c-textarea',
  INPUT_NUMBER = 'c-input-number',
  SELECT = 'c-select',
  RICHTEXT = 'richtext',
  FORM_ITEM = 'el-form-item',
  OPTION = 'c-option',
  FORM = 'c-form',
  DIV = 'div',
  ROW = 'c-row',
  DATEPICKER = 'c-date-picker',
  DATEPICKER_RANGE = 'c-range-picker',
  SWITCH = 'c-switch',
  RADIO_GROUP = 'c-radio-group',
}

export const formItemMapping = [
  ComponentEnum.PEOPLE_SELECT,
  ComponentEnum.RESOURCE_SUGGEST,
  ComponentEnum.CASCADER,
  ComponentEnum.COLOR_PICKER,
  ComponentEnum.IMAGE_UPLOAD,
  ComponentEnum.FILE_UPLOAD,
  ComponentEnum.INPUT,
  ComponentEnum.TEXTAREA,
  ComponentEnum.INPUT_NUMBER,
  ComponentEnum.DATEPICKER,
  ComponentEnum.DATEPICKER_RANGE,
  ComponentEnum.SELECT,
  ComponentEnum.SWITCH,
  ComponentEnum.RADIO_GROUP,
]

export const eventMapping = {
  [ComponentEnum.PEOPLE_SELECT]: 'change',
  [ComponentEnum.RESOURCE_SUGGEST]: 'change',
  [ComponentEnum.CASCADER]: 'input',
  [ComponentEnum.COLOR_PICKER]: 'change',
  [ComponentEnum.IMAGE_UPLOAD]: 'change',
  [ComponentEnum.FILE_UPLOAD]: 'change',
  [ComponentEnum.INPUT]: 'input',
  [ComponentEnum.TEXTAREA]: 'input',
  [ComponentEnum.INPUT_NUMBER]: 'input',
  [ComponentEnum.DATEPICKER]: 'input',
  [ComponentEnum.DATEPICKER_RANGE]: 'input',
  [ComponentEnum.SELECT]: 'change',
  [ComponentEnum.RICHTEXT]: 'change',
  [ComponentEnum.SWITCH]: 'change',
  [ComponentEnum.RADIO_GROUP]: 'change',
} as any

export const mapping = {
  [ComponentEnum.DIV]: 'div',
  [ComponentEnum.CASCADER]: Cascader,
  [ComponentEnum.PEOPLE_SELECT]: PeopleSelect,
  // [ComponentEnum.RESOURCE_SUGGEST]: ResourceSuggest,
  [ComponentEnum.ROW]: Row,
  [ComponentEnum.FORM]: Form,
  [ComponentEnum.FORM_ITEM]: FormItem,
  [ComponentEnum.OPTION]: Option,
  // [ComponentEnum.COLOR_PICKER]: ColorPicker,
  // [ComponentEnum.IMAGE_UPLOAD]: ImageUpload,
  // [ComponentEnum.FILE_UPLOAD]: FileUpload,
  [ComponentEnum.INPUT]: Input,
  [ComponentEnum.TEXTAREA]: Textarea,
  [ComponentEnum.INPUT_NUMBER]: InputNumber,
  [ComponentEnum.DATEPICKER]: DatePicker,
  [ComponentEnum.DATEPICKER_RANGE]: RangePicker,
  [ComponentEnum.SELECT]: Select,
  [ComponentEnum.SWITCH]: Switch,
  [ComponentEnum.RADIO_GROUP]: RadioGroup,
} as any
