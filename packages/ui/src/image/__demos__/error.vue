<template>
  <c-space :size="16" wrap>
    <c-image width="160" height="120" src="data:image/png;base64,AA==" />
    <c-image width="160" height="120" src="data:image/png;base64,AA==" alt="自定义错误内容">
      <template #error>
        <div class="error-slot">加载失败</div>
      </template>
    </c-image>
  </c-space>
</template>

<style scoped>
.error-slot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--c-color-text-3);
  font-size: 12px;
}
</style>
