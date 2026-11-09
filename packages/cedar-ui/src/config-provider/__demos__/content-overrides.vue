<template>
  <c-config-provider>
    <template #empty="{ component }"><p>暂无内容（{{ component }}）</p></template>
    <template #loading><span>◌</span></template>
    <c-config-provider>
      <c-space direction="column">
        <c-empty />
        <c-loading tip="正在准备内容" />
      </c-space>
    </c-config-provider>
  </c-config-provider>
</template>
