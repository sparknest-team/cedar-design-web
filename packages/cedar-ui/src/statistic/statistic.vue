<template>
  <div :class="prefixCls">
    <div v-if="title || $slots.title" :class="`${prefixCls}-title`">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div :class="`${prefixCls}-content`">
      <div :class="`${prefixCls}-value`" :style="valueStyle">
        <span v-if="showPlaceholder">{{ placeholder }}</span>
        <template v-else>
          <span v-if="$slots.prefix" :class="`${prefixCls}-prefix`">
            <slot name="prefix" />
          </span>
          <template v-if="formatValue.isNumber">
            <span :class="`${prefixCls}-value-integer`">
              {{ formatValue.integer }}
            </span>
            <span v-if="formatValue.decimal" :class="`${prefixCls}-value-decimal`"> .{{ formatValue.decimal }} </span>
          </template>
          <template v-else>
            {{ formatValue.value }}
          </template>
          <span v-if="$slots.suffix" :class="`${prefixCls}-suffix`">
            <slot name="suffix" />
          </span>
        </template>
      </div>
      <div v-if="extra || $slots.extra" :class="`${prefixCls}-extra`">
        <slot name="extra">
          {{ extra }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { statisticProps } from './props'
import { createNamespace } from '../_utils/global-config'
import { computed, CSSProperties, defineComponent, onMounted, PropType, ref, toRefs, watch } from 'vue'
import dayjs from 'dayjs'
// @ts-ignore
import BTween from 'b-tween'
import NP from 'number-precision'
import { getPrefixCls } from '../_utils/global-config'
import { isNumber, isUndefined } from '../_utils/is'
import { Data } from '../_utils/types'

export default defineComponent({
  name: createNamespace("statistic").name,
  props: statisticProps,
  /**
   * @zh 标题
   * @en Title
   * @slot title
   */
  /**
   * @zh 额外内容
   * @en Extra content
   * @slot extra
   */
  /**
   * @zh 前缀
   * @en Prefix
   * @slot prefix
   */
  /**
   * @zh 后缀
   * @en Suffix
   * @slot suffix
   */
  setup(props) {
    const prefixCls = getPrefixCls('statistic')
    const numberValue = computed(() => {
      if (isNumber(props.value)) {
        return props.value
      }
      return 0
    })
    const innerValue = ref(props.valueFrom ?? props.value)
    const tween = ref(null)
    const { value } = toRefs(props)

    const showPlaceholder = computed(() => isUndefined(props.value))

    const animation = (from: number = props.valueFrom ?? 0, to: number = numberValue.value) => {
      if (from !== to) {
        tween.value = new BTween({
          from: {
            value: from,
          },
          to: {
            value: to,
          },
          duration: props.animationDuration,
          easing: 'quartOut',
          onUpdate: (keys: Data) => {
            innerValue.value = keys.value
          },
          onFinish: () => {
            innerValue.value = to
          },
        })
        ;(tween.value as any)?.start()
      }
    }

    const formatValue = computed(() => {
      let _value: string | number | Date | undefined = innerValue.value
      if (isNumber(_value)) {
        if (isNumber(props.precision)) {
          _value = NP.round(_value, props.precision).toFixed(props.precision)
        }
        const splitValue = String(_value).split('.')
        const integer = props.showGroupSeparator ? Number(splitValue[0]).toLocaleString('en-US') : splitValue[0]
        const decimal = splitValue[1]
        return {
          isNumber: true,
          integer,
          decimal,
        }
      }
      if (props.format) {
        _value = dayjs(_value).format(props.format)
      }
      return {
        isNumber: false,
        value: _value,
      }
    })

    onMounted(() => {
      if (props.animation && props.start) {
        animation()
      }
    })

    watch(
      () => props.start,
      (value) => {
        if (value && props.animation && !tween.value) {
          animation()
        }
      },
    )

    watch(value, (value) => {
      if (tween.value) {
        ;(tween.value as any)?.stop()
        tween.value = null
      }
      innerValue.value = value
      if (props.animation && props.start) {
        animation()
      }
    })

    return {
      prefixCls,
      showPlaceholder,
      formatValue,
    }
  },
})
</script>
