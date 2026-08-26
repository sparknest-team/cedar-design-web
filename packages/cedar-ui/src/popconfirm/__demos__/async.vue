<template>
  <c-popconfirm :before-ok="handleBeforeOk">
    <c-button>Click To Show</c-button>
    <template #content>
      <Form>
        <c-form-item label="Name">
          <c-input  />
        </c-form-item>
        <c-form-item label="Post">
          <c-input  />
        </c-form-item>
      </Form>
    </template>
  </c-popconfirm>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)

const handleClick = () => {
  visible.value = true
}

const handleBeforeOk = (done) => {
  window.setTimeout(() => {
    done()
  }, 3000)
}

const handleCancel = () => {
  visible.value = false
}
</script>
