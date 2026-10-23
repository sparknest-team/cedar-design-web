<script setup lang="ts">
import { ref } from "vue";
const size = ref("md");
const disabled = ref(false);
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
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
      <c-checkbox v-model="disabled">Disable group</c-checkbox>
    </c-space>
    <c-button-group status="primary" :size="size" :disabled="disabled">
      <c-button>Inherited</c-button>
      <c-button status="success">Status override</c-button>
      <c-button :disabled="false">Enabled override</c-button>
    </c-button-group>
  </c-space>
</template>
