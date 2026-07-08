<template>
  <div :style="{ background: 'var(--color-fill-2)', padding: '28px' }">
    <c-page-header class="demo-style" title="列表页标题 normal texttext normal texttext" :show-back="true" subtitle="subtitle描述信息">
      <template #extra>
        <c-radio-group type="button" default-value="lg">
          <c-radio value="xs">xs</c-radio>
          <c-radio value="sm">sm</c-radio>
          <c-radio value="md">md</c-radio>
        </c-radio-group>
      </template>
    </c-page-header>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.demo-style {
  background: var(--color-fill-2);

  + .demo-style {
    margin-top: 20px;
  }
}
</style>
