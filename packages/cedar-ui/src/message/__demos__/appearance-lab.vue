<script setup lang="ts">
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const open = ref(false);
const __demoAppearance = __demoReactive({
  variant: "neutral",
  status: "default",
});
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <label
        >variant<c-select
          v-model="__demoAppearance['variant']"
          :clearable="false"
          :options="[
            { label: 'neutral', value: 'neutral' },
            { label: 'tonal', value: 'tonal' },
            { label: 'solid', value: 'solid' },
          ]"
          aria-label="variant"
      /></label>
      <label
        >status<c-select
          v-model="__demoAppearance['status']"
          :clearable="false"
          :options="[
            { label: 'default', value: 'default' },
            { label: 'info', value: 'info' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'danger', value: 'danger' },
            { label: 'loading', value: 'loading' },
          ]"
          aria-label="status"
      /></label>
    </c-space>
    <c-message
      v-model:open="open"
      status="success"
      position="center"
      closable
      :duration="0"
      v-bind="__demoAppearance"
    >
      Declarative message
      <template #action>
        <c-button size="sm" variant="text" @click="open = false"
          >Close</c-button
        >
      </template>
    </c-message>
  </c-space>
</template>
