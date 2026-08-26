<template>
  <div :class="prefixCls">
    <div
      :class="[
        `${prefixCls}-left`,
        {
          [`${prefixCls}-disabled`]: !onPrev,
        },
      ]"
      @click="
        (e) => {
          e.preventDefault()
          onPrev && onPrev()
        }
      "
    >
      <icon-left />
    </div>
    <div
      :class="[
        `${prefixCls}-right`,
        {
          [`${prefixCls}-disabled`]: !onNext,
        },
      ]"
      @click="
        (e) => {
          e.preventDefault()
          onNext && onNext()
        }
      "
    >
      <icon-right />
    </div>
  </div>
</template>
<script lang="ts">
import { createNamespace } from '../_utils/global-config'
import { defineComponent } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { IconLeft } from '@cedarjs/icons-vue/icon-left'
import { IconRight } from '@cedarjs/icons-vue/icon-right'

export default defineComponent({
  name: createNamespace("image-preview-arrow").name,
  components: {
    IconLeft,
    IconRight,
  },
  props: {
    onPrev: {
      type: Function,
    },
    onNext: {
      type: Function,
    },
  },
  setup() {
    const prefixCls = getPrefixCls('image-preview-arrow')
    return {
      prefixCls,
    }
  },
})
</script>
