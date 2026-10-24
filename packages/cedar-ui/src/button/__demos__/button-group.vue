<script setup lang="ts">
import { ref } from "vue";
const size = ref("md");
const disabled = ref(false);
</script>
<template>
  <c-space direction="column" :size="16" class="button-group-demo">
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
    <div class="button-group-demo__scroll">
      <c-button-group status="primary" :size="size" :disabled="disabled">
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
