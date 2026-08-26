<template>
  <div tabindex="0" :class="cls" v-bind="eventHandlers">
    <span v-if="$slots.icon" :class="classes(n('icon'))">
      <slot name="icon" />
    </span>
    <span :class="classes(n('title'))">
      <slot />
    </span>
    <icon-hover v-if="editable && tab.closable" :class="classes(n('close-btn'))" @click.stop="handleDelete">
      <icon-close />
    </icon-hover>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { computed, defineComponent, inject } from 'vue'
import { createNamespace } from '../_utils/global-config'
import IconHover from '../_components/icon-hover.vue'
import { IconClose } from '@cedarjs/icons-vue/icon-close'
import type { TabData } from './types'
import { TabsContext, tabsInjectionKey } from './context'

export default defineComponent({
  name: createNamespace('tabs-tab').name,
  components: {
    IconHover,
    IconClose,
  },
  props: {
    tab: {
      type: Object as PropType<TabData>,
      required: true,
    },
    active: Boolean,
    editable: Boolean,
  },
  emits: ['click', 'delete'],
  setup(props, { emit }) {
    const { classes, n } = createNamespace('tabs-tab')
    const tabsCtx = inject<Partial<TabsContext>>(tabsInjectionKey, {})
    const handleClick = (e: Event) => {
      if (!props.tab.disabled) {
        emit('click', props.tab.key, e)
      }
    }

    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === 'Enter') {
        handleClick(ev)
      }
    }

    const eventHandlers = computed(() => {
      return Object.assign(tabsCtx.trigger === 'click' ? { onClick: handleClick } : { onMouseover: handleClick }, {
        onKeydown: onKeyDown,
      })
    })

    const handleDelete = (e: Event) => {
      if (!props.tab.disabled) {
        emit('delete', props.tab.key, e)
      }
    }

    const cls = computed(() =>
      classes(
        n(),
        [props.active, n('--active')],
        [props.editable && props.tab.closable, n('--closable')],
        [props.tab.disabled, n('--disabled')],
        [props.tab.itemVertical, n('--item-vertical')],
      ),
    )

    return {
      classes,
      n,
      cls,
      eventHandlers,
      handleDelete,
    }
  },
})
</script>
