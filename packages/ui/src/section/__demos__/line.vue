<template>
  <c-section :title="copy.history" variant="line">
    <template #extra>
      <c-button :aria-expanded="expanded" @click="expanded = !expanded">
        {{ expanded ? copy.latest : copy.all }}
      </c-button>
    </template>
    <ul>
      <li>{{ copy.exportRelease }}</li>
      <li v-if="expanded">{{ copy.memberRelease }}</li>
    </ul>
  </c-section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDemoLocale } from '../../__demos__/locale'

const copy = useDemoLocale('section')

const expanded = ref(false)
</script>
