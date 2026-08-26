import { defineComponent, computed, toRefs, PropType, ref } from 'vue'
import type { Dayjs, UnitType } from 'dayjs'
import Month, { getAllDaysByTime } from './month'
import Year from './year'
import Header from './header'
import { getDayjsValue, getNow, methods, pickDataAttributes } from '../_utils/date'
import { getPrefixCls, createNamespace } from '../_utils/global-config'
import { useI18n } from '../locale'

export const calendarProps = {
    /**
     * @zh 绑定值
     * @en Value
     */
    modelValue: {
      type: Date,
      default: undefined,
    },
    /**
     * @zh 默认值（非受控状态）
     * @en Default value (uncontrolled state)
     */
    defaultValue: {
      type: Date,
    },
    /**
     * @zh 模式
     * @en Mode
     */
    mode: {
      type: String as PropType<'month' | 'year'>,
    },
    /**
     * @zh 默认模式
     * @en Default Mode
     */
    defaultMode: {
      type: String as PropType<'month' | 'year'>,
      default: 'month',
    },
    /**
     * @zh 显示的模式
     * @en Displayed mode
     */
    modes: {
      type: Array as PropType<('month' | 'year')[]>,
      default: () => ['month', 'year'],
    },
    allowSelect: {
      type: Boolean,
      default: true,
    },
    panel: {
      type: Boolean,
      default: false,
    },
    panelWidth: {
      type: Number,
    },
    panelTodayBtn: {
      type: Boolean,
      default: false,
    },
    dayStartOfWeek: {
      type: Number as PropType<0 | 1>,
      default: 0,
    },
    isWeek: {
      type: Boolean,
      default: false,
    },
  } 
