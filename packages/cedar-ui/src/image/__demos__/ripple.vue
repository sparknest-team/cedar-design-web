<template>
  <c-space :size="16" wrap>
    <c-image width="120" height="120" object-fit="cover" ripple preview-disabled src="/cat.jpg" />
    <c-image :block="false" width="120" height="120" object-fit="cover" preview-disabled src="/cat.jpg" />
    <c-image :block="false" width="120" height="120" object-fit="cover" preview-disabled src="/cat2.jpg" />
  </c-space>
</template>
