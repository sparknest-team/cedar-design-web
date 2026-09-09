<template>
  <Overlay
    v-model:open="mergedOpen"
    :class="prefixCls"
    :style="wrapperStyles"
    :overlay-closable="overlayClosable"
    :esc-to-close="escToClose"
    :lock-scroll="lockScroll"
    :popup-container="popupContainer"
    :unmount-on-close="false"
    @open="$emit('open')"
    @opened="$emit('opened')"
    @close="$emit('close')"
    @closed="$emit('closed')"
    @key-escape="$emit('key-escape')"
  >
    <div
      ref="refWrapper"
      :class="`${prefixCls}-wrapper`"
      data-image-preview-stage
      @wheel="onWheel"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerCancel"
      @click="onOverlayClick"
      @dblclick="onDoubleClick"
    >
      <div :class="`${prefixCls}-backdrop`" data-image-preview-backdrop />
      <div :class="`${prefixCls}-img-container`">
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
              @click.stop
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
  </Overlay>
</template>

<script lang="tsx">
import {
  computed,
  defineComponent,
  h,
  ref,
  toRefs,
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
import { usePopupContainer } from "../_utils/popup-container";
import { createNamespace, getPrefixCls } from "../_utils/global-config";
import Overlay from "../overlay";
import type { ImagePreviewActionName } from "./api";
import { usePreviewController } from "./composables/usePreviewController";
import useImageLoadStatus from "./hooks/use-image-load-status";
import { imagePreviewProps } from "./previewProps";
import PreviewToolbar, { type ActionType } from "./preview-toolbar.vue";

export default defineComponent({
  name: createNamespace("image-preview").name,
  components: { IconClose, IconLoading, Overlay, PreviewToolbar },
  props: imagePreviewProps,
  emits: [
    "update:open",
    "open-change",
    "open",
    "opened",
    "close",
    "closed",
    "key-escape",
    "long-press",
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
      overlayClosable: refs.overlayClosable,
      onOpenChange: (open) => {
        emit("update:open", open);
        emit("open-change", open);
        props.onOpenChange?.(open);
      },
      onLongPress: () => emit("long-press"),
      onPrev: () => emit("prev"),
      onNext: () => emit("next"),
    });
    const prefixCls = getPrefixCls("image-preview");
    const refWrapper = ref<HTMLElement>();
    const refImage = ref<HTMLImageElement>();
    const popupTarget = usePopupContainer(() => props.popupContainer);
    const wrapperStyles = computed<CSSProperties>(() => ({
      position: props.popupContainer === false ? "absolute" : popupTarget.value === 'body' || (typeof document !== 'undefined' && popupTarget.value === document.body) ? "fixed" : "absolute",
    }));
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

    return {
      ...controller,
      prefixCls,
      refWrapper,
      refImage,
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
