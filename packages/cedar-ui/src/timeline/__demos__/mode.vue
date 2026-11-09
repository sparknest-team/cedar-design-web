<template>
  <c-row justify="space-between">
    <c-timeline mode="alternate" :style="{ flex: 1 }">
      <c-timeline-item label="2017-03-10">The first milestone</c-timeline-item>
      <c-timeline-item label="2018-05-12">The second milestone</c-timeline-item>
      <c-timeline-item label="2020-09-30" content-placement="left"> The third milestone </c-timeline-item>
    </c-timeline>
    <c-timeline mode="right" :style="{ flex: 1 }">
      <c-timeline-item label="2017-03-10">The first milestone</c-timeline-item>
      <c-timeline-item label="2018-05-12">The second milestone</c-timeline-item>
      <c-timeline-item label="2020-09-30" content-placement="left"> The third milestone </c-timeline-item>
    </c-timeline>
  </c-row>
</template>

<script lang="ts" setup>
</script>
