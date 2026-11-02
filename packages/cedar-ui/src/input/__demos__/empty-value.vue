<script setup lang="ts">
import { reactive } from "vue";
const model = reactive({ text: "Hello" as string | null });
</script>
<template>
  <c-space direction="column">
    <p>点击清空图标得到 null；用 Backspace 删光得到空字符串。</p>
    <c-form :model="model" layout="vertical">
      <c-form-item field="text" label="关键词">
        <c-input
          v-model="model.text"
          edit-mode="direct"
          clearable
          :empty-value="null"
        />
      </c-form-item>
    </c-form>
    <c-button @click="model.text = 'Hello'">恢复初值</c-button>
    <p>
      当前模型: <output>{{ JSON.stringify(model.text) }}</output>
    </p>
  </c-space>
</template>
