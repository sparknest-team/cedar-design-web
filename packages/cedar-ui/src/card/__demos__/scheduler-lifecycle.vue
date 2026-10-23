<script setup lang="ts">
import { ref } from 'vue'
const active = ref(true)
const mounted = ref(true)
const floating = ref(false)
const ripple = ref(true)
const duration = ref(250)
</script>
<template>
  <div>
    <c-button @click="floating = !floating">Float / 浮起与回落</c-button>
    <c-button @click="active = !active">Activate / 停用与激活</c-button>
    <c-button @click="mounted = !mounted">Mount / 卸载与挂载</c-button>
    <c-button @click="ripple = !ripple">Ripple wait / 涟漪等待</c-button>
    <c-button @click="duration = duration ? 0 : 250">Duration / 零与默认时长</c-button>
    <p>Toggle floating rapidly, suspend during500ms ripple wait or layout settlement, then activate. Old tasks must not reset a newer phase. Underlying doubleRaf frames are not physically canceled.</p>
    <KeepAlive v-if="mounted">
      <c-card v-if="active" v-model:floating="floating" :ripple="ripple" :floating-duration="duration" title="Floating lifecycle / 浮起生命周期">
        Card content / 卡片内容
        <template #floating-content>
          <c-button @click.stop="floating = false">Collapse / 回落</c-button>
          <c-button @click.stop="active = false">Deactivate / 停用</c-button>
          <c-button @click.stop="mounted = false">Unmount / 卸载</c-button>
        </template>
      </c-card>
    </KeepAlive>
  </div>
</template>
