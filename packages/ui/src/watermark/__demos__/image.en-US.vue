<script setup>

import { computed, ref } from "vue";
const failed = ref(false);
const errors = ref([]);
const localImage =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="48"><rect width="160" height="48" rx="8" fill="#0284c7"/><circle cx="80" cy="24" r="14" fill="white"/></svg>',
  );
const image = computed(() =>
  failed.value ? "data:image/png;base64,invalid-local-image" : localImage,
);
</script>
<template>
  <section class="watermark-image-failure-demo">
    <c-checkbox v-model="failed"> Fail local image</c-checkbox>
    <c-button html-type="button" :disabled="!failed" @click="failed = false">Restore image</c-button>
    <c-watermark
      content="FALLBACK 201"
      :image="image"
      :width="160"
      :height="48"
      :font="{ color: '#be123c' }"
      style="background: white"
      @error="errors.push($event.source)"
    >
      <div style="height: 240px" />
    </c-watermark>
    <p role="status">
      Mode: {{ failed ? "failure" : "image" }} · Errors:
      {{ errors.join(",") || "-" }}
    </p>
  </section>
</template>
