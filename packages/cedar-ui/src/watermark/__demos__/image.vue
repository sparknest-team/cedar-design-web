<template>
  <c-watermark
    content="Cedar Design"
    grayscale
    :image="image"
    :width="48"
    :height="48"
  >
    <div style="width: 100%; height: 300px" />
  </c-watermark>
</template>

<script lang="ts" setup>
const image =
  "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2248%22 height=%2248%22 viewBox=%220 0 48 48%22%3E%3Ccircle cx=%2224%22 cy=%2224%22 r=%2220%22 fill=%22%23165dff%22/%3E%3Cpath d=%22M16 24h16M24 16v16%22 stroke=%22white%22 stroke-width=%224%22/%3E%3C/svg%3E";
</script>
