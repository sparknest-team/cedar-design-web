<template>
  <c-space direction="column" fill>
    <c-space wrap>
      <c-button status="primary" @click="apply(Themes.default.light)">默认亮色</c-button>
      <c-button status="primary" @click="apply(Themes.default.dark)">默认暗色</c-button>
      <c-button status="primary" @click="apply(Themes.maple.light)">枫叶亮色</c-button>
      <c-button status="primary" @click="apply(Themes.maple.dark)">枫叶暗色</c-button>
    </c-space>

    <div class="preview c-rounded-md c-p-16">
      <div class="c-text-1 c-mb-8">主题预览</div>
      <div class="c-text-3 c-mb-16">主色按钮与语义文字会随 StyleProvider / cedar-theme 变化。</div>
      <c-space>
        <c-button status="primary">Primary</c-button>
        <c-button>Default</c-button>
        <span class="semantic-primary">primary</span>
        <span class="semantic-success">success</span>
        <span class="semantic-warning">warning</span>
      </c-space>
    </div>
  </c-space>
</template>

<script lang="ts" setup>
import { StyleProvider, Themes, type StyleVars } from '@cedarjs/ui'

function apply(theme: StyleVars | null) {
  StyleProvider.setStyleVars(theme)
}
</script>

<style scoped>
.preview {
  background: var(--c-color-fill-2);
  border: 1px solid var(--c-color-border-2);
}

.semantic-primary {
  color: var(--c-color-primary);
}

.semantic-success {
  color: var(--c-color-success);
}

.semantic-warning {
  color: var(--c-color-warning);
}
</style>
