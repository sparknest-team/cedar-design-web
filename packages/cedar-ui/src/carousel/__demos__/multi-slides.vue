<script setup>
import { ref } from "vue";
const current = ref(0);
const proposal = ref(0);
const changes = ref(0);
const accept = ref(true);
const loop = ref(true);
function update(value) {
  proposal.value = value;
  if (accept.value) current.value = value;
}
</script>

<template>
  <section class="multi-slides-demo">
    <c-checkbox v-model="accept"> Accept changes / 接受切换</c-checkbox>
    <c-checkbox v-model="loop"> Loop / 循环</c-checkbox>
    <p role="status">
      Current: {{ current }} · Proposal: {{ proposal }} · Changes: {{ changes }}
    </p>
    <c-carousel
      :slides-per-view="2.5"
      :space-between="10"
      :style="{ width: '600px', height: '200px' }"
      :current="current"
      :loop="loop"
      draggable
      keyboard
      @update:current="update"
      @change="changes++"
    >
      <c-carousel-item v-for="i in 6" :key="i">
        <div
          style="
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #4a90d9;
            color: #fff;
            font-size: 24px;
            font-weight: bold;
          "
        >
          {{ i }}
        </div>
      </c-carousel-item>
    </c-carousel>
  </section>
</template>
