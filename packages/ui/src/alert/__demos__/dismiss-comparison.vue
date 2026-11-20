<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="closable"
    >
      <h4>可关闭</h4>
      <c-row :gutter="[40, 20]">
        <c-col :span="12">
          <c-alert closable>This is an info alert.</c-alert>
        </c-col>
        <c-col :span="12">
          <c-alert status="success" closable>This is an success alert.</c-alert>
        </c-col>
        <c-col :span="12">
          <c-alert status="warning" closable>
            <template #title> Warning </template>
            This is an warning alert.
          </c-alert>
        </c-col>
        <c-col :span="12">
          <c-alert status="danger" closable>
            <template #title> Error </template>
            This is a danger alert.
          </c-alert>
        </c-col>
      </c-row>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="close-icon"
    >
      <h4>自定义关闭图标</h4>
      <c-row :gutter="[40, 20]">
        <c-col :span="12">
          <c-alert closable>
            <template #close-icon>
              <c-icon-close-circle />
            </template>
            This is an info alert.
          </c-alert>
        </c-col>
        <c-col :span="12">
          <c-alert closable>
            <template #close-icon> Close </template>
            This is an info alert.
          </c-alert>
        </c-col>
      </c-row>
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
