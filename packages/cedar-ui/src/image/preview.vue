<template>
  <teleport :to="container" :disabled="popupContainer === false">
    <div v-show="mergedOpen" :class="prefixCls" :style="wrapperStyles">
      <div :class="`${prefixCls}-mask`" @click="maskClosable && close()" />
      <div
        ref="refWrapper"
        :class="`${prefixCls}-wrapper`"
        data-image-preview-stage
        @click.self="maskClosable && close()"
        @wheel="onWheel"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointercancel="onPointerUp"
        @dblclick="onDoubleClick"
      >
        <div
          :class="`${prefixCls}-img-container`"
          @click.self="maskClosable && close()"
        >
          <slot
            name="image"
            v-bind="{
              src,
              scale,
              rotate,
              translateX,
              translateY,
              moving,
              previewedImgProps,
            }"
          >
            <div :class="`${prefixCls}-img-frame`">
              <img
                v-bind="previewedImgProps"
                data-image-preview-image
                ref="refImage"
                :src="src"
                :alt="previewedImgProps?.alt || src"
                :draggable="false"
                :class="[
                  previewedImgProps?.class,
                  `${prefixCls}-img`,
                  { [`${prefixCls}-img-moving`]: moving },
                ]"
                :style="[
                  previewedImgProps?.style,
                  {
                    transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                  },
                ]"
                @load="setLoadStatus('loaded')"
                @error="setLoadStatus('error')"
                @dragstart.prevent
                @contextmenu="imagePreventDefault && $event.preventDefault()"
              />
            </div>
          </slot>
        </div>
        <div v-if="isLoading" :class="`${prefixCls}-loading`">
          <IconLoading />
        </div>
        <PreviewToolbar
          v-if="showToolbar && mergedActions.length"
          data-image-preview-toolbar
          :actions="actions"
          :actions-layout="mergedActions"
        >
          <slot name="actions" />
        </PreviewToolbar>
        <div
          v-if="closable"
          :class="`${prefixCls}-close-btn`"
          data-image-preview-interactive
          @click="close"
        >
          <slot name="close-icon"><IconClose /></slot>
        </div>
        <slot name="overlay" />
        <slot name="extra" />
      </div>
    </div>
  </teleport>
</template>

<script lang="tsx">
import {
  computed,
  defineComponent,
  h,
  nextTick,
  ref,
  toRefs,
  watch,
  type CSSProperties,
} from "vue";
import { IconClose } from "@cedarjs/icons-vue/icon-close";
import { IconFullscreen } from "@cedarjs/icons-vue/icon-fullscreen";
import { IconLoading } from "@cedarjs/icons-vue/icon-loading";
import { IconOriginalSize } from "@cedarjs/icons-vue/icon-original-size";
import { IconRotateLeft } from "@cedarjs/icons-vue/icon-rotate-left";
import { IconRotateRight } from "@cedarjs/icons-vue/icon-rotate-right";
import { IconZoomIn } from "@cedarjs/icons-vue/icon-zoom-in";
import { IconZoomOut } from "@cedarjs/icons-vue/icon-zoom-out";
import usePopupManager from "../_hooks/use-popup-manager";
import usePopupContainer from "../_hooks/use-popup-container";
import usePopupOverHidden from "../_hooks/use-popup-overflow-hidden";
import { isServerRendering } from "../_utils/dom";
import { createNamespace, getPrefixCls } from "../_utils/global-config";
import type { ImagePreviewActionName } from "./api";
import { usePreviewController } from "./composables/usePreviewController";
import useImageLoadStatus from "./hooks/use-image-load-status";
import { imagePreviewProps } from "./previewProps";
import PreviewToolbar, { type ActionType } from "./preview-toolbar.vue";

export default defineComponent({
  name: createNamespace("image-preview").name,
  components: { IconClose, IconLoading, PreviewToolbar },
  props: imagePreviewProps,
  emits: [
    "update:open",
    "openChange",
    "open",
    "opened",
    "close",
    "closed",
    "keyEscape",
    "longPress",
    "prev",
    "next",
  ],
  setup(props, { emit }) {
    const refs = toRefs(props);
    const controller = usePreviewController({
      open: refs.open,
      defaultOpen: props.defaultOpen,
      src: refs.src,
      interaction: refs.interaction,
      defaultScale: refs.defaultScale,
      minScale: refs.minScale,
      maxScale: refs.maxScale,
      scaleStep: refs.scaleStep,
      wheelZoom: refs.wheelZoom,
      keyboard: refs.keyboard,
      draggable: refs.draggable,
      keepDragOffset: refs.keepDragOffset,
      closeOnImageTap: refs.closeOnImageTap,
      onOpenChange: (open) => {
        emit("update:open", open);
        emit("openChange", open);
        props.onOpenChange?.(open);
      },
      onKeyEscape: () => emit("keyEscape"),
      onLongPress: () => emit("longPress"),
      onPrev: () => emit("prev"),
      onNext: () => emit("next"),
    });
    const prefixCls = getPrefixCls("image-preview");
    const refWrapper = ref<HTMLElement>();
    const refImage = ref<HTMLImageElement>();
    const defaultContainer = isServerRendering ? undefined : document.body;
    const popupTarget = computed(() =>
      props.popupContainer === false ? undefined : props.popupContainer,
    );
    const container = usePopupContainer(defaultContainer, {
      popupContainer: popupTarget,
    } as any);
    const { zIndex } = usePopupManager("dialog", {
      visible: controller.mergedOpen,
    });
    const wrapperStyles = computed<CSSProperties>(() => ({
      zIndex: zIndex.value,
      position: container.value === document.body ? "fixed" : "absolute",
    }));
    usePopupOverHidden({ container, hidden: controller.mergedOpen } as any);
    const { isLoading, setLoadStatus } = useImageLoadStatus();

    const desktopActions: ImagePreviewActionName[] = [
      "fullScreen",
      "rotateRight",
      "rotateLeft",
      "zoomIn",
      "zoomOut",
      "originalSize",
      "download",
    ];
    const mergedActions = computed(
      () =>
        props.actionsLayout ??
        (controller.isDesktop.value ? desktopActions : []),
    );
    const toggleFullscreen = () =>
      document.fullscreenElement
        ? document.exitFullscreen()
        : refWrapper.value?.requestFullscreen();
    const download = () => {
      if (!props.src) return;
      const anchor = document.createElement("a");
      anchor.href = props.src;
      anchor.download = "";
      anchor.click();
    };
    const emitPrev = () => emit("prev");
    const emitNext = () => emit("next");
    const actions = computed<ActionType[]>(() => [
      { key: "prev", name: "Previous", content: () => "‹", onClick: emitPrev },
      { key: "next", name: "Next", content: () => "›", onClick: emitNext },
      {
        key: "fullScreen",
        name: "Fullscreen",
        content: () => h(IconFullscreen),
        onClick: toggleFullscreen,
      },
      {
        key: "rotateLeft",
        name: "Rotate left",
        content: () => h(IconRotateLeft),
        onClick: controller.rotateLeft,
      },
      {
        key: "rotateRight",
        name: "Rotate right",
        content: () => h(IconRotateRight),
        onClick: controller.rotateRight,
      },
      {
        key: "originalSize",
        name: "Original size",
        content: () => h(IconOriginalSize),
        onClick: controller.reset,
      },
      {
        key: "zoomOut",
        name: "Zoom out",
        content: () => h(IconZoomOut),
        onClick: controller.zoomOut,
      },
      {
        key: "zoomIn",
        name: "Zoom in",
        content: () => h(IconZoomIn),
        onClick: controller.zoomIn,
      },
      {
        key: "download",
        name: "Download",
        content: () => "↓",
        onClick: download,
      },
    ]);

    watch(controller.mergedOpen, (open, previous) => {
      if (open && !previous) {
        emit("open");
        nextTick(() => emit("opened"));
      }
      if (!open && previous) {
        emit("close");
        nextTick(() => emit("closed"));
      }
    });

    return {
      ...controller,
      prefixCls,
      refWrapper,
      refImage,
      container,
      wrapperStyles,
      isLoading,
      setLoadStatus,
      mergedActions,
      actions,
      toggleFullscreen,
    };
  },
});
</script>
