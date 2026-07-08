<template>
  <c-space direction="column">
    <c-radio-group v-model="layout" type="button">
      <c-radio value="horizontal">horizontal</c-radio>
      <c-radio value="vertical">vertical</c-radio>
      <c-radio value="inline">inline</c-radio>
    </c-radio-group>

    <c-form :layout="layout">
      <c-form-item field="name" label="Postname" required>
        <c-input type="text" placeholder="请输入" />
      </c-form-item>
      <c-form-item field="name" label="Username" required>
        <c-input type="text" placeholder="请输入" />
      </c-form-item>
    </c-form>
  </c-space>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const layout = ref('horizontal')
    return {
      layout,
    }
  },
})
</script>
