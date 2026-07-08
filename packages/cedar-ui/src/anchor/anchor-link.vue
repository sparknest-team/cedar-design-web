<template>
  <li ref="linkRef" :class="cls">
    <a :class="classes(n('link-title'))" :href="href" @click="handleClick">
      <slot>{{ title }}</slot>
    </a>
    <ul v-if="$slots.sublist" :class="classes(n('list'))">
      <slot name="sublist" />
    </ul>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from 'vue'
import { createNamespace } from '../_utils/global-config'
import { anchorInjectionKey } from './context'

export default defineComponent({
  name: 'CAnchorLink',
  props: {
    /**
     * @zh 锚点链接的文本内容
     * @en The text content of the anchor link
     */
    title: String,
    /**
     * @zh 锚点链接的地址
     * @en The address of the anchor link
     */
    href: String,
  },
  setup(props) {
    const { n, classes } = createNamespace('anchor')
    const linkRef = ref<HTMLElement>()

    const context = inject(anchorInjectionKey, undefined)

    onMounted(() => {
      if (props.href && linkRef.value) {
        context?.addLink(props.href, linkRef.value)
      }
    })

    const cls = computed(() => classes(n('link'), [context?.currentLink === props.href, n('--link-active')]))

    const handleClick = (e: MouseEvent) => context?.handleClick(e, props.href)

    return {
      n,
      classes,
      cls,
      linkRef,
      handleClick,
    }
  },
})
</script>
