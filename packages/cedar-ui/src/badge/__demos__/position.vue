<template>
  <c-config-provider :rtl="rtl">
    <c-space>
      <c-button @click="toggleRtl">Toggle RTL</c-button>
      <c-button @click="toggleDot">Toggle Dot</c-button>
      <c-button @click="plusOffset">Plus Offset</c-button>
      <c-button @click="minusOffset">Minus Offset</c-button>
      <c-button @click="resetOffset">Reset Offset</c-button>
    </c-space>
    <c-divider />
    <c-space direction="column" size="lg">
      <c-badge :content="100" position="top-right" :dot="dot" :offset-x="offsetX" :offset-y="offsetY">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
      <c-badge :content="100" position="top-left" :dot="dot" :offset-x="offsetX" :offset-y="offsetY">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
      <c-badge :content="100" position="bottom-right" :dot="dot" :offset-x="offsetX" :offset-y="offsetY">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
      <c-badge :content="100" position="bottom-left" :dot="dot" :offset-x="offsetX" :offset-y="offsetY">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
      <c-badge :content="100" type="inline" inline-position="start" :dot="dot" :offset-y="offsetY">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
      <c-badge :content="100" type="inline" inline-position="end" :dot="dot" :offset-y="offsetY">
        <c-avatar shape="square">
          <span>
            <c-icon-user />
          </span>
        </c-avatar>
      </c-badge>
    </c-space>
  </c-config-provider>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const rtl = ref(false)
const toggleRtl = () => {
  rtl.value = !rtl.value
}
const dot = ref(false)
const toggleDot = () => {
  dot.value = !dot.value
}
const offsetX = ref(0)
const offsetY = ref(0)
const plusOffset = () => {
  offsetX.value += 1
  offsetY.value += 1
}
const minusOffset = () => {
  offsetX.value -= 1
  offsetY.value -= 1
}
const resetOffset = () => {
  offsetX.value = 0
  offsetY.value = 0
}
</script>
