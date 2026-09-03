<template>
  <c-space align="center" :size="24">
    <c-avatar image-url="/cat.jpg" alt="编辑头像" :size="56">
      <template #trigger-icon><c-icon-image /></template>
    </c-avatar>

    <c-avatar
      image-url="/cat2.jpg"
      alt="更换头像"
      :size="56"
      trigger-type="mask"
    >
      <template #trigger-icon><c-icon-camera /></template>
    </c-avatar>
  </c-space>
</template>
