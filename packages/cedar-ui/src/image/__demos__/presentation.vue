<template>
  <c-space direction="vertical" :size="20">
    <c-space :size="16">
      <c-image
        :src="src"
        width="160"
        height="100"
        object-fit="cover"
        object-position="left top"
        preview-disabled
      />
      <c-image
        :src="src"
        width="100"
        height="100"
        object-fit="cover"
        :radius="12"
        preview-disabled
      />
      <c-image
        :src="src"
        width="100"
        height="100"
        object-fit="cover"
        radius="50%"
        preview-disabled
      />
    </c-space>

    <c-space :size="16">
      <c-image :src="src" width="160" height="100" lazy preview-disabled>
        <template #loader>Loading…</template>
      </c-image>
      <c-image
        src="invalid-image-url"
        width="160"
        height="100"
        :fallback-src="placeholder"
        preview-disabled
      />
    </c-space>
  </c-space>
</template>

<script lang="ts" setup>
const src =
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp";
const placeholder =
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp";
</script>
