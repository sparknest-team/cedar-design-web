<template>
  <Teleport :to="popupTarget" :disabled="popupContainer === false">
    <Transition
      name="fade-message"
      appear
      :duration="150"
      @after-enter="emit('opened')"
      @after-leave="emit('closed')"
    >
      <div
        v-if="open"
        role="alert"
        :class="[
          prefixCls,
          `${prefixCls}--variant-${variant}`,
          `${prefixCls}-${status}`,
          {
            [`${prefixCls}-closable`]: closable,
            [`${prefixCls}-standalone`]: popupContainer !== false,
          },
          popupContainer !== false && `${prefixCls}-standalone-${position}`,
        ]"
        @mouseenter="pause"
        @mouseleave="resume"
      >
        <span
          v-if="showIcon && (status !== 'default' || $slots.icon || icon)"
          :class="`${prefixCls}-icon`"
        >
          <slot name="icon">
            <dynamic-content v-if="icon" :value="icon" />
            <icon-info-circle-fill v-else-if="status === 'info'" />
            <icon-check-circle-fill v-else-if="status === 'success'" />
            <icon-exclamation-circle-fill v-else-if="status === 'warning'" />
            <icon-close-circle-fill v-else-if="status === 'danger'" />
            <icon-loading v-else-if="status === 'loading'" />
          </slot>
        </span>
        <span :class="`${prefixCls}-content`"
          ><slot><dynamic-content :value="content" /></slot
        ></span>
        <span v-if="$slots.action || action" :class="`${prefixCls}-action`"
          ><slot name="action"><dynamic-content :value="action" /></slot
        ></span>
        <button
          v-if="closable"
          type="button"
          :aria-label="closeButtonAriaLabel"
          :class="`${prefixCls}-close-btn`"
          @click="requestClose"
        >
          <a-icon-hover :prefix="prefixCls"><icon-close /></a-icon-hover>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, watch, type PropType } from "vue";
import { IconCheckCircleFill } from "@cedarjs/icons-vue/icon-check-circle-fill";
import { IconClose } from "@cedarjs/icons-vue/icon-close";
import { IconCloseCircleFill } from "@cedarjs/icons-vue/icon-close-circle-fill";
import { IconExclamationCircleFill } from "@cedarjs/icons-vue/icon-exclamation-circle-fill";
import { IconInfoCircleFill } from "@cedarjs/icons-vue/icon-info-circle-fill";
import { IconLoading } from "@cedarjs/icons-vue/icon-loading";
import AIconHover from "../_components/IconHover.vue";
import { createNamespace, getPrefixCls } from "../_utils/global-config";
import { usePopupContainer } from "../_utils/popup-container";
import { messageProps } from "./props";
import type { MessageContent } from "./types";
import { useMessageTimer } from "./use-message-timer";

defineOptions({ name: createNamespace("message").name });
const DynamicContent = defineComponent({
  props: {
    value: [
      String,
      Number,
      Object,
      Array,
      Function,
    ] as PropType<MessageContent>,
  },
  setup: (props) => () =>
    typeof props.value === "function" ? props.value() : props.value,
});
const props = defineProps(messageProps);
const emit = defineEmits<{
  (event: "update:open", value: boolean): void;
  (event: "open" | "opened" | "close" | "closed"): void;
}>();
const prefixCls = getPrefixCls("message");
const popupTarget = usePopupContainer(() => props.popupContainer);
const requestClose = () => emit("update:open", false);
const { pause, resume, restart } = useMessageTimer({
  open: () => props.open,
  duration: () => props.duration,
  pauseOnHover: () => props.pauseOnHover,
  resetOnUpdate: () => props.resetOnUpdate,
  close: requestClose,
});
defineExpose({ restartTimer: restart });

onMounted(() => {
  if (props.open) emit("open");
});
watch(
  () => props.open,
  (open, previous) => {
    if (open && !previous) emit("open");
    else if (!open && previous) emit("close");
  },
);
watch(
  () => [props.content, props.icon, props.action, props.status, props.duration],
  restart,
);
</script>
