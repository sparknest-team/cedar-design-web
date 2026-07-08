<template>
  <c-list>
    <template #header> IconPark </template>
    <c-list-item>如果需要权限，找@xuyang.shen来开。 项目上优先使用iconPark的图标。</c-list-item>
    <c-list-item><c-link href="https://iconpark.oceanengine.com/projects/10027/detail">Powergo</c-link></c-list-item>
    <c-list-item><c-link href="https://iconpark.oceanengine.com/projects/33952/detail">能源云saas</c-link></c-list-item>
    <c-list-item><c-link href="https://iconpark.oceanengine.com/projects/10210/detail">Shield</c-link></c-list-item>
    <c-list-item><c-link href="https://iconpark.oceanengine.com/projects/10938/detail">Athena</c-link></c-list-item>
  </c-list>
  <br />
  <c-list>
    <template #header> 组件库 </template>
    <c-list-item
      >组件库按钮中自定义的icon会受到组件库的样式影响，比如大小。如果是iconPark的图标，则需要自己设置大小。</c-list-item
    >

    <c-list-item>
      <c-space>
        <c-button size="xs" type="primary">
          <template #icon>
            <c-icon-plus />
          </template>
          新增
        </c-button>
        <c-button type="primary">
          <template #icon>
            <c-icon-plus />
          </template>
          新增
        </c-button>
      </c-space>
    </c-list-item>
  </c-list>
</template>

<script lang="ts">
</script>
<style></style>
