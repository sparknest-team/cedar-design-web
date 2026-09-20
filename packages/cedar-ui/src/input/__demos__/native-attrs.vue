<template>
  <c-space direction="column">
    <label for="cedar-email">邮箱地址</label>
    <c-input
      :input-attrs="{
        id: 'cedar-email',
        name: 'email',
        'aria-describedby': 'cedar-email-help',
        autocomplete: 'email',
        inputmode: 'email',
      }"
      placeholder="name@example.com"
      type="email"
    />
    <span id="cedar-email-help" class="native-attrs-demo__help">我们只会使用邮箱发送必要通知。</span>
  </c-space>
</template>

<style scoped>
label {
  color: var(--color-text-1);
  font-size: 13px;
}

.native-attrs-demo__help {
  color: var(--color-text-3);
  font-size: 12px;
}
</style>
