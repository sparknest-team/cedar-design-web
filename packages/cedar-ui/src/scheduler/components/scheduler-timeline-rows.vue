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
import { computed, ref, watch, nextTick } from "vue";
import VirtualList from "../../_components/virtual-list-v2";
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
watch(
  [entries, () => props.layoutVersion, () => props.options],
  async (_, previous) => {
    const version = ++restoreVersion;
    const element = list.value?.$el as HTMLElement | undefined;
    const left = element?.scrollLeft ?? 0;
    const bounds = element?.getBoundingClientRect();
    const visible =
      element &&
      Array.from(
        element.querySelectorAll<HTMLElement>("[data-scheduler-entry]"),
      ).find((row) => row.getBoundingClientRect().bottom > (bounds?.top ?? 0));
    const fallback = element?.querySelector<HTMLElement>(
      "[data-scheduler-entry]",
    );
    const anchor = visible ?? fallback;
    const key = anchor?.dataset.schedulerEntry;
    const offset =
      anchor && bounds ? anchor.getBoundingClientRect().top - bounds.top : 0;
    const previousEntries = previous?.[0] ?? [];
    const oldIndex = previousEntries.findIndex((item) => item.key === key);
    const target =
      entries.value.find((item) => item.key === key)?.key ??
      entries.value[Math.max(0, Math.min(oldIndex, entries.value.length - 1))]
        ?.key;
    revision.value++;
    await nextTick();
    if (version !== restoreVersion || !list.value) return;
    if (target) list.value.scrollTo({ key: target });
    await nextTick();
    if (version !== restoreVersion || !list.value) return;
    const viewport = list.value.$el as HTMLElement;
    const row = Array.from(
      viewport.querySelectorAll<HTMLElement>("[data-scheduler-entry]"),
    ).find((item) => item.dataset.schedulerEntry === target);
    if (row)
      viewport.scrollTop +=
        row.getBoundingClientRect().top -
        viewport.getBoundingClientRect().top -
        offset;
    viewport.scrollLeft = left;
    viewport.dispatchEvent(new Event("scroll"));
  },
  { deep: true },
);
function onScroll(event: Event) {
  if (heading.value)
    heading.value.scrollLeft = (event.target as HTMLElement).scrollLeft;
}
</script>
