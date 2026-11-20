<script setup lang="ts">
import { ref } from 'vue'

const content = ref('First line')
const boundedContent = ref('First line\nSecond line')
const maxRows = ref(5)
function fill() {
  boundedContent.value = 'one\ntwo\nthree\nfour\nfive\nsix'
}
</script>
<template>
  <c-space direction="column" size="lg" fill>
    <c-textarea default-value="Native three rows" :rows="3" aria-label="Native rows" />
    <c-textarea v-model="content" auto-size placeholder="Grow with content" />
    <c-space wrap>
      <c-button @click="fill">Fill six lines</c-button>
      <c-button @click="maxRows = maxRows === 5 ? 2 : 5">Toggle row limit: {{ maxRows }}</c-button>
    </c-space>
    <template v-for="box in ['border-box', 'content-box']" :key="box">
      <p>{{ box }} · 2–{{ maxRows }} rows</p>
      <c-textarea
        v-model="boundedContent"
        :auto-size="{ minRows: 2, maxRows }"
        :textarea-attrs="{
          'aria-label': 'Bounded ' + box,
          style: {
            boxSizing: box,
            lineHeight: '20px',
            padding: '4px',
            borderStyle: 'solid',
            borderWidth: '1px 2px 3px 4px',
          },
        }"
      />
    </template>
  </c-space>
</template>
