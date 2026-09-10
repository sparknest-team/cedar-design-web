<template>
  <div class="vmi-previewer-example" :style="[props.transform ? 'transform: translate(0px, 0px);' : '']">
    <iframe v-if="props.iframe" width="100%" :height="height" :src="localizedIframeSrc" frameborder="0"></iframe>
    <ClientOnly v-else><slot /></ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ClientOnly } from '@vuepress/client'
import { useRoute } from 'vue-router'

const props = defineProps({
  id: String,
  iframe: {
    type: [Boolean, String, Number],
    default: false,
  },
  iframeSrc: {
    type: String,
    default: '',
  },
  transform: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()
const localizedIframeSrc = computed(() => {
  const src = props.iframeSrc
  if (!src.includes('-iframe.html')) return src
  return `${src}${src.includes('?') ? '&' : '?'}language=${route.path.startsWith('/en/') ? 'en-US' : 'zh-CN'}`
})
const height = computed(() => {
  return typeof props.iframe === 'boolean' ? '150' : props.iframe
})
</script>
