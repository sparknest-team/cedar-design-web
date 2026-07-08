<template>
  <c-space :size="40">
    <c-badge :content="9">
      <c-avatar shape="square" />
    </c-badge>
    <c-badge :content="9" dot :dotStyle="{ width: '10px', height: '10px' }">
      <c-avatar shape="square" />
    </c-badge>
    <c-badge :dotStyle="{ height: '16px', width: '16px', fontSize: '14px' }">
      <template #content>
        <c-icon-clock-circle :style="{ verticalAlign: 'middle', color: 'var(--color-text-2)' }" />
      </template>
      <c-avatar shape="square" />
    </c-badge>
  </c-space>
</template>
