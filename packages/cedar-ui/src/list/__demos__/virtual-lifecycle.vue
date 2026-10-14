<script setup lang="ts">
import { ref } from "vue";

const active = ref(true);
const mounted = ref(true);
const rows = Array.from({ length: 100 }, (_, key) => ({ key }));
let retained:
  | { scrollIntoView: (options: { key: number; align: "top" }) => void }
  | undefined;
const capture = (instance: typeof retained) => {
  if (instance) retained = instance;
};
const jump = () => retained?.scrollIntoView({ key: 50, align: "top" });
</script>

<template>
  <div>
    <c-button @click="active = !active">Activate / deactivate</c-button>
    <c-button @click="mounted = !mounted">Mount / dispose cache</c-button>
    <c-button @click="jump">Retained command: row 51</c-button>
    <p>Inactive/disposed commands do nothing. Activation never replays them.</p>
    <KeepAlive v-if="mounted">
      <c-list
        v-if="active"
        :ref="capture"
        :data="rows"
        :virtual-list-props="{
          height: 100,
          fixedSize: true,
          estimatedSize: 20,
          buffer: 2,
          itemKey: 'key',
        }"
      >
        <template #item="{ item }"
          ><div style="height: 20px">{{ item.key + 1 }}</div></template
        >
      </c-list>
    </KeepAlive>
  </div>
</template>
