<template>
  <template v-if="options">
    <div ref="heading" :class="n('virtual-heading')">
      <slot name="heading" />
    </div>
    <VirtualList
      :key="revision"
      ref="list"
      :class="n('virtual-rows')"
      :height="options.height ?? 'var(--c-scheduler-virtual-height)'"
      :estimated-size="estimate"
      :buffer="buffer"
      :data="entries"
      :content-attrs="{ class: n('virtual-content') }"
      @scroll="onScroll"
    >
      <template #item="{ item }">
        <div :key="item.key" :data-scheduler-entry="item.key">
          <slot v-if="item.group" name="group" :group="item.group" />
          <slot v-else name="resource" :resource="item.resource" />
        </div>
      </template>
    </VirtualList>
  </template>
  <template v-else>
    <slot name="heading" />
    <template v-for="group in groups" :key="group.key">
      <slot v-if="grouped" name="group" :group="group" />
      <template v-if="!grouped || expanded.includes(group.key)">
        <template v-for="resource in group.resources" :key="resource.id">
          <slot name="resource" :resource="resource" />
        </template>
      </template>
    </template>
  </template>
</template>
<script setup lang="ts">
import { computed, ref, shallowRef, watch, nextTick, onMounted, onActivated, onDeactivated, onBeforeUnmount } from "vue";
import VirtualList from "../../_components/virtual-list-v2";
import { useDirection, inlineScrollLeft, setInlineScrollLeft } from "../../_utils/direction";
import { createNamespace } from "../../_utils/global-config";
import type { SchedulerResource } from "../core";
import type { SchedulerVirtualListProps } from "../props";
defineOptions({ name: createNamespace("scheduler-timeline-rows").name });
const { n } = createNamespace("scheduler");
type Group = { key: string; label: string; resources: SchedulerResource[] };
const props = defineProps<{
  groups: Group[];
  grouped: boolean;
  expanded: string[];
  options?: SchedulerVirtualListProps;
  layoutVersion: string;
}>();
defineSlots<{
  heading(): unknown;
  group(props: { group: Group }): unknown;
  resource(props: { resource: SchedulerResource }): unknown;
}>();
const heading = ref<HTMLElement>();
const list = ref<InstanceType<typeof VirtualList>>();
const revision = ref(0);
const { dir } = useDirection(() => heading.value);
watch(dir, async () => {
  await nextTick();
  const viewport = list.value?.$el as HTMLElement | undefined;
  if (available() && viewport && heading.value)
    setInlineScrollLeft(heading.value, inlineScrollLeft(viewport));
});
const estimate = computed(() =>
  Number.isFinite(props.options?.estimatedSize) &&
  props.options!.estimatedSize! > 0
    ? props.options!.estimatedSize!
    : 80,
);
const buffer = computed(() =>
  Number.isInteger(props.options?.buffer) && props.options!.buffer! > 0
    ? props.options!.buffer!
    : 10,
);
const entries = computed(() =>
  props.groups.flatMap((group) => [
    ...(props.grouped
      ? [{ key: `group:${group.key}`, group, resource: undefined }]
      : []),
    ...(!props.grouped || props.expanded.includes(group.key)
      ? group.resources.map((resource) => ({
          key: `resource:${resource.id}`,
          group: undefined,
          resource,
        }))
      : []),
  ]),
);
// Rebuild the shared list's size cache, then restore the visible row rather than jumping to top.
let restoreVersion = 0;
let mounted = false, active = false, disposed = false;
let dirty = false, restoring = false, scrollVersion = 0;
const onScroll = shallowRef<(event: Event) => void>(() => {});
function available() { return mounted && active && !disposed; }
async function restore(previousEntries: typeof entries.value = []) {
    const version = ++restoreVersion;
    if (!available()) { dirty = true; return; }
    dirty = false;
    restoring = true;
    const currentEntries = entries.value;
    const options = props.options;
    const layout = props.layoutVersion;
    const current = () => available() && version === restoreVersion && entries.value === currentEntries && props.options === options && props.layoutVersion === layout;
    if (!options) { restoring = false; return; }
    const previousList = list.value;
    const element = previousList?.$el as HTMLElement | undefined;
    if (!current()) return;
    const left = element ? inlineScrollLeft(element) : 0;
    if (!current()) return;
    const bounds = element?.getBoundingClientRect();
    if (!current()) return;
    let visible: HTMLElement | undefined;
    if (element) {
      for (const row of element.querySelectorAll<HTMLElement>("[data-scheduler-entry]")) {
        if (!current()) return;
        const rect = row.getBoundingClientRect();
        if (!current()) return;
        if (rect.bottom > (bounds?.top ?? 0)) { visible = row; break; }
      }
    }
    const fallback = element?.querySelector<HTMLElement>(
      "[data-scheduler-entry]",
    );
    if (!current()) return;
    const anchor = visible ?? fallback;
    const key = anchor?.dataset.schedulerEntry;
    const offset =
      anchor && bounds ? anchor.getBoundingClientRect().top - bounds.top : 0;
    if (!current()) return;
    const oldIndex = previousEntries.findIndex((item) => item.key === key);
    const target =
      entries.value.find((item) => item.key === key)?.key ??
      entries.value[Math.max(0, Math.min(oldIndex, entries.value.length - 1))]
        ?.key;
    revision.value++;
    await nextTick();
    if (!current() || !list.value) return;
    const restoredList = list.value;
    if (target) restoredList.scrollTo({ key: target });
    if (!current() || list.value !== restoredList) return;
    await nextTick();
    if (!current() || list.value !== restoredList) return;
    const viewport = restoredList.$el as HTMLElement;
    const ownsViewport = () => current() && list.value === restoredList && restoredList.$el === viewport;
    if (!ownsViewport()) return;
    const row = Array.from(
      viewport.querySelectorAll<HTMLElement>("[data-scheduler-entry]"),
    ).find((item) => item.dataset.schedulerEntry === target);
    if (!ownsViewport()) return;
    if (row) {
      const top = row.getBoundingClientRect().top;
      if (!ownsViewport()) return;
      const viewportTop = viewport.getBoundingClientRect().top;
      if (!ownsViewport()) return;
      viewport.scrollTop += top - viewportTop - offset;
    }
    if (!ownsViewport()) return;
    setInlineScrollLeft(viewport, left);
    if (ownsViewport()) viewport.dispatchEvent(new Event("scroll"));
    if (current()) restoring = false;
}
watch(
  [entries, () => props.layoutVersion, () => props.options],
  (_, previous) => restore(previous?.[0] ?? []),
  { deep: true },
);
function resume() {
  if (!mounted || active || disposed) return;
  active = true;
  const identity = ++scrollVersion;
  onScroll.value = (event) => {
    const viewport = list.value?.$el as HTMLElement | undefined;
    const target = heading.value;
    if (!available() || identity !== scrollVersion || !viewport || !target || event.target !== viewport) return;
    const left = inlineScrollLeft(viewport);
    if (available() && identity === scrollVersion && heading.value === target) setInlineScrollLeft(target, left);
  };
  if (dirty) {
    const version = ++restoreVersion;
    nextTick(() => { if (available() && version === restoreVersion) restore(entries.value); });
  }
}
function suspend() {
  active = false;
  dirty = dirty || restoring;
  restoring = false;
  restoreVersion++;
  scrollVersion++;
  onScroll.value = () => {};
}
onMounted(() => { mounted = true; resume(); });
onActivated(resume);
onDeactivated(suspend);
onBeforeUnmount(() => { disposed = true; suspend(); mounted = false; });
</script>
