<template>
  <c-space direction="column" fill>
    <c-date-picker disabled />
    <c-date-picker :disabled-date="() => true" />
  </c-space>
</template>
