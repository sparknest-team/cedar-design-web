<template>
  <div class="divider-example-vertical-container">
    <span>文字</span>
    <c-divider orientation="vertical" type="dotted" thickness="3" />
    <span>文字</span>
    <c-divider orientation="vertical" type="double" thickness="3" />
    <span>文字</span>
    <c-divider orientation="vertical" type="dashed" thickness="3" />
    <span>文字</span>
    <c-divider orientation="vertical" type="solid" thickness="3" />
    <span>文字</span>
    <c-divider orientation="vertical" hairline />
    <span>文字</span>
  </div>
  <br />
  <div style="height: 200px; display: flex; align-items: center">
    <c-divider orientation="vertical">
      <c-icon-star />
    </c-divider>
    <c-divider text-align="end" description="内容" orientation="vertical" />
    <c-divider text-align="start" description="内容" orientation="vertical" />
  </div>
</template>

<style>
.divider-example-vertical-container {
  display: flex;
  align-items: center;
}
</style>
