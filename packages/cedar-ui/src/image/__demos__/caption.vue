<template>
  <c-space :size="24" wrap>
    <c-image width="200" src="/cat.jpg" title="一只猫" description="页脚在图片内侧" />
    <c-image width="200" src="/cat2.jpg" title="一只猫" description="页脚在图片外侧" footer-position="outer" />
  </c-space>
</template>
