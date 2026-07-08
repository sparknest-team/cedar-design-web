<template>
  <c-select
    :style="{ width: '320px' }"
    default-value="Beijing"
    placeholder="Please select ..."
    @dropdown-scroll="handleScroll"
    @dropdown-reach-bottom="handleReachBottom"
  >
    <c-option>Beijing</c-option>
    <c-option>Shanghai</c-option>
    <c-option>Guangzhou</c-option>
    <c-option disabled>Disabled</c-option>
    <c-option>Shenzhen</c-option>
    <c-option>Chengdu</c-option>
    <c-option>Wuhan</c-option>
  </c-select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const handleScroll = (ev) => {
      console.log('scroll', ev)
    }
    const handleReachBottom = (ev) => {
      console.log('reach the bottom', ev)
    }

    return {
      handleScroll,
      handleReachBottom,
    }
  },
})
</script>
