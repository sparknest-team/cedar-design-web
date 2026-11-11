<template>
  <li
    role="alert"
    :class="[
      prefixCls,
      `${prefixCls}-${type}`,
      { [`${prefixCls}-closable`]: closable },
    ]"
  >
    <div v-if="showIcon" :class="`${prefixCls}-left`">
      <div :class="`${prefixCls}-icon`">
        <slot name="icon">
          <icon-info-circle-fill v-if="type === 'info'" />
          <icon-check-circle-fill v-else-if="type === 'success'" />
          <icon-exclamation-circle-fill v-else-if="type === 'warning'" />
          <icon-close-circle-fill v-else-if="type === 'error'" />
        </slot>
      </div>
    </div>
    <div :class="`${prefixCls}-right`">
      <div v-if="$slots.default" :class="`${prefixCls}-title`">
        <slot />
      </div>
      <div v-if="$slots.content" :class="`${prefixCls}-content`">
        <slot name="content" />
      </div>
      <div v-if="$slots.footer" :class="`${prefixCls}-footer`">
        <slot name="footer" />
      </div>
    </div>
    <button
      v-if="closable"
      type="button"
      :aria-label="closeButtonAriaLabel"
      :class="`${prefixCls}-close-btn`"
      @click="handleClose"
    >
      <slot name="closeIconElement">
        <a-icon-hover>
          <slot name="closeIcon">
            <icon-close />
          </slot>
        </a-icon-hover>
      </slot>
    </button>
  </li>
</template>

<script setup lang="ts">
import {
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  onUpdated,
} from "vue";
import { createNamespace, getPrefixCls } from "../_utils/global-config";
import AIconHover from "../_components/IconHover.vue";
import { IconClose } from "@cedar-design/icons-vue/icon-close";
import { IconInfoCircleFill } from "@cedar-design/icons-vue/icon-info-circle-fill";
import { IconCheckCircleFill } from "@cedar-design/icons-vue/icon-check-circle-fill";
import { IconExclamationCircleFill } from "@cedar-design/icons-vue/icon-exclamation-circle-fill";
import { IconCloseCircleFill } from "@cedar-design/icons-vue/icon-close-circle-fill";
import { notificationProps } from "./props";

defineOptions({
  name: createNamespace("notification").name,
});
const props = defineProps(notificationProps);
const emit = defineEmits(["close"]);
const prefixCls = getPrefixCls("notification");
let timer: number | undefined;
let generation = 0;
let active = false;
let closed = false;

const clearTimer = () => {
  generation += 1;
  if (timer !== undefined) {
    window.clearTimeout(timer);
    timer = undefined;
  }
};
const handleClose = () => {
  if (!active || closed) {
    return;
  }
  closed = true;
  clearTimer();
  emit("close");
};
const startTimer = () => {
  clearTimer();
  if (
    !active ||
    closed ||
    !Number.isFinite(props.duration) ||
    props.duration <= 0
  ) {
    return;
  }
  const version = generation;
  timer = window.setTimeout(() => {
    if (version === generation && active && !closed) {
      timer = undefined;
      handleClose();
    }
  }, props.duration);
};
const activate = () => {
  if (active) {
    return;
  }
  active = true;
  startTimer();
};
const deactivate = () => {
  active = false;
  clearTimer();
};
onMounted(activate);
onActivated(activate);
onDeactivated(deactivate);
onBeforeUnmount(deactivate);
onUpdated(() => {
  if (props.resetOnUpdate && active && !closed) {
    startTimer();
  }
});
</script>
