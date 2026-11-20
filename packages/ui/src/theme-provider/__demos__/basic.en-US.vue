<script setup lang="ts">

import { ref } from "vue";

const active = ref(true);
</script>

<template>
  <div>
    <c-button variant="outline" @click="active = !active">Toggle local variables</c-button>
    <c-theme-provider
      tag="section"
      :style-vars="active ? { '--c-demo-color': 'teal' } : null"
    >
      <p style="color: var(--c-demo-color, currentColor)">
        Local color
      </p>
      <c-theme-provider :style-vars="{ '--c-demo-color': 'coral' }">
        <p style="color: var(--c-demo-color)">
          Nested override
        </p>
      </c-theme-provider>
    </c-theme-provider>
    <p>Outside remains unchanged</p>
  </div>
</template>
