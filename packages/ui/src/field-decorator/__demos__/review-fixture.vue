<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("fieldDecoratorReviewFixtureInline");

import { ref } from "vue";
import FieldDecorator from "../index";
const value = ref("可编辑的审查内容");
</script>
<template>
  <c-input
    v-model="value"
    aria-label="字段内容"
    :placeholder="inlineCopy.editFieldContent"
  />
  <FieldDecorator
    :value="value"
    placeholder="字段标签"
    clearable
    @clear="value = ''"
  >
    <span>{{ value }}</span>
    <template #prefix>前缀</template>
    <template #suffix>后缀</template>
  </FieldDecorator>
</template>
