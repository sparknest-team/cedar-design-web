<template>
  <div class="starter-card">
    <div class="starter-title">第一张原子化卡片</div>
    <div class="starter-description">组合小类完成布局，不需要另外写组件样式。</div>

    <div class="starter-row">
      <span class="starter-tag">c-flex c-items-center c-gap-8</span>
      <span class="starter-status">Success</span>
    </div>

    <button class="starter-button">c-bg-primary · hover:c-opacity-80</button>
  </div>
</template>

<style scoped>
/* 文档站的等价视觉预览；业务项目中的样式由 UnoCSS 或 Tailwind 生成。 */
.starter-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 420px;
  padding: 16px;
  border: 1px solid var(--c-color-border-2);
  border-radius: 8px;
  background: var(--c-color-body);
}

.starter-title {
  color: var(--c-color-primary);
  font-size: var(--c-font-size-lg);
  font-weight: 600;
}

.starter-description {
  color: var(--c-color-text-3);
}

.starter-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 12px;
  border-radius: 6px;
  background: var(--c-color-fill-2);
}

.starter-tag {
  color: var(--c-color-text-2);
  font-family: monospace;
  font-size: 12px;
}

.starter-status {
  color: var(--c-color-success);
}

.starter-button {
  padding: 8px 16px;
  border: 0;
  border-radius: 6px;
  color: #fff;
  background: var(--c-color-primary);
  cursor: pointer;
  transition: opacity 0.2s;
}

.starter-button:hover {
  opacity: 0.8;
}
</style>
