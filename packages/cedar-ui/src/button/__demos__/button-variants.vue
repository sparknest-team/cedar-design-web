<template>
  <c-space direction="column" size="lg">
    禁用
    <c-switch v-model="disabled">
      <template #checked> disabled </template>
      <template #unchecked> no disabled </template>
    </c-switch>
    loading
    <c-switch v-model="loading">
      <template #checked> loading </template>
      <template #unchecked> no loading </template>
    </c-switch>
    尺寸
    <c-radio-group v-model="size">
      <c-radio value="xs">xs</c-radio>
      <c-radio value="sm">sm</c-radio>
      <c-radio value="md">md</c-radio>
      <c-radio value="lg">lg</c-radio>
    </c-radio-group>
    变体
    <c-radio-group v-model="variant">
      <c-radio value="default">默认</c-radio>
      <c-radio value="tonal">tonal</c-radio>
      <c-radio value="outline">outline</c-radio>
      <c-radio value="text">文本</c-radio>
    </c-radio-group>
    组件标签
    <c-radio-group v-model="component">
      <c-radio value="button">按钮</c-radio>
      <c-radio value="a">链接</c-radio>
    </c-radio-group>
    <c-space wrap>
      <c-button
        :disabled="disabled"
        :loading="loading"
        :variant="variant"
        :size="size"
        status="contrast"
        :component="component"
        >contrast</c-button
      >
      <c-button
        :disabled="disabled"
        :loading="loading"
        :variant="variant"
        :size="size"
        :component="component"
        >default</c-button
      >
      <c-button
        :disabled="disabled"
        :loading="loading"
        :variant="variant"
        :size="size"
        status="secondary"
        :component="component"
        >secondary</c-button
      >
      <c-button
        :disabled="disabled"
        :loading="loading"
        :variant="variant"
        :size="size"
        status="primary"
        :component="component"
        >primary</c-button
      >
      <c-button
        :disabled="disabled"
        :loading="loading"
        :variant="variant"
        :size="size"
        status="info"
        :component="component"
        >info</c-button
      >
      <c-button
        :disabled="disabled"
        :loading="loading"
        :variant="variant"
        :size="size"
        status="success"
        :component="component"
        >success</c-button
      >
      <c-button
        :disabled="disabled"
        :loading="loading"
        :variant="variant"
        :size="size"
        status="warning"
        :component="component"
        >warning</c-button
      >
      <c-button
        :disabled="disabled"
        :loading="loading"
        :variant="variant"
        :size="size"
        status="danger"
        :component="component"
        >danger</c-button
      >
    </c-space>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const size = ref("md");
const variant = ref("default");
const disabled = ref(false);
const component = ref("button");
const loading = ref(false);
</script>
