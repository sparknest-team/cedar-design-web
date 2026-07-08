<template>
  <div>
    <c-row align="center">
      <c-typography-text>labelPosition: &nbsp; &nbsp;</c-typography-text>
      <c-radio-group @change="onLabelPositionChange" :modelValue="pos">
        <c-radio value="same">same</c-radio>
        <c-radio value="relative">relative</c-radio>
      </c-radio-group>
    </c-row>
    <c-row align="center" :style="{ margin: '20px 0px 24px' }">
      <c-typography-text>mode: &nbsp; &nbsp;</c-typography-text>
      <c-radio-group @change="onModeChange" :modelValue="mode">
        <c-radio value="left">left</c-radio>
        <c-radio value="right">right</c-radio>
        <c-radio value="alternate">alternate</c-radio>
      </c-radio-group>
    </c-row>
    <c-timeline :mode="mode" :labelPosition="pos">
      <c-timeline-item label="2017-03-10" dotColor="#52C419"> The first milestone </c-timeline-item>
      <c-timeline-item label="2018-05-12" dotColor="#F5222D" labelPosition="same"> The second milestone </c-timeline-item>
      <c-timeline-item label="2020-09-30" position="bottom"> The third milestone </c-timeline-item>
    </c-timeline>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const mode = ref('left')
const pos = ref('same')

const onLabelPositionChange = (_pos) => {
  pos.value = _pos
}

const onModeChange = (_mode) => {
  mode.value = _mode
}
</script>
