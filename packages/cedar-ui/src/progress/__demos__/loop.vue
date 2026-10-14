<template>
  <div style="display: grid; gap: 16px">
    <c-progress indeterminate aria-label="Loading" />
    <c-progress mode="circle" indeterminate aria-label="Loading" />
    <c-progress :percent="60" animation />
  </div>
</template>
