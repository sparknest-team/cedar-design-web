<template>
  <c-space direction="column" size="16px">
    <c-progress indeterminate aria-label="Loading" />
    <c-progress mode="circle" indeterminate aria-label="Loading" />
    <c-progress :percent="60" animation />
  </c-space>
</template>
