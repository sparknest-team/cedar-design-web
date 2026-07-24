<template>
  <c-time-range-picker
    :default-value="['10:00:00', '18:00:00']"
    :step="{ hour: 2, minute: 5, second: 10 }"
  />
</template>
