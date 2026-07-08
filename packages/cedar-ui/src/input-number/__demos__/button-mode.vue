<template>
  <c-space direction="column">
    <c-input-number
      :style="{ width: '320px' }"
      :min="2"
      :max="10"
      clearable
      placeholder="请输入"
      control-type="split"
    ></c-input-number>
  </c-space>
</template>
