<template>
  <c-skeleton>
    <template #template>
      <c-space block direction="column" size="lg">
        <c-skeleton-line :rows="3" :widths="['100%', '100%', '60%']" />
        <c-skeleton-shape shape="circle" />
      </c-space>
    </template>
    加载的数据
  </c-skeleton>
</template>
