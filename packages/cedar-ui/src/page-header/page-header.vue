<template>
  <div :class="`${prefixCls}-wrapper`">
    <div v-if="$slots.header" :class="`${prefixCls}-header`">
      <slot name="header" />
    </div>

    <header v-if="showHeading()" :class="prefixCls">
      <div :class="`${prefixCls}-main`">
        <icon-hover v-if="showBack" :class="`${prefixCls}-back`" :prefix="prefixCls" @click="handleBack">
          <slot name="back"><icon-left /></slot>
        </icon-hover>
        <div v-if="$slots.avatar" :class="`${prefixCls}-avatar`"><slot name="avatar" /></div>
        <div v-if="$slots.title || title" :class="`${prefixCls}-title`">
          <slot name="title">{{ title }}</slot>
        </div>
        <div v-if="$slots.subtitle || subtitle" :class="`${prefixCls}-subtitle`">
          <slot name="subtitle">{{ subtitle }}</slot>
        </div>
      </div>
      <div v-if="$slots.extra || extra" :class="`${prefixCls}-extra`">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </header>

    <div v-if="$slots.default" :class="`${prefixCls}-content`"><slot /></div>
    <div v-if="$slots.footer" :class="`${prefixCls}-footer`"><slot name="footer" /></div>
  </div>
</template>

<script lang="ts">
import { createNamespace, getPrefixCls } from '../_utils/global-config'
import { defineComponent } from 'vue'
import IconHover from '../_components/icon-hover.vue'
import { IconLeft } from '@cedarjs/icons-vue/icon-left'
import { pageHeaderProps } from './props'

export default defineComponent({
  name: createNamespace('page-header').name,
  components: { IconHover, IconLeft },
  props: pageHeaderProps,
  emits: {
    back: (_event: MouseEvent) => true,
  },
  setup(props, { emit, slots }) {
    const prefixCls = getPrefixCls('page-header')
    const showHeading = () =>
      props.showBack ||
      Boolean(
        slots.avatar || slots.title || props.title || slots.subtitle || props.subtitle || slots.extra || props.extra,
      )
    const handleBack = (event: MouseEvent) => emit('back', event)

    return { prefixCls, showHeading, handleBack }
  },
})
</script>
