<script setup lang="ts">
import { useDemoLocale } from "../../__demos__/locale";
import { ref } from "vue";

const copy = useDemoLocale("defaultValue");
const seed = ref("A: initial text");
const instanceKey = ref(0);
const lastUpdate = ref<string | null>(null);
const updateCount = ref(0);
const controlled = ref("");
function record(value: string) {
  lastUpdate.value = value;
  updateCount.value += 1;
}
function remount() {
  instanceKey.value += 1;
  lastUpdate.value = null;
  updateCount.value = 0;
}
</script>

<template>
  <div>
    <p>
      {{ copy.uncontrolledHint }}
    </p>
    <c-input
      :key="instanceKey"
      :default-value="seed"
      :aria-label="copy.uncontrolledInput"
      @update:model-value="record"
    />
    <p>
      defaultValue = <code>{{ seed }}</code>
    </p>
    <p role="status">
      update:modelValue × {{ updateCount }}; {{ copy.lastUpdate }} =
      <code>{{
        lastUpdate === null ? copy.none : JSON.stringify(lastUpdate)
      }}</code>
    </p>
    <c-space wrap>
      <c-button
        @click="
          seed = seed.startsWith('A:') ? 'B: new default' : 'A: initial text'
        "
        >{{ copy.changeDefault }}</c-button
      >
      <c-button @click="remount">{{ copy.remount }}</c-button>
    </c-space>
    <p>
      {{ copy.uncontrolledSteps }}
    </p>
    <p>
      {{ copy.controlledHint }}
    </p>
    <c-input
      v-model="controlled"
      default-value="This default is ignored"
      :aria-label="copy.controlledInput"
    />
    <p role="status">
      v-model = <code>{{ JSON.stringify(controlled) }}</code>
    </p>
    <c-space wrap>
      <c-button @click="controlled = 'Parent supplied text'">{{
        copy.updateParent
      }}</c-button>
      <c-button @click="controlled = ''">{{ copy.clearParent }}</c-button>
    </c-space>
    <p>
      {{ copy.formHint }}
    </p>
  </div>
</template>
