<template>
  <c-carousel :style="{width:'600px',height:'240px'}">
    <c-carousel-item><img src="/cat.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
    <c-carousel-item><img src="/cat2.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
    <c-carousel-item><img src="/cat3.jpg" style="width:100%;height:100%;object-fit:cover;pointer-events:none"></c-carousel-item>
    <template #indicator="{index,length,to}">
      <div style="position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:4px">
        <div v-for="i in length" :key="i" :style="{width:'20px',height:'20px',display:'flex',alignItems:'center',justifyContent:'center',background:i-1===index?'#4a90d9':'rgba(0,0,0,0.3)',color:'#fff',fontSize:'12px',borderRadius:'50%',cursor:'pointer'}" @click="to(i-1)">{{ i }}</div>
      </div>
    </template>
  </c-carousel>
</template>
