<script setup lang="ts">
const demoCopy = {
  "403": "HTTP状态码 403",
  "404": "HTTP状态码 404",
  "500": "HTTP状态码 500"
};
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="403"
    >
      <h4>{{ demoCopy["403"] }}</h4>
      <c-result
        status="403"
        subtitle="Access to this resource on the server is denied."
      >
        <template #extra>
          <c-space>
            <c-button status="primary">Back</c-button>
          </c-space>
        </template>
      </c-result>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="404"
    >
      <h4>{{ demoCopy["404"] }}</h4>
      <c-result status="404" subtitle="Whoops, that page is gone.">
        <template #extra>
          <c-space>
            <c-button status="primary">Back</c-button>
          </c-space>
        </template>
      </c-result>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--3"
      data-comparison-scene="500"
    >
      <h4>{{ demoCopy["500"] }}</h4>
      <c-result status="500" subtitle="This page isn’t working.">
        <template #extra>
          <c-space>
            <c-button status="primary">Back</c-button>
          </c-space>
        </template>
      </c-result>
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
