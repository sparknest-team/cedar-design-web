<template>
  <c-space wrap align="center" :size="32">
    <div class="demo-item">
      <c-icon size="32" :rotate="90"><c-icon-arrow-right /></c-icon>
      <span>rotate="90"</span>
    </div>
    <div class="demo-item">
      <c-icon size="32" spin><c-icon-refresh /></c-icon>
      <span>spin</span>
    </div>
  </c-space>
</template>
<style scoped>
.demo-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
</style>
