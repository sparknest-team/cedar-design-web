<template>
  <div :style="{ display: 'flex' }">
    <c-timeline :style="{ marginRight: '40px' }">
      <c-timeline-item label="2020-04-12" dotColor="#00B42A"> The first milestone </c-timeline-item>
      <c-timeline-item label="2020-05-17"> The second milestone </c-timeline-item>
      <c-timeline-item label="2020-06-22">
        <template #dot>
          <c-icon-clock-circle :style="{ fontSize: '12px', color: '#F53F3F' }" />
        </template>
        The third milestone
      </c-timeline-item>
      <c-timeline-item label="2020-06-22" dotColor="var(--color-fill-4)"> The third milestone </c-timeline-item>
    </c-timeline>

    <c-timeline :style="{ marginRight: '40px' }">
      <c-timeline-item label="2020-04-12">
        <template #dot>
          <c-icon-check
            :style="{
              fontSize: '12px',
              padding: '2px',
              boxSizing: 'border-box',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary-light-1)',
            }"
          />
        </template>
        The first milestone
      </c-timeline-item>
      <c-timeline-item label="2020-05-17">
        <template #dot>
          <c-icon-check
            :style="{
              fontSize: '12px',
              padding: '2px',
              boxSizing: 'border-box',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary-light-1)',
            }"
          />
        </template>
      </c-timeline-item>
      <c-timeline-item label="2020-06-22">The third milestone</c-timeline-item>
      <c-timeline-item label="2020-06-22" dotColor="var(--color-fill-4)"> The third milestone </c-timeline-item>
    </c-timeline>

    <c-timeline>
      <c-timeline-item label="2020-04-12">The first milestone</c-timeline-item>
      <c-timeline-item label="2020-05-17" dotColor="var(--color-fill-4)"> The second milestone </c-timeline-item>
      <c-timeline-item label="2020-06-22" dotColor="var(--color-fill-4)"> The third milestone </c-timeline-item>
    </c-timeline>
  </div>
</template>

<script lang="ts" setup>
</script>
