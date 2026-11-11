<script setup lang="ts">
import { ref } from "vue";

const size = ref("md");
const disabled = ref(false);
</script>
<template>
  <c-space direction="column" :size="16" class="button-group-demo">
    <c-form layout="vertical" size="sm">
      <c-form-item label="Size" field="size">
        <c-radio-group
          v-model="size"
          aria-label="Button group size"
          :options="['xs', 'sm', 'md', 'lg', 'xl']"
          variant="button"
        />
      </c-form-item>
      <c-form-item label="State" field="disabled"
        ><c-checkbox v-model="disabled">Disable group</c-checkbox></c-form-item
      >
    </c-form>
    <div class="button-group-demo__scroll">
      <c-button-group aria-label="Document actions" status="primary" :size="size" :disabled="disabled">
        <c-button>Inherited</c-button>
        <c-button status="success">Status override</c-button>
        <c-button :disabled="false">Enabled override</c-button>
      </c-button-group>
    </div>
  </c-space>
</template>
<style scoped>
.button-group-demo {
  width: 100%;
}
.button-group-demo__scroll {
  max-width: 100%;
  overflow-x: auto;
}
</style>
