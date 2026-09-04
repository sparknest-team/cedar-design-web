<template>
  <teleport :to="popupContainerTarget" :disabled="popupContainer === false">
    <transition
      :name="n('--fade')"
      @after-enter="$emit('opened')"
      @after-leave="$emit('closed')"
    >
      <div
        v-if="shouldRender"
        v-show="mergedOpen"
        :class="n()"
        :style="{ zIndex: mergedZIndex }"
        v-bind="$attrs"
      >
        <div
          :class="n('backdrop')"
          role="presentation"
          :style="{ zIndex: mergedZIndex - 1 }"
          @click="handleOverlayClick"
        />
        <div :class="n('content')" :style="{ zIndex: mergedZIndex }">
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import usePopupManager from "../_hooks/use-popup-manager";
import { createNamespace } from "../_utils/global-config";
import { KEYBOARD_KEY } from "../_utils/keyboard";
import { overlayProps } from "./props";

defineOptions({
  name: createNamespace("overlay").name,
  inheritAttrs: false,
});

const props = defineProps(overlayProps);
const emit = defineEmits<{
  (event: "update:open", value: boolean): void;
  (event: "open"): void;
  (event: "opened"): void;
  (event: "close"): void;
  (event: "closed"): void;
  (event: "click", value: MouseEvent): void;
  (event: "key-escape", value: KeyboardEvent): void;
}>();
const { n } = createNamespace("overlay");
const localOpen = ref(props.defaultOpen);
const mergedOpen = computed({
  get: () => props.open ?? localOpen.value,
  set: (value: boolean) => {
    if (props.open === undefined) localOpen.value = value;
    emit("update:open", value);
  },
});
const rendered = ref(mergedOpen.value);
const shouldRender = computed(
  () => mergedOpen.value || (!props.unmountOnClose && rendered.value),
);
const popupContainerTarget = computed(() =>
  props.popupContainer === false ? "body" : props.popupContainer || "body",
);
const {
  zIndex,
  isLastDialog,
  close: closePopup,
} = usePopupManager("dialog", {
  visible: mergedOpen,
});
const mergedZIndex = computed(() => props.zIndex ?? zIndex.value);

let overflowTarget: HTMLElement | undefined;
let originalOverflow = "";

function setOverflowHidden() {
  if (!props.lockScroll || typeof document === "undefined") return;
  const target =
    typeof props.popupContainer === "string"
      ? document.querySelector<HTMLElement>(props.popupContainer)
      : props.popupContainer instanceof HTMLElement
        ? props.popupContainer
        : document.body;
  if (!target || target.style.overflow === "hidden") return;
  overflowTarget = target;
  originalOverflow = target.style.overflow;
  target.style.overflow = "hidden";
}

function resetOverflow() {
  if (!overflowTarget) return;
  overflowTarget.style.overflow = originalOverflow;
  overflowTarget = undefined;
  originalOverflow = "";
}

function handleOverlayClick(event: MouseEvent) {
  emit("click", event);
  if (props.overlayClosable) mergedOpen.value = false;
}

function handleKeydown(event: KeyboardEvent) {
  if (!mergedOpen.value || !isLastDialog() || event.key !== KEYBOARD_KEY.ESC)
    return;
  emit("key-escape", event);
  if (props.escToClose) {
    event.preventDefault();
    mergedOpen.value = false;
  }
}

watch(
  mergedOpen,
  (open) => {
    if (open) {
      rendered.value = true;
      setOverflowHidden();
      emit("open");
    } else {
      resetOverflow();
      emit("close");
    }
  },
  { immediate: mergedOpen.value },
);
onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
  if (mergedOpen.value) nextTick(() => emit("opened"));
});
onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeydown);
  closePopup();
  resetOverflow();
});
</script>
