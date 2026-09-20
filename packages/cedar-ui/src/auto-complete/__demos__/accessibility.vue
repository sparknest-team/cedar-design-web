<template>
  <label for="framework-combobox">前端框架</label>
  <c-auto-complete
    v-model="value"
    :options="options"
    :input-attrs="{ id: 'framework-combobox', 'aria-describedby': 'framework-help' }"
    style="width: 320px"
  />
  <p id="framework-help">使用方向键浏览建议，Enter 选择，Escape 关闭。</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const options = ['Vue', 'React', 'Angular']
</script>
