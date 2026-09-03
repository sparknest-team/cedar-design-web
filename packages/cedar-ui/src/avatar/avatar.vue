<template>
  <div
    ref="itemRef"
    :style="outerStyle"
    :class="[
      cls,
      {
        [`${prefixCls}-bordered`]: bordered,
        [`${prefixCls}-hoverable`]: hoverable,
        [`${prefixCls}-with-trigger-icon`]: Boolean($slots['trigger-icon']),
        [`${prefixCls}-rtl`]: rtl,
      },
    ]"
    @click="onClick"
  >
    <resize-observer @resize="handleResize">
      <span ref="wrapperRef" :class="wrapperCls">
        <template v-if="imageUrl">
          <slot v-if="hasError" name="error">
            <img v-if="error" :src="error" :alt="alt" :style="imageStyle" />
            <div v-else :class="`${prefixCls}-image-icon`"><IconImageClose /></div>
          </slot>
          <slot v-if="!(hasError || !shouldLoad) && !isLoaded">
            <img v-if="loading" :src="loading" :alt="alt" :style="imageStyle" />
            <div v-else :class="`${prefixCls}-image-icon`"><IconLoading /></div>
          </slot>
          <img
            v-if="!(hasError || !shouldLoad)"
            :src="imageUrl"
            :alt="alt"
            :loading="lazy ? 'lazy' : undefined"
            :style="imageStyle"
            @load="handleImgLoad"
            @error="handleImgError"
          />
        </template>
        <slot v-else />
      </span>
    </resize-observer>
    <div
      v-if="$slots['trigger-icon']"
      :class="`${prefixCls}-trigger-icon-${triggerType}`"
      :style="computedTriggerIconStyle"
    >
      <slot name="trigger-icon" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  toRefs,
  watch,
  ref,
  onMounted,
  onUpdated,
  nextTick,
  CSSProperties,
  inject,
} from 'vue';
import { createNamespace, getPrefixCls } from '../_utils/global-config';
import type { AvatarTriggerType } from './types';
import { useIndex } from '../_hooks/use-index';
import ResizeObserver from '../_components/resize-observer-v2';
import { avatarGroupInjectionKey } from './context';
import { isNumber } from '../_utils/is';
import { IconImageClose } from '@cedarjs/icons-vue/icon-image-close'
import { IconLoading } from '@cedarjs/icons-vue/icon-loading'
import { configProviderInjectionKey } from '../config-provider/context';
import { avatarProps } from './props';

export default defineComponent({
  name: createNamespace('avatar').name,
  components: {
    ResizeObserver,
    IconImageClose,
    IconLoading,
  },
  props: avatarProps,
  emits: {
    /**
     * @zh 点击回调
     * @en Callback when clicked
     * @param {MouseEvent} ev
     */
    click: (ev: MouseEvent) => true,
    /**
     * @zh 图片加载错误
     * @en image load error
     */
    error: () => true,
    /**
     * @zh 图片加载成功
     * @en image load success
     */
    load: () => true,
  },
  /**
   * @zh 可点击的头像交互图标
   * @en Clickable avatar interaction icon
   * @slot trigger-icon
   */
  setup(props, { slots, emit, attrs }) {
    const { shape, size, autoFixFontSize, triggerType, triggerIconStyle } =
      toRefs(props);
    const prefixCls = getPrefixCls('avatar');
    const groupCtx = inject(avatarGroupInjectionKey, undefined);
    const configCtx = inject(configProviderInjectionKey, undefined);
    const rtl = computed(() => configCtx?.rtl ?? false);

    const itemRef = ref<HTMLDivElement>();
    const wrapperRef = ref<HTMLElement>();

    const mergedShape = computed(() => groupCtx?.shape ?? shape.value);
    const mergedSize = computed(() => groupCtx?.size ?? size.value);
    const mergedAutoFixFontSize = computed(
      () => groupCtx?.autoFixFontSize ?? autoFixFontSize.value
    );
    const isImage = ref(false);

    const hasError = ref(false);
    const shouldLoad = ref(true);
    const isLoaded = ref(false);

    const index = groupCtx
      ? useIndex({
          itemRef,
          selector: `.${prefixCls}`,
        }).computedIndex
      : ref(-1);

    const outerStyle = computed(() => {
      const style: CSSProperties = isNumber(mergedSize.value)
        ? {
            width: `${mergedSize.value}px`,
            height: `${mergedSize.value}px`,
            fontSize: `${mergedSize.value / 2}px`,
          }
        : {};
      if (props.color) {
        style.backgroundColor = props.color;
      }
      if (props.borderColor) {
        style.borderColor = props.borderColor;
      }
      if (groupCtx) {
        style.zIndex = groupCtx.zIndexAscend
          ? index.value + 1
          : groupCtx.total - index.value;
      }

      return style;
    });

    const imageStyle = computed<CSSProperties>(() => {
      const style: CSSProperties = { objectFit: props.objectFit };
      if (isNumber(mergedSize.value)) {
        style.width = `${mergedSize.value}px`;
        style.height = `${mergedSize.value}px`;
      }
      return style;
    });

    const computedTriggerIconStyle = useTriggerIconStyle({
      triggerIconStyle: triggerIconStyle?.value,
      inlineStyle: attrs.style as CSSProperties,
      triggerType: triggerType.value,
    });

    const autoFixFontSizeHandler = () => {
      if (!isImage.value && !props.imageUrl) {
        nextTick(() => {
          if (!wrapperRef.value || !itemRef.value) {
            return;
          }
          const textWidth = wrapperRef.value.clientWidth;
          const avatarWidth = mergedSize.value ?? itemRef.value.offsetWidth;

          const scale = avatarWidth / (textWidth + 8);
          if (avatarWidth && scale < 1) {
            wrapperRef.value.style.transform = `scale(${scale}) translateX(-50%)`;
          } else {
            wrapperRef.value.style.transform = '';
          }
          shouldLoad.value = true;
        });
      }
    };

    onMounted(() => {
      if (
        wrapperRef.value?.firstElementChild &&
        ['IMG', 'PICTURE'].includes(wrapperRef.value.firstElementChild.tagName)
      ) {
        isImage.value = true;
      }
      if (mergedAutoFixFontSize.value) {
        autoFixFontSizeHandler();
      }
    });

    watch(size, () => {
      if (mergedAutoFixFontSize.value) {
        autoFixFontSizeHandler();
      }
    });

    onUpdated(() => {
      if (mergedAutoFixFontSize.value) {
        autoFixFontSizeHandler();
      }
    });

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-${mergedShape.value}`,
    ]);
    const wrapperCls = computed(() =>
      isImage.value || props.imageUrl
        ? `${prefixCls}-image`
        : `${prefixCls}-text`
    );

    const onClick = (e: MouseEvent) => {
      emit('click', e);
    };

    const handleResize = () => {
      if (mergedAutoFixFontSize.value) {
        autoFixFontSizeHandler();
      }
    };

    const handleImgLoad = () => {
      isLoaded.value = true;
      emit('load');
    };
    const handleImgError = () => {
      hasError.value = true;
      emit('error');
    };

    return {
      prefixCls,
      rtl,
      itemRef,
      cls,
      outerStyle,
      wrapperRef,
      wrapperCls,
      computedTriggerIconStyle,
      imageStyle,
      isImage,
      shouldLoad,
      isLoaded,
      hasError,
      onClick,
      handleResize,
      handleImgLoad,
      handleImgError,
    };
  },
});

const useTriggerIconStyle = ({
  triggerType,
  inlineStyle = {},
  triggerIconStyle = {},
}: {
  triggerType: AvatarTriggerType;
  inlineStyle?: CSSProperties;
  triggerIconStyle?: CSSProperties;
}): CSSProperties => {
  let addon: CSSProperties = {};
  if (
    triggerType === 'button' &&
    (!triggerIconStyle || (triggerIconStyle && !triggerIconStyle.color)) &&
    inlineStyle &&
    inlineStyle.backgroundColor
  ) {
    addon = { color: inlineStyle.backgroundColor };
  }
  return {
    ...triggerIconStyle,
    ...addon,
  };
};
</script>
