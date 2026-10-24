<template>
  <c-space direction="column" :style="{ width: '100%' }">
    <c-space>
      <c-button @click="position = position === 'right' ? 'left' : 'right'">
        {{ position === 'right' ? 'Icon left' : 'Icon right' }}
      </c-button>
      <c-button @click="hideIcon = !hideIcon">
        {{ hideIcon ? 'Show icon' : 'Hide icon' }}
      </c-button>
    </c-space>
    <c-collapse :default-value="['1']" :expand-icon-position="position" :show-expand-icon="!hideIcon">
      <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="1">
        <template #extra>
          <c-tag size="sm">city</c-tag>
        </template>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </c-collapse-item>
      <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="2" disabled>
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </c-collapse-item>
      <c-collapse-item title="Beijing Toutiao Technology Co., Ltd." name="3">
        <div>Beijing Toutiao Technology Co., Ltd.</div>
      </c-collapse-item>
    </c-collapse>
  </c-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const position = ref<'left' | 'right'>('left')
const hideIcon = ref(false)
</script>
