<template>
  <li ref="linkRef" :class="cls">
    <a :class="classes(n('link-title'))" :href="href" :aria-current="isCurrent ? 'location' : undefined" @click="handleClick">
      <slot>{{ title }}</slot>
    </a>
    <ul v-if="$slots.sublist" :class="classes(n('list'))">
      <slot name="sublist" />
    </ul>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, watch } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { anchorInjectionKey } from './context'
import { anchorLinkProps } from './link-props'

export default defineComponent({
  name: createNamespace('anchor-link').name,
  props: anchorLinkProps,
  setup(props) {
    const { n, classes } = createNamespace('anchor')
    const linkRef = ref<HTMLElement>()

    const context = inject(anchorInjectionKey, undefined)

    watch([() => props.href, linkRef], ([hash, node], _previous, cleanup) => {
      if (!hash || !node) return
      context?.addLink(hash, node)
      cleanup(() => context?.removeLink(hash, node))
    }, { flush: 'post', immediate: true })

    const isCurrent = computed(() => !!props.href && context?.currentLink === props.href)
    const cls = computed(() => classes(n('link'), [isCurrent.value, n('--link-active')]))

    const handleClick = (e: MouseEvent) => context?.handleClick(e, props.href)

    return {
      n,
      classes,
      cls,
      isCurrent,
      linkRef,
      handleClick,
    }
  },
})
</script>
