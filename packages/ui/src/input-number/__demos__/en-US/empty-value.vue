<script setup lang="ts">
import { reactive, ref } from "vue";
const model = reactive({ quantity: -1 as number | null | undefined });
const restored = ref<number | null | undefined>(12);
</script>
<template>
  <c-space direction="column">
    <p>
      -1 means missing and renders blank; 0 remains a valid number. Clearing
      produces -1.
    </p>
    <c-form :model="model" layout="vertical">
      <c-form-item field="quantity" label="Quantity">
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
      <c-button @click="model.quantity = 0">Set to 0</c-button>
      <c-button @click="model.quantity = -1">Set to -1</c-button>
    </c-space>
    <p>
      Current model: <output>{{ String(model.quantity) }}</output>
    </p>
    <p>This field clears to 0 without treating 0 as missing.</p>
    <c-form layout="vertical">
      <c-form-item label="Clear restores valid zero">
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
