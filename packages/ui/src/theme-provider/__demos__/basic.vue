<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("themeProviderBasicInline");

import { ref } from "vue";

const active = ref(true);
</script>

<template>
  <div>
    <c-button variant="outline" @click="active = !active">{{
      inlineCopy.toggleLocalVariables
    }}</c-button>
    <c-theme-provider
      tag="section"
      :style-vars="active ? { '--c-demo-color': 'teal' } : null"
    >
      <p style="color: var(--c-demo-color, currentColor)">
        {{ inlineCopy.localColor }}
      </p>
      <c-theme-provider :style-vars="{ '--c-demo-color': 'coral' }">
        <p style="color: var(--c-demo-color)">
          {{ inlineCopy.nestedOverride }}
        </p>
      </c-theme-provider>
    </c-theme-provider>
    <p>{{ inlineCopy.outsideRemainsUnchanged }}</p>
  </div>
</template>
