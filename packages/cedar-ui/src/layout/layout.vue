<template>
  <section :class="classNames">
    <slot />
  </section>
</template>

<script lang="tsx">
import { layoutProps } from './props'
import { createNamespace } from '../_utils/global-config'
import { defineComponent, computed, provide, ref } from 'vue'
import { getPrefixCls } from '../_utils/global-config'
import { LayoutSiderInjectionKey } from './context'

export default defineComponent({
  name: createNamespace("layout").name,
  props: layoutProps,
  setup(props) {
    const siderIds = ref<string[]>([])
    const prefixCls = getPrefixCls('layout')
    const classNames = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-has-sider`]: props.hasSider || siderIds.value.length,
      },
    ])

    provide(LayoutSiderInjectionKey, {
      onSiderMount: (id) => siderIds.value.push(id),
      onSiderUnMount: (id) => {
        siderIds.value = siderIds.value.filter((_id) => _id !== id)
      },
    })

    return {
      classNames,
    }
  },
})
</script>
