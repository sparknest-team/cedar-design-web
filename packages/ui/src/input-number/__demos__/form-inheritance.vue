<script setup lang="ts">
import { reactive, ref } from "vue";
const model = reactive({ quantity: 2, editable: 3 });
const disabled = ref(false);
const readonly = ref(false);
</script>
<template>
  <div class="number-demo">
    <c-checkbox v-model="disabled">表单禁用</c-checkbox>
    <c-checkbox v-model="readonly">表单只读</c-checkbox>
    <c-form :model="model" :disabled="disabled" :readonly="readonly" size="lg">
      <c-form-item field="quantity" label="继承状态">
        <c-input-number v-model="model.quantity" clearable />
      </c-form-item>
      <c-form-item field="editable" label="显式覆盖">
        <c-input-number
          v-model="model.editable"
          :disabled="false"
          :readonly="false"
          size="sm"
        />
      </c-form-item>
    </c-form>
  </div>
</template>
<style scoped>
.number-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
