<template>
  <c-popconfirm :before-confirm="handleBeforeConfirm">
    <c-button>Click To Show</c-button>
    <template #content>
      <c-form>
        <c-form-item label="Name">
          <c-input  />
        </c-form-item>
        <c-form-item label="Post">
          <c-input  />
        </c-form-item>
      </c-form>
    </template>
  </c-popconfirm>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)

const handleClick = () => {
  visible.value = true
}

const handleBeforeConfirm = (done) => {
  window.setTimeout(() => {
    done()
  }, 3000)
}

const handleCancel = () => {
  visible.value = false
}
</script>
