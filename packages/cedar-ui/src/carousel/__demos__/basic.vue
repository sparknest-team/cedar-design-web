<template>
  <div>
    <Carousel
      :style="{
        width: '600px',
        height: '240px',
      }"
    >
      <CarouselItem>
        <img
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp"
          :style="{
            width: '100%',
          }"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp"
          :style="{
            width: '100%',
          }"
        />
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { CarouselItem } from '../index'
import Carousel from '../index'

export default {
  components: {
    CarouselItem,
    Carousel,
  },
}
</script>
