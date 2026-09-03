<template>
  <div>
    <h4 style="margin:0 0 8px">Dot</h4>
    <c-carousel indicator-type="dot" :style="{width:'600px',height:'200px',marginBottom:'20px'}">
      <c-carousel-item><img src="/cat.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
      <c-carousel-item><img src="/cat2.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
      <c-carousel-item><img src="/cat3.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
    </c-carousel>
    <h4 style="margin:0 0 8px">Line</h4>
    <c-carousel indicator-type="line" :style="{width:'600px',height:'200px',marginBottom:'20px'}">
      <c-carousel-item><img src="/cat.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
      <c-carousel-item><img src="/cat2.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
      <c-carousel-item><img src="/cat3.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
    </c-carousel>
    <h4 style="margin:0 0 8px">Slider</h4>
    <c-carousel indicator-type="slider" :style="{width:'600px',height:'200px'}">
      <c-carousel-item><img src="/cat.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
      <c-carousel-item><img src="/cat2.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
      <c-carousel-item><img src="/cat3.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
    </c-carousel>
  </div>
</template>
