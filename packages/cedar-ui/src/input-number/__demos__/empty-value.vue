<script setup lang="ts">
import { reactive, ref } from "vue";
const model = reactive({ quantity: -1 as number | null | undefined });
const restored = ref<number | null | undefined>(12);
</script>
<template>
  <c-space direction="column">
    <p>-1 表示未填写，输入框显示空白；0 仍显示为有效数字。清空返回 -1。</p>
    <c-form :model="model" layout="vertical">
      <c-form-item field="quantity" label="数量">
        <c-input-number
          v-model="model.quantity"
          edit-mode="direct"
          clearable
          :empty-values="[null, undefined, -1]"
          :empty-value="-1"
        />
      </c-form-item>
    </c-form>
    <c-space wrap>
      <c-button @click="model.quantity = 0">设为 0</c-button>
      <c-button @click="model.quantity = -1">设为 -1</c-button>
    </c-space>
    <p>
      当前模型: <output>{{ String(model.quantity) }}</output>
    </p>
    <p>此字段清空后恢复为 0，0 仍是有效值，不会显示为空。</p>
    <c-form layout="vertical">
      <c-form-item label="清空恢复有效的 0">
        <c-input-number
          v-model="restored"
          edit-mode="direct"
          clearable
          :empty-value="0"
        />
        <output>{{ String(restored) }}</output>
      </c-form-item>
    </c-form>
  </c-space>
</template>
