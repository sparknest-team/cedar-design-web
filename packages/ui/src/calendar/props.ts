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
    /**
     * @zh 是否允许选择日期
     * @en Whether date selection is allowed
     */
    allowSelect: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否使用紧凑面板
     * @en Whether to use the compact panel
     */
    panel: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 面板宽度，单位为像素
     * @en Panel width in pixels
     */
    panelWidth: {
      type: Number,
    },
    /**
     * @zh 是否显示面板底部的今天按钮
     * @en Whether to show the panel footer Today button
     */
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
