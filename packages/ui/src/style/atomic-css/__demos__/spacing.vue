<template>
  <div class="spacing-demo">
    <div class="spacing-row">
      <code>c-p-4 · 4px</code>
      <div class="spacing-stage"><div class="spacing-box c-p-4">内容</div></div>
    </div>
    <div class="spacing-row">
      <code>c-p-8 · 8px</code>
      <div class="spacing-stage"><div class="spacing-box c-p-8">内容</div></div>
    </div>
    <div class="spacing-row">
      <code>c-p-16 · 16px</code>
      <div class="spacing-stage">
        <div class="spacing-box c-p-16">内容</div>
      </div>
    </div>
    <div class="spacing-row">
      <code>c-px-24 c-py-8 · 24px / 8px</code>
      <div class="spacing-stage">
        <div class="spacing-box c-px-24 c-py-8">内容</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spacing-demo {
  display: grid;
  gap: 16px;
}

.spacing-row {
  display: grid;
  grid-template-columns: minmax(210px, 1fr) 2fr;
  align-items: center;
  gap: 16px;
}

.spacing-stage {
  background: var(--c-color-fill-2);
  border-radius: 4px;
}

.spacing-box {
  width: fit-content;
  color: #fff;
  background: var(--c-color-primary);
}

/* 文档站未接入 preset 时的等价预览，业务项目由 Uno / Tailwind 生成。 */
.c-p-4 {
  padding: 4px;
}
.c-p-8 {
  padding: 8px;
}
.c-p-16 {
  padding: 16px;
}
.c-px-24 {
  padding-right: 24px;
  padding-left: 24px;
}
.c-py-8 {
  padding-top: 8px;
  padding-bottom: 8px;
}

@media (max-width: 600px) {
  .spacing-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
</style>
