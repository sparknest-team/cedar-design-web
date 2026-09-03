<template>
  <c-space direction="column" fill>
    <c-space wrap>
      <c-button loading status="primary">主要按钮</c-button>
      <c-button loading variant="tonal" status="primary">主要按钮</c-button>
      <c-button loading variant="outline" status="primary">主要按钮</c-button>
      <c-button loading variant="text" status="primary">主要按钮</c-button>
    </c-space>
    loadingType: fill
    <c-space wrap>
      <c-button loading loadingType="fill" status="primary">主要按钮</c-button>
      <c-button loading loadingType="fill" variant="tonal" status="primary"
        >主要按钮</c-button
      >
      <c-button loading loadingType="fill" variant="outline" status="primary"
        >主要按钮</c-button
      >
      <c-button loading loadingType="fill" variant="text" status="primary"
        >主要按钮</c-button
      >
    </c-space>
    loadingType: line
    <c-space wrap>
      <c-button loading loadingType="line" status="primary">主要按钮</c-button>
      <c-button loading loadingType="line" variant="tonal" status="primary"
        >主要按钮</c-button
      >
      <c-button loading loadingType="line" variant="outline" status="primary"
        >主要按钮</c-button
      >
      <c-button loading loadingType="line" variant="text" status="primary"
        >主要按钮</c-button
      >
    </c-space>
  </c-space>
</template>

<script lang="ts"></script>
