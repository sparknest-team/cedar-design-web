<template>
  <div>
    <h4 style="margin:0 0 8px">Top</h4>
    <c-carousel indicator-position="top" :style="{width:'600px',height:'200px',marginBottom:'30px'}">
      <c-carousel-item><img src="/cat.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
      <c-carousel-item><img src="/cat2.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
      <c-carousel-item><img src="/cat3.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
    </c-carousel>
    <h4 style="margin:0 0 8px">Outer</h4>
    <c-carousel indicator-position="outer" :style="{width:'600px',height:'200px'}">
      <c-carousel-item><img src="/cat.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
      <c-carousel-item><img src="/cat2.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
      <c-carousel-item><img src="/cat3.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
    </c-carousel>
  </div>
</template>
