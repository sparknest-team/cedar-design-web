<template>
  <c-countdown :time="108000000">
    <template #default="{ hours, minutes, seconds }">
      <span class="countdown-block">{{ hours }}</span>
      <span class="countdown-colon">:</span>
      <span class="countdown-block">{{ minutes }}</span>
      <span class="countdown-colon">:</span>
      <span class="countdown-block">{{ seconds }}</span>
    </template>
  </c-countdown>
</template>

<style scoped>
.countdown-block {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--c-color-white);
  background: var(--c-color-primary-6);
  border-radius: 8px;
}

.countdown-colon {
  margin: 0 6px;
  font-weight: 500;
}
</style>
