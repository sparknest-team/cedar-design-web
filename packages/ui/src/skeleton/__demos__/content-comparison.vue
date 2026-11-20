<script setup lang="ts">
import { ref } from "vue";
import { proxyRefs as demoProxyRefs } from "vue";

const scene1 = demoProxyRefs(
  (() => {
    const loading = ref(true);
    return { loading };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="title-and-rows"
    >
      <h4>标题与段落</h4>
      <c-skeleton
        title
        :rows="3"
        :loading="scene1.loading"
        :rows-width="['200px', '100px', '50px']"
      >
        加载的数据
      </c-skeleton>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="avatar-and-card"
    >
      <h4>头像与卡片</h4>
      <c-skeleton title avatar card :rows="3">加载的数据</c-skeleton>
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
