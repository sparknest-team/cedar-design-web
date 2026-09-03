<template>
  <c-space align="center" :size="16">
    <c-avatar
      lazy
      image-url="/cat.jpg"
      loading="/cat2.jpg"
      alt="懒加载与占位图"
      :size="48"
    />
    <c-avatar
      image-url="/missing-avatar.jpg"
      error="/cat.jpg"
      alt="失败时回退到占位图"
      :size="48"
    />
    <c-avatar image-url="/missing-avatar.jpg" alt="失败插槽" :size="48">
      <template #error>NA</template>
    </c-avatar>
  </c-space>
</template>
