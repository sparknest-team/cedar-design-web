<template>
  <c-space :size="16" wrap>
    <c-image
      width="120"
      height="120"
      object-fit="cover"
      src="/cat.jpg"
      :preview-props="{ overlayClosable: true }"
    />
    <c-image
      width="120"
      height="120"
      object-fit="cover"
      src="/cat2.jpg"
      :preview-props="{ overlayClosable: false }"
    />
  </c-space>
</template>
