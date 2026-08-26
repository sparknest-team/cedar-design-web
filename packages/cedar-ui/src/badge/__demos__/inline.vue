<template>
  <c-space direction="column">
    独立使用
    <c-space>
      <c-badge :content="1000" />
      <c-badge :content="1000" dot />
    </c-space>
    <br />
    内联类型，指定description
    <c-space>
      <c-badge :content="1000" mode="inline" description="描述文本" />
      <c-badge :content="1000" mode="inline" description="描述文本" dot />
    </c-space>
    <br />
    内联类型，指定description，inline-position="start"
    <c-space>
      <c-badge :content="1000" mode="inline" description="描述文本" inline-position="start" />
      <c-badge :content="1000" mode="inline" description="描述文本" dot inline-position="start" />
    </c-space>
  </c-space>
</template>
<script lang="ts" setup></script>
