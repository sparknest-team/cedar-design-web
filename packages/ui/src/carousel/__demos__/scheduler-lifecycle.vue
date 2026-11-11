<script setup lang="ts">
import { ref } from 'vue'
const active = ref(true)
const mounted = ref(true)
const current = ref(1)
const playing = ref(false)
const moves = ref(0)
</script>
<template>
  <div>
    <c-button @click="playing = !playing">Autoplay / 自动播放</c-button>
    <c-button @click="active = !active">Activate / 停用与激活</c-button>
    <c-button @click="mounted = !mounted">Mount / 卸载与挂载</c-button>
    <p>Current / 当前: {{ current }}; changes / 通知: {{ moves }}. Suspend during autoplay or loop settlement, then activate. Old work must not replay.</p>
    <KeepAlive v-if="mounted">
      <c-carousel v-if="active" v-model="current" :auto-play="playing ? { interval: 1000 } : false" :move-speed="600" :height="180" keyboard mousewheel @change="moves++">
        <c-carousel-item v-for="item in 3" :key="item">Slide / 幻灯片 {{ item }}</c-carousel-item>
      </c-carousel>
    </KeepAlive>
  </div>
</template>
