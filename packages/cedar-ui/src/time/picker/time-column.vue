<template>
  <div ref="refWrapper" :class="`${prefixCls}-column`">
    <ul role="listbox" :aria-label="ariaLabel">
      <li
        v-for="item in list"
        :key="item.value"
        :ref="
          (el) => {
            onItemRef(el, item)
          }
        "
        :class="[
          `${prefixCls}-cell`,
          {
            [`${prefixCls}-cell-disabled`]: item.disabled,
            [`${prefixCls}-cell-selected`]: item.selected,
          },
        ]"
        role="option"
        :aria-selected="item.selected"
        :aria-disabled="item.disabled"
        :tabindex="item.disabled ? -1 : 0"
        @click="
          () => {
            onItemClick(item)
          }
        "
        @keydown.enter.prevent="onItemClick(item)"
        @keydown.space.prevent="onItemClick(item)"
      >
        <div :class="`${prefixCls}-cell-inner`">{{ item.label }}</div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, nextTick, onMounted, PropType, ref, toRefs, watch } from 'vue'
import { isUndefined } from '../../_utils/is'
import { TimeList, TimeListItem } from './types'
import { scrollTo } from './utils'
import { createNamespace } from '../../_utils/global-config'

export default defineComponent({
  name: createNamespace('time-picker-column').name,
  props: {
    prefixCls: {
      type: String,
      required: true,
    },
    list: {
      type: Array as PropType<TimeList>,
      required: true,
    },
    value: {
      type: [Number, String],
    },
    visible: {
      type: Boolean,
    },
    ariaLabel: String,
  },
  emits: ['select'],
  setup(props, { emit }) {
    const { visible, value } = toRefs(props)
    const refMap = ref(new Map<TimeListItem['value'], HTMLElement>())
    const refWrapper = ref<HTMLElement>()

    function scrollToTop(easing = false) {
      if (!refWrapper.value || isUndefined(value?.value) || !visible?.value) {
        return
      }

      const refSelected = refMap.value.get(value.value)

      if (refSelected) {
        scrollTo(refWrapper.value, refSelected.offsetTop, easing ? 100 : 0)
      }
    }

    watch([value, visible], (_, [, preVisible]) => {
      if (visible.value !== preVisible) {
        nextTick(() => {
          scrollToTop()
        })
      } else {
        scrollToTop(true)
      }
    })

    onMounted(() => {
      scrollToTop()
    })

    return {
      refWrapper,
      refMap,
      onItemRef(el: any, item: TimeListItem) {
        if (el) refMap.value.set(item.value, el as HTMLElement)
      },
      onItemClick(item: TimeListItem) {
        if (!item.disabled) {
          emit('select', item.value)
        }
      },
    }
  },
})
</script>
