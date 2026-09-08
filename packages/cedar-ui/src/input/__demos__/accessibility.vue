<template>
  <c-space direction="column">
    <label for="cedar-account">账号</label>
    <c-input
      clearable
      default-value="cedar-user"
      :input-attrs="{ id: 'cedar-account', 'aria-describedby': 'cedar-account-help' }"
    />
    <span id="cedar-account-help" class="accessibility-demo__help">可使用 Tab 聚焦，Enter 或 Space 清空。</span>
  </c-space>
</template>

<style scoped>
label {
  color: var(--color-text-1);
  font-size: 13px;
}

.accessibility-demo__help {
  color: var(--color-text-3);
  font-size: 12px;
}
</style>
