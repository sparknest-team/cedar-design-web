<template>
  <div>
    <c-resize-box
      :directions="['right', 'bottom']"
      :style="{ minWidth: '100px', maxWidth: '100%', textAlign: 'center' }"
      v-model:width="width"
      v-model:height="height"
    >
      <c-typography-paragraph>We are building the future of content discovery and creation.</c-typography-paragraph>
      <c-divider  />
      <c-typography-paragraph>
        ByteDance's content platforms enable people to enjoy content powered by AI technology. We inform, entertain, and
        inspire people across language, culture and geography.
      </c-typography-paragraph>
      <c-divider>ByteDance</c-divider>
      <c-typography-paragraph>Yiming Zhang is the founder and CEO of ByteDance.</c-typography-paragraph>
    </c-resize-box>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const width = ref(500)
const height = ref(200)
</script>
