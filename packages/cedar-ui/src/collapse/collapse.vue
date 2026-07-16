<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide, reactive, ref, toRefs } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { isArray } from '../_utils/is'
import { CollapseItemContext, collapseKey } from './context'
import type { CollapseToggleAllOptions } from './types'

const EXPAND_ICON_POSITIONS = ['left', 'right'] as const
type ExpandIconPositions = (typeof EXPAND_ICON_POSITIONS)[number]

export default defineComponent({
  name: 'Collapse',
  props: {
    /**
     * @zh 当前展开的面板的 `name`
     * @en The `name` of the currently expanded panel
     * @vModel
     */
    activeNames: {
      type: Array as PropType<(string | number)[]>,
      default: undefined,
    },
    /**
     * @zh 默认展开的面板的 `name` （非受控模式）
     * @en The `name` of the panel expanded by default (uncontrolled mode)
     */
    defaultActiveNames: {
      type: Array as PropType<(string | number)[]>,
      default: () => [],
    },
    /**
     * @zh 是否开启手风琴模式
     * @en Whether to enable accordion mode
     */
    accordion: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否显示展开图标
     * @en Whether to show the expand icon
     */
    showExpandIcon: {
      type: Boolean,
      default: undefined,
    },
    /**
     * @zh 展开图标显示的位置
     * @en The location where the expand icon is displayed
     * @values 'left', 'right'
     */
    expandIconPosition: {
      type: String as PropType<ExpandIconPositions>,
      default: 'left',
    },
    /**
     * @zh 是否显示边框
     * @en Whether to show the border
     */
    bordered: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否显示面板分割线
     * @en Whether to show the divider between panels
     */
    divider: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 展开面板是否显示间距
     * @en Whether to show spacing for expanded panels
     */
    offset: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 是否在隐藏时销毁内容
     * @en Whether to destroy content when hidden
     */
    destroyOnHide: {
      type: Boolean,
      default: false,
    },
  },
  /**
   * @zh 展开图标
   * @en Expand icon
   * @slot expand-icon
   * @binding {boolean} active
   * @binding {boolean} disabled
   * @binding {'left' | 'right'} position
   */
  emits: {
    'update:activeNames': (activeNames: (string | number)[]) => true,
    /**
     * @zh 展开的面板发生改变时触发
     * @en Emitted when the expanded panel changes
     * @param {(string | number)[]} activeNames
     * @param {Event} ev
     */
    change: (activeNames: (string | number)[], ev: Event) => true,
  },
  setup(props, { emit, slots, expose }) {
    const { expandIconPosition, destroyOnHide, showExpandIcon, divider, offset } = toRefs(props)
    const prefixCls = getPrefixCls('collapse')
    const items = ref<CollapseItemContext[]>([])

    const _activeNames = ref(props.defaultActiveNames)
    const computedActiveNames = computed(() => {
      const activeNames = props.activeNames ?? _activeNames.value
      if (!isArray(activeNames)) {
        return [activeNames]
      }
      return activeNames
    })

    const updateActiveNames = (newActiveNames: (string | number)[], e?: Event) => {
      _activeNames.value = newActiveNames
      emit('update:activeNames', newActiveNames)
      if (e) {
        emit('change', newActiveNames, e)
      } else {
        emit('change', newActiveNames, new Event('change'))
      }
    }

    const handleClick = (name: string | number, e: Event) => {
      let newActiveNames: (string | number)[] = []
      if (props.accordion) {
        if (!computedActiveNames.value.includes(name)) {
          newActiveNames = [name]
        }
      } else {
        newActiveNames = [...computedActiveNames.value]
        const _index = newActiveNames.indexOf(name)
        if (_index > -1) {
          newActiveNames.splice(_index, 1)
        } else {
          newActiveNames.push(name)
        }
      }
      updateActiveNames(newActiveNames, e)
    }

    const addItem = (item: CollapseItemContext) => {
      if (!items.value.find((i) => i.name === item.name)) {
        items.value.push(item)
      }
    }

    const removeItem = (name: string | number) => {
      items.value = items.value.filter((item) => item.name !== name)
    }

    const toggleAll = (options: CollapseToggleAllOptions) => {
      if (props.accordion) {
        return
      }

      const nextNames = items.value
        .filter((item) => {
          const expanded = computedActiveNames.value.includes(item.name)
          if (options.skipDisabled && item.disabled.value) {
            return expanded
          }
          if (options.expand === 'inverse') {
            return !expanded
          }
          return options.expand
        })
        .map((item) => item.name)

      updateActiveNames(nextNames)
    }

    provide(
      collapseKey,
      reactive({
        activeNames: computedActiveNames,
        slots,
        showExpandIcon,
        expandIconPosition,
        destroyOnHide,
        divider,
        offset,
        handleClick,
        addItem,
        removeItem,
      }),
    )

    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-borderless`]: !props.bordered,
        [`${prefixCls}-no-divider`]: !props.divider,
        [`${prefixCls}-offset`]: props.offset,
      },
    ])

    expose({
      toggleAll,
    })

    return {
      prefixCls,
      cls,
    }
  },
})
</script>
