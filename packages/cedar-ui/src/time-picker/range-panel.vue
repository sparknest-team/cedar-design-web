<template>
  <div :class="`${prefixCls}-range`">
    <div :class="`${prefixCls}-range-wrapper`">
      <template v-for="(index, i) in panelIndexes" :key="index">
        <div v-if="i > 0" :class="`${prefixCls}-range-separator`">
          {{ t('datePicker.rangeSeparator') }}
        </div>
        <div
          :class="[
            `${prefixCls}-range-panel`,
            { [`${prefixCls}-range-panel-active`]: localDisplayIndex === index },
          ]"
          @click="setDisplayIndex(index)"
        >
          <div :class="`${prefixCls}-range-panel-title`">
            <span>{{ index === 0 ? t('datePicker.startTime') : t('datePicker.endTime') }}</span>
            <span v-if="index === 1 && showNextDayLabel" :class="`${prefixCls}-range-next-day`">
              {{ t('datePicker.nextDay') }}
            </span>
          </div>
          <div :class="`${prefixCls}-range-panel-body`">
            <Panel
              v-bind="panelBind"
              :value="value?.[index]"
              hide-footer
              is-range
              @select="(selected) => onSelect(index, selected)"
            />
          </div>
        </div>
      </template>
    </div>
    <div v-if="$slots['extra-footer']" :class="`${prefixCls}-footer-extra-wrapper`">
      <slot name="extra-footer" />
    </div>
    <div v-if="!hideFooter" :class="`${prefixCls}-footer-btn-wrapper`">
      <Button type="primary" size="xs" :disabled="confirmBtnDisabled" @click="onConfirm">
        {{ t('datePicker.ok') }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Dayjs } from 'dayjs'
import { computed, defineComponent, PropType, ref, toRefs, watch } from 'vue'
import { isUndefined } from '../_utils/is'
import type { RangePanelProps } from './types'
import Panel from './panel.vue'
import { isValidRangeValue, isTimeRangeNextDay } from './utils'
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { useI18n } from '../locale'
import Button from '../button'

const { name } = createNamespace('time-picker-range-panel')
const panelIndexes = [0, 1]

export default defineComponent({
  name,
  components: {
    Panel,
    Button,
  },
  inheritAttrs: false,
  props: {
    value: {
      type: Array as PropType<RangePanelProps['value']>,
    },
    displayIndex: {
      type: Number,
      default: 0,
    },
    visible: {
      type: Boolean,
    },
    format: {
      type: String,
      default: 'HH:mm:ss',
    },
    hideFooter: {
      type: Boolean,
    },
    use12Hours: {
      type: Boolean,
    },
    step: {
      type: Object as PropType<RangePanelProps['step']>,
    },
    disabledHours: {
      type: Function as unknown as PropType<RangePanelProps['disabledHours']>,
    },
    disabledMinutes: {
      type: Function as unknown as PropType<RangePanelProps['disabledMinutes']>,
    },
    disabledSeconds: {
      type: Function as unknown as PropType<RangePanelProps['disabledSeconds']>,
    },
    hideDisabledOptions: {
      type: Boolean,
    },
    showNextDay: {
      type: Boolean,
    },
  },
  emits: ['select', 'confirm', 'update:displayIndex', 'display-index-change'],
  setup(props, { emit, attrs }) {
    const { value, displayIndex, hideFooter } = toRefs(props)
    const prefixCls = getPrefixCls('timepicker')
    const { t } = useI18n()

    const localDisplayIndex = ref<number>(displayIndex.value)
    watch(displayIndex, () => {
      localDisplayIndex.value = displayIndex.value
    })

    const confirmBtnDisabled = computed(() => !isValidRangeValue(value?.value))

    const showNextDayLabel = computed(() => {
      if (!props.showNextDay) {
        return false
      }
      const range = value?.value
      return isTimeRangeNextDay(range?.[0], range?.[1])
    })

    const panelBind = computed(() => ({
      ...attrs,
      visible: props.visible,
      format: props.format,
      use12Hours: props.use12Hours,
      step: props.step,
      disabledHours: props.disabledHours,
      disabledMinutes: props.disabledMinutes,
      disabledSeconds: props.disabledSeconds,
      hideDisabledOptions: props.hideDisabledOptions,
    }))

    function setDisplayIndex(index: number) {
      if (localDisplayIndex.value === index) return
      localDisplayIndex.value = index
      emit('display-index-change', index)
      emit('update:displayIndex', index)
    }

    function onSelect(index: number, selectedValue: Dayjs) {
      setDisplayIndex(index)
      const newValue = isUndefined(value) || isUndefined(value?.value) ? [] : [...value.value]
      newValue[index] = selectedValue
      emit('select', newValue)
    }

    function onConfirm() {
      if (!isValidRangeValue(value?.value)) {
        setDisplayIndex((localDisplayIndex.value + 1) % 2)
        return
      }
      emit('confirm', value?.value)
    }

    return {
      t,
      prefixCls,
      panelIndexes,
      localDisplayIndex,
      confirmBtnDisabled,
      showNextDayLabel,
      panelBind,
      hideFooter,
      setDisplayIndex,
      onSelect,
      onConfirm,
    }
  },
})
</script>
