<template>
  <c-space direction="column" size="lg">
    <c-radio-group type="button" v-model="size">
      <c-radio value="sm">sm</c-radio>
      <c-radio value="md">md</c-radio>
      <c-radio value="lg">lg</c-radio>
    </c-radio-group>
    <c-pagination :total="50" :size="size" show-total show-jumper show-page-size />
  </c-space>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const size = ref('md')

    return {
      size,
    }
  },
}
</script>
