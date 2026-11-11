<template>
  <div>
    <div class="vertical-row">
      <span>Before</span>
      <c-divider orientation="vertical" />
      <span>Middle</span>
      <c-divider orientation="vertical" type="dashed" />
      <span>After</span>
    </div>
    <div class="vertical-labels">
      <c-divider orientation="vertical" text-align="start" description="Start" />
      <c-divider orientation="vertical" description="Center" />
      <c-divider orientation="vertical" text-align="end" description="End" />
    </div>
  </div>
</template>

<style scoped>
.vertical-row {
  display: flex;
  align-items: center;
  min-height: 40px;
}
.vertical-labels {
  display: flex;
  height: 160px;
}
</style>
