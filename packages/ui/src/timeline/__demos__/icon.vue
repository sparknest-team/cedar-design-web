<template>
  <c-timeline>
    <c-timeline-item label="2017-03-10" dotColor="#00B42A"> The first milestone </c-timeline-item>
    <c-timeline-item label="2018-05-22">The second milestone</c-timeline-item>
    <c-timeline-item label="2020-06-22" dotColor="#F53F3F">
      The third milestone
      <c-icon-exclamation-circle-fill :style="{ color: '#F53F3F', fontSize: '12px', marginLeft: '4px' }" />
    </c-timeline-item>
    <c-timeline-item label="2020-09-30" dotColor="#C9CDD4"> The fourth milestone </c-timeline-item>
  </c-timeline>
</template>

<script lang="ts" setup>
</script>
