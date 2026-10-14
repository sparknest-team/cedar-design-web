<script setup lang="ts">
import { ref } from "vue";
const active = ref(true);
const open = ref(false);
const value = ref("Item 101");
const options = Array.from(
  { length: 200 },
  (_, index) => "Item " + (index + 1),
);
</script>
<template>
  <div>
    <c-button @click="open = !open">Open / close</c-button>
    <c-button @click="active = !active">Activate / deactivate</c-button>
    <p>
      Open the menu, navigate with Arrow keys, then close or deactivate. Old
      scrolling must not replay.
    </p>
    <KeepAlive>
      <c-select
        v-if="active"
        v-model="value"
        v-model:open="open"
        :options="options"
        style="width: 240px"
      />
    </KeepAlive>
  </div>
</template>
