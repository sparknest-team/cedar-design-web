<template>
  <div :class="n()">
    <div
      v-if="$slots.default"
      :class="classes(n('content'), [loading, n('content--active')])"
    >
      <slot />
      <div v-if="loading" :class="n('content-overlay')" />
    </div>

    <div
      v-if="isShow"
      :class="classes(n('body'), [$slots.default, n('inside')])"
    >
      <template v-if="!hideIcon">
        <div v-if="dot" :class="n('indicator')">
          <DotLoading
            :size="typeof size === 'number' ? size : undefined"
            :color="color"
          />
        </div>
        <div
          v-else-if="$slots.icon || $slots.element || customLoading"
          :class="n('indicator')"
          :style="indicatorStyle"
        >
          <slot v-if="$slots.element" name="element" />
          <slot v-else-if="$slots.icon" name="icon" />
          <component :is="customLoading" v-else />
        </div>
        <div v-else-if="type === 'circle'" :class="n('circle')">
          <span
            :class="classes(n('circle-block'), sizeClass('circle-block'))"
            :style="circleStyle"
          >
            <svg viewBox="25 25 50 50" aria-hidden="true">
              <circle cx="50" cy="50" r="20" fill="none" />
            </svg>
          </span>
        </div>
        <template
          v-for="(count, animationType) in loadingTypeDict"
          :key="animationType"
        >
          <div
            v-if="type === animationType"
            :class="classes(n(animationType), sizeClass(animationType))"
            :style="sizeStyle"
          >
            <span
              v-for="index in count"
              :key="index"
              :class="
                classes(
                  n(`${animationType}-item`),
                  sizeClass(`${animationType}-item`),
                )
              "
              :style="{ backgroundColor: color }"
            />
          </div>
        </template>
      </template>

      <div
        v-if="$slots.tip || tip"
        :class="classes(n('tip'), sizeClass('tip'))"
        :style="{ color }"
      >
        <slot name="tip">{{ tip }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, useSlots } from "vue";
import { configProviderInjectionKey } from "../config-provider/context";
import { createNamespace } from "../_utils/global-config";
import { multiplySizeUnit, toSizeUnit } from "../_utils/maple/elements";
import { loadingProps } from "./props";
import DotLoading from "./DotLoading.vue";

defineOptions({
  name: createNamespace("loading").name,
});

const props = defineProps(loadingProps);
const slots = useSlots();

const { n, classes } = createNamespace("loading");
const configCtx = inject(configProviderInjectionKey, undefined);
const isShow = computed(() => !slots.default || props.loading);
const customLoading = computed(() => configCtx?.slots.loading?.()[0]);
const loadingTypeDict = { wave: 5, cube: 4, rect: 8, disappear: 3 } as const;
const indicatorStyle = computed(() => ({
  color: props.color,
  fontSize: typeof props.size === "number" ? `${props.size}px` : undefined,
}));
const circleStyle = computed(() => ({
  width:
    props.radius == null && typeof props.size === "number"
      ? toSizeUnit(props.size)
      : multiplySizeUnit(props.radius, 2),
  height:
    props.radius == null && typeof props.size === "number"
      ? toSizeUnit(props.size)
      : multiplySizeUnit(props.radius, 2),
  color: props.color,
}));
const sizeStyle = computed(() => {
  if (typeof props.size !== "number") return undefined;
  const value = toSizeUnit(props.size);
  return { width: value, height: value };
});
const sizeClass = (element: string) =>
  n(`${element}--${typeof props.size === "number" ? "numeric" : props.size}`);
</script>
