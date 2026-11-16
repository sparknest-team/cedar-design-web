<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("cardSchedulerLifecycleInline");

import { ref } from "vue";
const active = ref(true);
const mounted = ref(true);
const floating = ref(false);
const ripple = ref(true);
const duration = ref(250);
</script>
<template>
  <div>
    <c-button @click="floating = !floating">{{ inlineCopy.float }}</c-button>
    <c-button @click="active = !active">{{ inlineCopy.activate }}</c-button>
    <c-button @click="mounted = !mounted">{{ inlineCopy.mount }}</c-button>
    <c-button @click="ripple = !ripple">{{ inlineCopy.rippleWait }}</c-button>
    <c-button @click="duration = duration ? 0 : 250">{{
      inlineCopy.duration
    }}</c-button>
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
        :title="inlineCopy.floatingLifecycle"
      >
        {{ inlineCopy.cardContent }}
        <template #floating-content>
          <c-button @click.stop="floating = false">{{
            inlineCopy.collapse
          }}</c-button>
          <c-button @click.stop="active = false">{{
            inlineCopy.deactivate
          }}</c-button>
          <c-button @click.stop="mounted = false">{{
            inlineCopy.unmount
          }}</c-button>
        </template>
      </c-card>
    </KeepAlive>
  </div>
</template>
