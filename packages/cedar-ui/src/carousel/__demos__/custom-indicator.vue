<template>
  <c-carousel :style="{ width: '600px', height: '240px' }">
    <c-carousel-item
      ><img
        src="/cat.jpg"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        "
    /></c-carousel-item>
    <c-carousel-item
      ><img
        src="/cat2.jpg"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        "
    /></c-carousel-item>
    <c-carousel-item
      ><img
        src="/cat3.jpg"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        "
    /></c-carousel-item>
    <template #indicator="{ slideNumber, length, to }">
      <div
        style="
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 4px;
        "
      >
        <c-button
          v-for="i in length"
          :key="i"
          size="xs"
          round
          :variant="i === slideNumber ? 'default' : 'tonal'"
          :status="i === slideNumber ? 'primary' : 'default'"
          :aria-label="`跳转至第 ${i} 页`"
          @click="to(i)"
          >{{ i }}</c-button
        >
      </div>
    </template>
  </c-carousel>
</template>
