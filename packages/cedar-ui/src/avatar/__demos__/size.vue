<template>
  <c-space direction="column" :size="16">
    <c-space align="center" :size="16">
      <c-avatar :size="24">A</c-avatar>
      <c-avatar :size="32">B</c-avatar>
      <c-avatar :size="40">C</c-avatar>
      <c-avatar :size="48">D</c-avatar>
      <c-avatar :size="64">E</c-avatar>
    </c-space>
    <c-space align="center" :size="16">
      <c-avatar image-url="/cat.jpg" alt="28px" :size="28" />
      <c-avatar image-url="/cat.jpg" alt="36px" :size="36" />
      <c-avatar image-url="/cat.jpg" alt="48px" :size="48" />
      <c-avatar image-url="/cat.jpg" alt="64px" :size="64" />
      <c-avatar image-url="/cat.jpg" alt="78px" :size="78" />
    </c-space>
  </c-space>
</template>
