<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="size"
    >
      <h4>图标尺寸</h4>
      <c-space wrap align="center" :size="24">
        <c-icon size="20"><c-icon-check-circle /></c-icon>
        <c-icon size="28"><c-icon-check-circle /></c-icon>
        <c-icon size="36"><c-icon-check-circle /></c-icon>
      </c-space>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="color"
    >
      <h4>图标颜色</h4>
      <c-space wrap :size="24">
        <c-icon size="28" color="rgb(var(--c-primary-6))"
          ><c-icon-check-circle
        /></c-icon>
        <c-icon size="28" color="rgb(var(--c-success-6))"
          ><c-icon-check-circle
        /></c-icon>
      </c-space>
    </section>
  </div>
</template>

<style scoped lang="less">
.demo-comparison {
  display: grid;
  gap: 24px;
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case {
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case > h4 {
  margin: 0 0 12px;
  font-size: 14px;
}
</style>
