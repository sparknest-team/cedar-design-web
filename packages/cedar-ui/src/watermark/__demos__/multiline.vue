<template>
  <c-watermark :content="['Cedar Design', dayjs().format('YYYY-MM-DD')]">
    <div style="width: 100%; height: 300px" />
  </c-watermark>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
</script>
