<template>
  <c-space direction="column" :size="20">
    <c-avatar-group>
      <c-avatar image-url="/cat.jpg" alt="用户一" bordered />
      <c-avatar image-url="/cat2.jpg" alt="用户二" bordered />
      <c-avatar image-url="/cat.jpg" alt="用户三" bordered />
      <c-avatar bordered>+2</c-avatar>
    </c-avatar-group>

    <c-avatar-group :max-count="3" :size="48">
      <c-avatar image-url="/cat.jpg" alt="用户一" />
      <c-avatar image-url="/cat2.jpg" alt="用户二" />
      <c-avatar color="#00bebe">A</c-avatar>
      <c-avatar color="#f59e0b">B</c-avatar>
      <c-avatar color="#ef4444">C</c-avatar>
    </c-avatar-group>

    <c-avatar-group z-index-ascend>
      <c-avatar image-url="/cat.jpg" alt="用户一" />
      <c-avatar image-url="/cat2.jpg" alt="用户二" />
      <c-avatar color="#7b61ff">CD</c-avatar>
    </c-avatar-group>
  </c-space>
</template>
