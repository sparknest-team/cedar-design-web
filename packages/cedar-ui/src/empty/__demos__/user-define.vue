<template>
  <c-space direction="vertical" fill>
    <c-empty>
      <template #image>
        <c-icon-exclamation-circle-fill />
      </template>
      No data, please reload!!
    </c-empty>
    <c-empty image-url="cat.jpg" alt="空状态图片" description="自定义图片和文案" />
  </c-space>
</template>
