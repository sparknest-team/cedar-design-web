<template>
  <c-space direction="column">
    <p>Small value: -1.234e-7</p>
    <c-count-to
      class="scientific-small"
      :from="-1.234e-7"
      :to="-1.234e-7"
      :precision="precision"
      :auto-start="false"
    />
    <c-button @click="precision = precision === 9 ? 8 : 9">Toggle precision</c-button>
    <p role="status">
      Precision: {{ precision }} Changes formatting without replay.
    </p>
    <p>Large value, precision -23:</p>
    <c-count-to
      class="scientific-large"
      :from="-1.234e24"
      :to="-1.234e24"
      :precision="-23"
      :auto-start="false"
    />
    <p>Floor toward negative infinity:</p>
    <c-count-to
      class="negative-floor"
      :from="-12.351"
      :to="-12.351"
      :precision="2"
      :auto-start="false"
    />
  </c-space>
</template>
<script setup lang="ts">

import { ref } from "vue";
const precision = ref(9);
</script>
