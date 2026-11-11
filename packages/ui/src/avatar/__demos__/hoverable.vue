<template>
  <c-space direction="column" :size="24">
    <c-space align="center" :size="16" wrap>
      <c-avatar hoverable>H</c-avatar>
      <c-avatar hoverable image-url="/cat.jpg" alt="悬停放大" />
      <c-avatar hoverable shape="square">方</c-avatar>
    </c-space>
    <c-avatar-group>
      <c-avatar hoverable image-url="/cat.jpg" alt="用户一" bordered />
      <c-avatar hoverable image-url="/cat2.jpg" alt="用户二" bordered />
      <c-avatar hoverable image-url="/cat.jpg" alt="用户三" bordered />
      <c-avatar hoverable bordered>+2</c-avatar>
    </c-avatar-group>
  </c-space>
</template>
