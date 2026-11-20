<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="title"
    >
      <h4>提示标题</h4>
      <c-row :gutter="[40, 20]">
        <c-col :span="12">
          <c-alert title="Info">This is an info alert.</c-alert>
        </c-col>
        <c-col :span="12">
          <c-alert title="Success" status="success"
            >This is an success alert.</c-alert
          >
        </c-col>
        <c-col :span="12">
          <c-alert status="warning">
            <template #title> Warning </template>
            This is an warning alert.
          </c-alert>
        </c-col>
        <c-col :span="12">
          <c-alert status="danger">
            <template #title> Error </template>
            This is a danger alert.
          </c-alert>
        </c-col>
      </c-row>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="center"
    >
      <h4>居中</h4>
      <c-alert center>This is a centered alert.</c-alert>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--3"
      data-comparison-scene="banner"
    >
      <h4>顶部公告</h4>
      <c-alert banner>This is a banner alert.</c-alert>
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
