<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="clear"
    >
      <h4>支持清除</h4>
      <c-rate :default-value="3" clearable />
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="count"
    >
      <h4>任意长度的评分</h4>
      <c-rate :count="10" />
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
