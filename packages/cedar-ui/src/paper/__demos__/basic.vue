<template>
  <c-space wrap>
    <c-paper :width="120" :height="80">Surface</c-paper>
    <c-paper bordered :width="120" :height="80">Border</c-paper>
    <c-paper bordered :elevation="2" style="padding: 16px">Border + shadow</c-paper>
    <c-paper :radius="12" :width="120" :height="80" :elevation="2">Radius</c-paper>
    <c-paper round :width="80" :height="80" bordered />
    <c-paper inline bordered>Inline</c-paper>
    <c-paper ripple bordered :width="120" :height="80">Ripple</c-paper>
  </c-space>
</template>
