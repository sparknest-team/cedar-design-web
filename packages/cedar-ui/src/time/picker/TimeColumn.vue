<template>
  <div ref="refWrapper" :class="`${prefixCls}-column`" @keydown="onColumnKeydown">
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
import { navigateTemporalGrid } from '../../_utils/temporal-keyboard'
import { defineComponent, nextTick, onActivated, onBeforeUnmount, onDeactivated, onMounted, PropType, ref, toRefs, watch } from 'vue'
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
    const registeredItems = new Map<TimeListItem['value'], TimeListItem>()
    let active = true
    let mounted = false
    let disposed = false
    let generation = 0
    let cancelScroll: (() => void) | undefined
    let layoutObserver: ResizeObserver | undefined
    const available = () => mounted && active && !disposed
    const invalidate = () => {
      generation++
      const cancel = cancelScroll
      cancelScroll = undefined
      cancel?.()
    }

    function scrollToTop(easing = false, request = generation) {
      const root = refWrapper.value
      const selectedValue = value.value
      if (!available() || request !== generation || !root || isUndefined(selectedValue) || !visible.value) return
      const selected = refMap.value.get(selectedValue)
      if (!selected || !root.contains(selected)) return
      const top = selected.offsetTop
      if (!available() || request !== generation || refWrapper.value !== root || !visible.value || value.value !== selectedValue || refMap.value.get(selectedValue) !== selected) return
      const cancel = scrollTo(root, top, easing ? 100 : 0)
      if (!available() || request !== generation) cancel()
      else cancelScroll = cancel
    }

    function afterRender() {
      const request = generation
      let pending = true
      nextTick(() => {
        if (!pending || request !== generation || !available()) return
        pending = false
        scrollToTop(false, request)
      })
    }

    // Dialog content can mount before it participates in layout. Align once it becomes measurable.
    function observeLayout() {
      const root = refWrapper.value
      if (!available() || !root || typeof ResizeObserver === 'undefined') return
      layoutObserver?.disconnect()
      let measured = root.clientHeight > 0
      layoutObserver = new ResizeObserver(() => {
        if (!available() || refWrapper.value !== root) return
        const visibleLayout = root.clientHeight > 0
        if (visibleLayout && !measured) afterRender()
        measured = visibleLayout
      })
      layoutObserver.observe(root)
    }

    watch([value, visible, () => props.list], invalidate, { flush: 'sync', deep: true })
    watch([value, visible], (_, [, preVisible]) => {
      if (!available()) return
      if (visible.value !== preVisible) {
        afterRender()
      } else {
        scrollToTop(true)
      }
    }, { flush: 'post' })

    onMounted(() => {
      mounted = true
      scrollToTop()
      observeLayout()
    })
    onDeactivated(() => { active = false; layoutObserver?.disconnect(); invalidate() })
    onActivated(() => {
      if (active) return
      active = true
      invalidate()
      afterRender()
      observeLayout()
    })
    onBeforeUnmount(() => {
      disposed = true
      layoutObserver?.disconnect()
      invalidate()
      refMap.value.clear()
      registeredItems.clear()
    })

    return {
      onColumnKeydown: (event: KeyboardEvent) => navigateTemporalGrid(event, '[role=option]', 1, false),
      refWrapper,
      refMap,
      onItemRef(el: any, item: TimeListItem) {
        if (!el) {
          if (registeredItems.get(item.value) === item) {
            refMap.value.delete(item.value)
            registeredItems.delete(item.value)
          }
        } else if (!disposed && active && props.list.includes(item)) {
          refMap.value.set(item.value, el as HTMLElement)
          registeredItems.set(item.value, item)
        }
      },
      onItemClick(item: TimeListItem) {
        if (available() && visible.value && props.list.includes(item) && !item.disabled) {
          emit('select', item.value)
        }
      },
    }
  },
})
</script>
