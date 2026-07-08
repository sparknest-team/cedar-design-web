<template>
  <c-form>
    <c-form-item field="name" label="Username" required>
      <c-input type="text" placeholder="请输入" />
      <template #extra>
        <div>UserName</div>
      </template>
    </c-form-item>
    <c-form-item field="post" label="Postname" required>
      <c-input type="text" placeholder="请输入" />
      <template #extra>
        <div>PostName</div>
      </template>
      <template #help>
        <div>Custom valitae message</div>
      </template>
    </c-form-item>
  </c-form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {}
  },
})
</script>
