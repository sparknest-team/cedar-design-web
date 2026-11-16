<script setup>
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("watermarkBasicInline");

import { ref } from "vue";
const dark = ref(false);
const shown = ref(true);
const content = ref("LOCAL DEMO 200");
const clicks = ref(0);
</script>

<template>
  <section class="watermark-contrast-demo">
    <c-checkbox v-model="dark"> {{ inlineCopy.darkSurface }}</c-checkbox>
    <c-checkbox v-model="shown"> {{ inlineCopy.showWatermark }}</c-checkbox>
    <label>{{ inlineCopy.watermarkText }}<c-input v-model="content" /></label>
    <c-watermark
      v-if="shown"
      :content="content"
      :font="{ color: dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.25)' }"
      :style="{
        background: dark ? '#1f2937' : '#ffffff',
        color: dark ? '#ffffff' : '#111827',
      }"
    >
      <div class="watermark-contrast-surface">
        <p>{{ inlineCopy.localSyntheticContent }}</p>
        <c-button html-type="button" @click="clicks++">{{
          inlineCopy.clickThrough
        }}</c-button>
      </div>
    </c-watermark>
    <p role="status">
      Visible: {{ shown }} · Dark: {{ dark }} · Clicks: {{ clicks }}
    </p>
  </section>
</template>
<style scoped>
.watermark-contrast-surface {
  min-height: 240px;
  display: grid;
  place-content: center;
  gap: 12px;
}
</style>
