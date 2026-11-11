<script setup lang="ts">
import { ref } from 'vue'
import { Hover, useHoverOverlay } from '@cedar-design/ui-vue'
import '@cedar-design/ui-vue/hover/style'

const vHover = Hover
const { hovering, handleHovering } = useHoverOverlay()
const focusing = ref(false)
</script>

<template>
  <c-space direction="column">
    <c-button v-hover="handleHovering" class="hover-example-target" @focus="focusing = true" @blur="focusing = false">
      将鼠标移入，或用 Tab 聚焦
      <c-hover-overlay :hovering="hovering" :focusing="focusing" />
    </c-button>
    <span role="status">悬停：{{ hovering ? '是' : '否' }}；焦点：{{ focusing ? '是' : '否' }}</span>
  </c-space>
</template>

<style scoped>
.hover-example-target { position: relative; }
</style>
