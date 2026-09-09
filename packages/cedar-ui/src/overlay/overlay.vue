<template>
  <teleport :to="popupContainerTarget" :disabled="popupContainer === false">
    <transition
      :name="n('--fade')"
      @after-enter="transition.opened"
      @after-leave="transition.closed"
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
import { usePopupTransition } from '../_utils/popup-transition'
import { useEventListener } from '@cedarjs/use'
import { usePopupContainer } from '../_utils/popup-container'
import {
  computed,
  onBeforeUnmount,
  ref,
} from "vue";
import { useScrollLock } from '../_utils/scroll-lock'
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
  (event: "open" | "opened" | "close" | "closed"): void;
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
const transition = usePopupTransition(() => mergedOpen.value, () => props.unmountOnClose, event => emit(event));
const { shouldRender } = transition;
const popupContainerTarget = usePopupContainer(() => props.popupContainer);
const {
  zIndex,
  isLastDialog,
  close: closePopup,
} = usePopupManager("dialog", {
  visible: mergedOpen,
  zIndex: computed(() => props.zIndex),
});
const mergedZIndex = computed(() => props.zIndex ?? zIndex.value);

useScrollLock(() => {
  const target = popupContainerTarget.value;
  return typeof target === 'string' ? (typeof document === 'undefined' ? undefined : document.body) : target;
}, () => (mergedOpen.value || transition.leaving.value) && props.lockScroll, { reserveScrollBar: true });

function handleOverlayClick(event: MouseEvent) {
  if (!isLastDialog(event)) return;
  emit("click", event);
  if (props.overlayClosable) mergedOpen.value = false;
}

function handleKeydown(event: KeyboardEvent) {
  if (!mergedOpen.value || !isLastDialog(event) || event.key !== KEYBOARD_KEY.ESC)
    return;
  emit("key-escape", event);
  if (props.escToClose) {
    event.preventDefault();
    mergedOpen.value = false;
  }
}

useEventListener(() => document, 'keydown', handleKeydown);
onBeforeUnmount(closePopup);
</script>
