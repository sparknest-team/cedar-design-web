<template>
  <c-carousel :slides-per-view="2.5" :space-between="10" :style="{width:'600px',height:'200px'}">
    <c-carousel-item v-for="i in 6" :key="i">
      <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#4a90d9;color:#fff;font-size:24px;font-weight:bold">{{ i }}</div>
    </c-carousel-item>
  </c-carousel>
</template>
