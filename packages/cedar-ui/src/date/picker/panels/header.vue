<template>
  <div :class="`${prefixCls}-header`">
    <button type="button" :class="getIconClassName(showSuperPrev)" :aria-label="previousYearLabel" :disabled="!showSuperPrev" :aria-hidden="!showSuperPrev" :tabindex="showSuperPrev ? undefined : -1" @click="onSuperPrev">
      <template v-if="showSuperPrev">
        <RenderFunction v-if="icons && icons.prevDouble" :render-func="icons && icons.prevDouble" />
        <IconDoubleLeft v-else />
      </template>
    </button>
    <button type="button" :class="getIconClassName(showPrev)" :aria-label="previousMonthLabel" :disabled="!showPrev" :aria-hidden="!showPrev" :tabindex="showPrev ? undefined : -1" @click="onPrev">
      <template v-if="showPrev">
        <RenderFunction v-if="icons && icons.prev" :render-func="icons && icons.prev" />
        <IconLeft v-else />
      </template>
    </button>
    <div :class="`${prefixCls}-header-title`">
      <template v-if="onLabelClick && (year || month)">
        <button v-if="year" type="button" :class="`${prefixCls}-header-label`" @click="() => onLabelClick && onLabelClick('year')">{{
          year
        }}</button>
        <span v-if="year && month">-</span>
        <button v-if="month" type="button" :class="`${prefixCls}-header-label`" @click="() => onLabelClick && onLabelClick('month')">{{
          month
        }}</button>
      </template>
      <template v-else>{{ title }}</template>
    </div>
    <button type="button" :class="getIconClassName(showNext)" :aria-label="nextMonthLabel" :disabled="!showNext" :aria-hidden="!showNext" :tabindex="showNext ? undefined : -1" @click="onNext">
      <template v-if="showNext">
        <RenderFunction v-if="icons && icons.next" :render-func="icons && icons.next" />
        <IconRight v-else />
      </template>
    </button>
    <button type="button" :class="getIconClassName(showSuperNext)" :aria-label="nextYearLabel" :disabled="!showSuperNext" :aria-hidden="!showSuperNext" :tabindex="showSuperNext ? undefined : -1" @click="onSuperNext">
      <template v-if="showSuperNext">
        <RenderFunction v-if="icons && icons.nextDouble" :render-func="icons && icons.nextDouble" />
        <IconDoubleRight v-else />
      </template>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import type { Dayjs } from 'dayjs'
import { isFunction } from '../../../_utils/is'
import { IconLeft } from '@cedarjs/icons-vue/icon-left'
import { IconRight } from '@cedarjs/icons-vue/icon-right'
import { IconDoubleLeft } from '@cedarjs/icons-vue/icon-double-left'
import { IconDoubleRight } from '@cedarjs/icons-vue/icon-double-right'
import { HeaderIcons, Mode } from '../types'
import RenderFunction from '../../../_components/render-function'
import { createNamespace } from '../../../_utils/global-config'
import { useI18n } from '../../../locale'

type ClickCallbackFunc = (payload: MouseEvent) => void

export type HeaderLabelClickFunc = (label: 'year' | 'month') => void

export default defineComponent({
  name: createNamespace('date-picker-header').name,
  components: {
    IconLeft,
    IconRight,
    IconDoubleLeft,
    IconDoubleRight,
    RenderFunction,
  },
  props: {
    prefixCls: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    mode: {
      type: String as PropType<Mode>,
      default: 'date',
    },
    value: {
      type: Object as PropType<Dayjs>,
    },
    icons: {
      type: Object as PropType<HeaderIcons>,
    },
    onPrev: {
      type: Function as PropType<ClickCallbackFunc>,
    },
    onSuperPrev: {
      type: Function as PropType<ClickCallbackFunc>,
    },
    onNext: {
      type: Function as PropType<ClickCallbackFunc>,
    },
    onSuperNext: {
      type: Function as PropType<ClickCallbackFunc>,
    },
    onLabelClick: {
      type: Function as PropType<HeaderLabelClickFunc>,
    },
  },
  emits: ['label-click'],
  setup(props) {
    const { t } = useI18n()
    const navigationUnit = computed(() => props.mode === 'year' ? 'Period' : ['month', 'quarter'].includes(props.mode) ? 'Year' : 'Month')
    return {
      showPrev: computed(() => isFunction(props.onPrev)),
      showSuperPrev: computed(() => isFunction(props.onSuperPrev)),
      showNext: computed(() => isFunction(props.onNext)),
      showSuperNext: computed(() => isFunction(props.onSuperNext)),
      year: computed(() =>
        ['date', 'quarter', 'month', 'week'].includes(props.mode) && props.value ? props.value.format('YYYY') : '',
      ),
      month: computed(() => (['date', 'week'].includes(props.mode) && props.value ? props.value.format('MM') : '')),
      getIconClassName: (show?: boolean) => [
        `${props.prefixCls}-header-icon`,
        {
          [`${props.prefixCls}-header-icon-hidden`]: !show,
        },
      ],
      previousYearLabel: computed(() => t(props.mode === 'year' ? 'datePicker.previousPeriod' : 'datePicker.previousYear')),
      previousMonthLabel: computed(() => t(`datePicker.previous${navigationUnit.value}`)),
      nextMonthLabel: computed(() => t(`datePicker.next${navigationUnit.value}`)),
      nextYearLabel: computed(() => t(props.mode === 'year' ? 'datePicker.nextPeriod' : 'datePicker.nextYear')),
    }
  },
})
</script>
