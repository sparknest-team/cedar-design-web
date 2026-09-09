<template>
  <CSelect
    :model-value="modelValue"
    multiple
    clearable
    filterable
    :options="options"
    :filter-option="request ? false : true"
    :loading="loading"
    :disabled="disabled"
    :placeholder="label"
    :aria-label="label"
    @update:model-value="updateValue"
    @search="search"
    @open-change="opened"
    @dropdown-reach-bottom="loadMore"
  >
    <template v-if="request" #footer>
      <CButton
        v-if="failed"
        variant="text"
        :disabled="disabled || loading"
        @click.stop="load(failedCursor)"
        >{{ messages.retryResources }}</CButton
      >
      <CButton
        v-else-if="nextCursor"
        variant="text"
        :disabled="disabled || loading"
        @click.stop="loadMore"
        >{{ messages.moreResources }}</CButton
      >
    </template>
  </CSelect>
</template>
<script setup lang="ts">
import { computed, onScopeDispose, ref, watch } from "vue";
import CSelect from "../../select";
import CButton from "../../button";
import { createNamespace } from "../../_utils/global-config";
import type { SchedulerResource } from "../core";
import type {
  SchedulerRequestResources,
  SchedulerResourceErrorContext,
} from "../props";
import type { SchedulerResourceStore } from "../use-resources";
import type { SchedulerMessages } from "../locale";

defineOptions({ name: createNamespace("scheduler-resource-select").name });
const props = defineProps<{
  modelValue?: string[];
  resources: SchedulerResource[];
  store: SchedulerResourceStore;
  request?: SchedulerRequestResources;
  label: string;
  disabled?: boolean;
  messages: SchedulerMessages;
}>();
const emit = defineEmits<{
  "update:modelValue": [ids: string[]];
  error: [error: unknown, context: SchedulerResourceErrorContext];
}>();
const results = ref<SchedulerResource[]>([]);
const loading = ref(false);
const failed = ref(false);
const nextCursor = ref<string>();
const failedCursor = ref<string>();
let query = "";
let controller: AbortController | undefined;
let sequence = 0;
let disposed = false;
const options = computed(() => {
  const items = new Map(
    (props.request ? results.value : props.resources).map((item) => [
      item.id,
      item,
    ]),
  );
  for (const id of props.modelValue ?? [])
    items.set(id, props.store.get(id) ?? { id, label: id });
  return [...items.values()].map((item) => {
    const resource = props.store.get(item.id) ?? item;
    return {
      value: resource.id,
      label: resource.label,
      disabled: resource.disabled,
    };
  });
});
watch(
  () => [...(props.modelValue ?? [])],
  (ids) => {
    void props.store.resolve(ids);
  },
  { immediate: true },
);
function updateValue(value: unknown) {
  if (!props.disabled)
    emit("update:modelValue", Array.isArray(value) ? value.map(String) : []);
}
function cancel() {
  sequence++;
  controller?.abort();
  loading.value = false;
}
watch(
  () => props.request,
  () => {
    cancel();
    results.value = [];
    nextCursor.value = undefined;
    failed.value = false;
  },
);
watch(
  () => props.disabled,
  (disabled) => {
    if (disabled) cancel();
  },
);
async function load(cursor?: string) {
  if (!props.request || props.disabled || disposed) return;
  cancel();
  const current = sequence;
  controller = new AbortController();
  const signal = controller.signal;
  loading.value = true;
  failed.value = false;
  const searchQuery = query;
  try {
    const page = await props.request({ query: searchQuery, cursor, signal });
    if (disposed || current !== sequence || signal.aborted) return;
    const merged = new Map(
      (cursor === undefined ? [] : results.value).map((item) => [
        item.id,
        item,
      ]),
    );
    for (const item of page.items) merged.set(item.id, { ...item });
    results.value = [...merged.values()];
    props.store.remember(page.items);
    nextCursor.value = page.nextCursor !== cursor ? page.nextCursor : undefined;
  } catch (cause) {
    if (!disposed && current === sequence && !signal.aborted) {
      failed.value = true;
      failedCursor.value = cursor;
      emit("error", cause, { type: "search", query: searchQuery, cursor });
    }
  } finally {
    if (current === sequence) loading.value = false;
  }
}
function search(value: string) {
  query = value;
  results.value = [];
  nextCursor.value = undefined;
  void load();
}
function opened(open: boolean) {
  if (open) {
    void props.store.resolve(props.modelValue ?? [], true);
    if (props.request) search("");
  }
}
function loadMore() {
  if (nextCursor.value && !loading.value) void load(nextCursor.value);
}
onScopeDispose(() => {
  disposed = true;
  cancel();
});
</script>
