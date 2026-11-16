<script setup lang="ts">
import { useDemoLocale } from "../../__demos__/locale";
import { computed, reactive, ref } from "vue";

const copy = useDemoLocale("selectionDataFlow");
const autoFirst = ref(true);
const generation = ref(0);
const form = reactive<{ city?: string; panelCity?: string }>({
  city: undefined,
  panelCity: undefined,
});
const logs = reactive<{ inline: string[]; panel: string[] }>({
  inline: [],
  panel: [],
});
const counts = reactive({ inline: 0, panel: 0 });
const options = computed(() => [
  { label: copy.value.hangzhou, value: "hangzhou" },
  { label: copy.value.shanghai, value: "shanghai" },
  {
    label: copy.value.beijing,
    value: "beijing",
    disabled: true,
  },
]);
function show(value: unknown) {
  return value === undefined ? "undefined" : JSON.stringify(value);
}
function record(kind: "inline" | "panel", event: string, value: unknown) {
  if (event === "update:modelValue") {
    counts[kind]++;
  }
  logs[kind].unshift(`${event}(${show(value)})`);
  logs[kind].splice(8);
}
function reset() {
  generation.value++;
  form.city = undefined;
  form.panelCity = undefined;
  counts.inline = counts.panel = 0;
  logs.inline = [];
  logs.panel = [];
}
</script>

<template>
  <div class="selection-data-flow">
    <c-checkbox v-model="autoFirst" @change="reset"
      >defaultActiveFirstOption = {{ autoFirst }}</c-checkbox
    >
    <c-button @click="reset">{{ copy.reset }}</c-button>
    <p>
      {{ copy.hint }}
    </p>

    <section>
      <h4>inline · {{ copy.inlineTitle }}</h4>
      <c-form-item layout="vertical" hide-label>
        <c-select
          :key="`inline-${generation}`"
          v-model="form.city"
          edit-mode="direct"
          :options="options"
          :default-active-first-option="autoFirst"
          :placeholder="copy.cityPlaceholder"
          @update:model-value="record('inline', 'update:modelValue', $event)"
          @change="record('inline', 'change', $event)"
          @open-change="record('inline', 'open-change', $event)"
        >
          <template #footer>
            <p class="panel-value">
              form.city = {{ show(form.city) }} · update:modelValue ×
              {{ counts.inline }}
            </p>
          </template>
        </c-select>
      </c-form-item>
      <p>
        {{ copy.inlineHint }}
      </p>
      <p role="status">
        form.city = <code>{{ show(form.city) }}</code> · update:modelValue ×
        {{ counts.inline }}
      </p>
      <ol v-if="logs.inline.length" aria-live="polite">
        <li v-for="(entry, index) in logs.inline" :key="index">
          <code>{{ entry }}</code>
        </li>
      </ol>
      <p v-else>
        {{ copy.noEvents }}
      </p>
    </section>

    <section>
      <h4>click · {{ copy.panelTitle }}</h4>
      <c-form-item layout="vertical" hide-label>
        <c-select
          :key="`panel-${generation}`"
          v-model="form.panelCity"
          edit-mode="click"
          need-confirm
          :options="options"
          :default-active-first-option="autoFirst"
          :placeholder="copy.panelPlaceholder"
          @update:model-value="record('panel', 'update:modelValue', $event)"
          @change="record('panel', 'change', $event)"
          @open-change="record('panel', 'open-change', $event)"
        >
          <template #footer>
            <p class="panel-value">
              {{ copy.committedValue }}：{{ show(form.panelCity) }} ·
              update:modelValue × {{ counts.panel }}
            </p>
          </template>
        </c-select>
      </c-form-item>
      <p>
        {{ copy.panelHint }}
      </p>
      <p role="status">
        form.panelCity = <code>{{ show(form.panelCity) }}</code> ·
        update:modelValue × {{ counts.panel }}
      </p>
      <ol v-if="logs.panel.length" aria-live="polite">
        <li v-for="(entry, index) in logs.panel" :key="index">
          <code>{{ entry }}</code>
        </li>
      </ol>
      <p v-else>
        {{ copy.noEvents }}
      </p>
    </section>
    <p>
      {{ copy.logsHint }}
    </p>
  </div>
</template>

<style scoped>
.selection-data-flow {
  display: grid;
  gap: 12px;
  min-width: 0;
}
.selection-data-flow section {
  display: grid;
  gap: 8px;
  min-width: 0;
}
.selection-data-flow p,
.selection-data-flow h4 {
  margin: 0;
}
.selection-data-flow code {
  overflow-wrap: anywhere;
}
.panel-value {
  padding: 8px;
}
</style>
