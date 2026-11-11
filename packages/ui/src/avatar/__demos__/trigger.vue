<template>
  <c-space align="flex-end" :size="32" wrap>
    <c-space direction="column" align="center" :size="8">
      <c-avatar image-url="/cat.jpg" alt="头像" trigger-aria-label="编辑头像" :size="56" @click="onClick('button')">
        <template #trigger-icon>+</template>
      </c-avatar>
      <span class="label">{{ last === 'button' ? 'click · button' : 'trigger-type="button"' }}</span>
    </c-space>

    <c-space direction="column" align="center" :size="8">
      <c-avatar
        image-url="/cat2.jpg"
        alt="头像" trigger-aria-label="更换头像"
        :size="56"
        trigger-type="overlay"
        @click="onClick('overlay')"
      >
        <template #trigger-icon>+</template>
      </c-avatar>
      <span class="label">{{ last === 'overlay' ? 'click · overlay' : 'trigger-type="overlay"' }}</span>
    </c-space>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const last = ref('')

function onClick(type: string) {
  last.value = type
}
</script>

<style scoped>
.label {
  color: var(--c-color-text-3);
  font-size: var(--c-font-size-sm);
}
</style>
