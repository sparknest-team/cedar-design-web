<template>
  <c-space direction="column" size="lg">
    <c-input-number
      :style="{ width: '320px' }"
      placeholder="Please enter something"
      clearable
    >
      <template #plus>
        <c-icon-plus />
      </template>
      <template #minus>
        <c-icon-minus />
      </template>
    </c-input-number>
  </c-space>
</template>
