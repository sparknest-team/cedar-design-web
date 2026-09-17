<template>
  <c-space :size="24" wrap>
    <c-image width="200" src="/cat.jpg" title="一只猫" description="内侧额外内容">
      <template #extra>
        <span class="extra">Extra</span>
      </template>
    </c-image>
    <c-image width="200" src="/cat.jpg" title="一只猫" description="外侧额外内容" footer-position="outer">
      <template #extra>
        <span class="extra extra--outer">Extra</span>
      </template>
    </c-image>
  </c-space>
</template>

<style scoped>
.extra {
  padding: 2px 8px;
  color: #fff;
  font-size: 12px;
  background: rgb(0 0 0 / 45%);
  border-radius: 10px;
}

.extra--outer {
  color: currentColor;
  background: var(--c-color-fill-2);
}
</style>
