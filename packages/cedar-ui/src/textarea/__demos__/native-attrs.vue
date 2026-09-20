<template>
  <label for="feedback">反馈内容</label>
  <c-textarea
    v-model="value"
    aria-label="反馈内容"
    :rows="4"
    :textarea-attrs="{
      id: 'feedback',
      name: 'feedback',
      autocomplete: 'off',
      'aria-describedby': 'feedback-help',
    }"
  />
  <p id="feedback-help">请勿填写密码或其他敏感信息。</p>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
</script>
