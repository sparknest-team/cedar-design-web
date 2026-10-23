<script setup lang="ts">
import { ref } from "vue";
const variant = ref("default");
const size = ref("md");
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <label
        >Variant<c-select
          v-model="variant"
          :options="
            ['default', 'text', 'outline', 'tonal'].map((value) => ({
              label: value,
              value,
            }))
          "
          :clearable="false"
      /></label>
      <label
        >Size<c-select
          v-model="size"
          :options="
            ['xs', 'sm', 'md', 'lg', 'xl'].map((value) => ({
              label: value,
              value,
            }))
          "
          :clearable="false"
      /></label>
    </c-space>
    <c-space align="start" :size="24">
      <c-button-group
        v-for="vertical in [false, true]"
        :key="String(vertical)"
        :vertical="vertical"
        :variant="variant"
        :size="size"
        status="primary"
      >
        <c-button>Previous</c-button><c-button>Next</c-button>
      </c-button-group>
    </c-space>
  </c-space>
</template>
