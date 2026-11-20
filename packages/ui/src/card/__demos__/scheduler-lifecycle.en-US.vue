<script setup lang="ts">

import { ref } from "vue";
const active = ref(true);
const mounted = ref(true);
const floating = ref(false);
const ripple = ref(true);
const duration = ref(250);
</script>
<template>
  <div>
    <c-button @click="floating = !floating">Float</c-button>
    <c-button @click="active = !active">Activate</c-button>
    <c-button @click="mounted = !mounted">Mount</c-button>
    <c-button @click="ripple = !ripple">Ripple wait</c-button>
    <c-button @click="duration = duration ? 0 : 250">Duration</c-button>
    <p>
      Toggle floating rapidly, suspend during500ms ripple wait or layout
      settlement, then activate. Old tasks must not reset a newer phase.
      Underlying doubleRaf frames are not physically canceled.
    </p>
    <KeepAlive v-if="mounted">
      <c-card
        v-if="active"
        v-model:floating="floating"
        :ripple="ripple"
        :floating-duration="duration"
        title="Floating lifecycle"
      >
        Card content
        <template #floating-content>
          <c-button @click.stop="floating = false">Collapse</c-button>
          <c-button @click.stop="active = false">Deactivate</c-button>
          <c-button @click.stop="mounted = false">Unmount</c-button>
        </template>
      </c-card>
    </KeepAlive>
  </div>
</template>
