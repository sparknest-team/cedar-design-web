<template>
  <c-space wrap>
    <c-tag v-for="(tag, index) of tags" :key="tag" :closable="index !== 0" @close="handleRemove(tag)">
      {{ tag }}
    </c-tag>

    <c-input
      v-if="showInput"
      ref="inputRef"
      :style="{ width: '90px' }"
      size="xs"
      v-model.trim="inputVal"
      @keyup.enter="handleAdd"
      @blur="handleAdd" />
    <c-tag
      v-else
      :style="{
        width: '90px',
        backgroundColor: 'var(--color-fill-2)',
        border: '1px dashed var(--color-fill-3)',
        cursor: 'pointer',
      }"
      @click="handleEdit"
    >
      <template #icon>
        <c-icon-plus />
      </template>
      Add Tag
    </c-tag>
  </c-space>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
const tags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
const inputRef = ref(null)
const showInput = ref(false)
const inputVal = ref('')

const handleEdit = () => {
  showInput.value = true

  nextTick(() => {
    if (inputRef.value) {
      inputRef.value.focus()
    }
  })
}

const handleAdd = () => {
  if (inputVal.value) {
    tags.value.push(inputVal.value)
    inputVal.value = ''
  }
  showInput.value = false
}

const handleRemove = (key) => {
  tags.value = tags.value.filter((tag) => tag !== key)
}
</script>
