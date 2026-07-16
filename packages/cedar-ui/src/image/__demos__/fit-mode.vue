<template>
  <c-space>
    <c-image
      v-for="fit in fits"
      :key="fit"
      :fit="fit"
      width="120"
      height="120"
      :preview="false"
      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
    />
  </c-space>
</template>

<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
</script>
