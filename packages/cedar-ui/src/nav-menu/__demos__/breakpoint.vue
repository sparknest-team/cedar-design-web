<template>
  <p>拖动容器右下角，观察横向菜单收入更多。</p>
  <div style="width: 420px; max-width: 100%; resize: horizontal; overflow: auto; padding-bottom: 160px"><c-nav-menu :options="options" mode="horizontal" /></div>
</template>
<script setup lang="ts">
import { options } from './data'

</script>
