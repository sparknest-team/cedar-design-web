<script setup lang="ts">
import { ref } from "vue";

const mixed = ref(false)
const variant = ref("default");
const size = ref("md");
</script>
<template>
  <c-space direction="column" :size="16">
    <c-form layout="vertical" size="sm">
      <c-form-item label="Variant" field="variant">
        <c-radio-group
          v-model="variant"
          aria-label="Button group variant"
          :options="['default', 'text', 'outline', 'tonal']"
          variant="button"
        />
      </c-form-item>
      <c-form-item label="Size" field="size">
        <c-radio-group
          v-model="size"
          aria-label="Button group size"
          :options="['xs', 'sm', 'md', 'lg', 'xl']"
          variant="button"
        />
      </c-form-item>
      <c-form-item label="Mixed variants"><c-checkbox v-model="mixed">Text override in middle</c-checkbox></c-form-item>
    </c-form>
    <c-space wrap align="flex-start" :size="24">
      <c-button-group
        v-for="vertical in [false, true]"
        :key="String(vertical)"
        :aria-label="vertical ? 'Vertical page actions' : 'Horizontal page actions'"
        :vertical="vertical"
        :variant="variant"
        :size="size"
        status="primary"
      >
        <c-button>Prev</c-button><c-button :variant="mixed ? 'text' : undefined">Info</c-button><c-button>Next</c-button>
      </c-button-group>
    </c-space>
  </c-space>
</template>
