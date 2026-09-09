<template>
  <p>浅色主题（light）</p>
  <c-nav-menu :options="options" theme="light" mode="horizontal" />
  <p>深色主题（dark）</p>
  <c-nav-menu :options="options" theme="dark" mode="horizontal" />
</template>
<script setup lang="ts">
import { options } from './data'

</script>
