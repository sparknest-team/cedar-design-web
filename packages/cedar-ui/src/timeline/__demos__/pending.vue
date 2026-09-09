<template>
  <c-row align="center" :style="{ marginBottom: '24px' }">
    <c-checkbox :checked="!!pendingProps.orientation" @change="(v) => onChange({ orientation: v ? 'horizontal' : '' })">
      horizontal &nbsp; &nbsp;
    </c-checkbox>
    <c-checkbox :checked="!!pendingProps.reverse" @change="(v) => onChange({ reverse: v })">
      reverse &nbsp; &nbsp;
    </c-checkbox>
    <c-checkbox
      :checked="!!pendingProps.pending"
      @change="(v) => onChange({ pending: v ? 'This is a pending dot' : false })"
    >
      pending &nbsp; &nbsp;
    </c-checkbox>
    <c-checkbox :checked="!!pendingProps.hasPendingDot" @change="(v) => onChange({ hasPendingDot: v })">
      custom pendingDot
    </c-checkbox>
  </c-row>
  <c-timeline v-bind="pendingProps">
    <template v-if="pendingProps.hasPendingDot" #dot>
      <c-icon-fire :style="{ color: '#e70a0a' }" />
    </template>
    <c-timeline-item label="2017-03-10" dotColor="#52C419"> The first milestone </c-timeline-item>
    <c-timeline-item label="2018-05-12" dotColor="#F5222D"> The second milestone </c-timeline-item>
    <c-timeline-item label="2020-09-30">The third milestone</c-timeline-item>
  </c-timeline>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const pendingProps = ref({})

const onChange = (newProps) => {
  pendingProps.value = {
    ...pendingProps.value,
    ...newProps,
  }
}
</script>
