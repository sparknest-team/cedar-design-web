<template>
  <trigger
    :class="prefixCls"
    trigger="click"
    :placement="placement"
    show-arrow
    :open="computedOpen"
    :popup-offset="10"
    :popup-container="popupContainer"
    :content-class="contentCls"
    :content-style="contentStyle"
    :arrow-class="arrowCls"
    :arrow-style="arrowStyle"
    animation-name="zoom-in-fade-out"
    auto-fit-transform-origin
    @open-change="handleOpenChange"
  >
    <slot />
    <template #content>
      <div :class="`${prefixCls}-body`">
        <span :class="`${prefixCls}-icon`">
          <slot name="icon">
            <icon-info-circle-fill v-if="type === 'info'" />
            <icon-check-circle-fill v-else-if="type === 'success'" />
            <icon-exclamation-circle-fill v-else-if="type === 'warning'" />
            <icon-close-circle-fill v-else-if="type === 'error'" />
          </slot>
        </span>
        <span :class="`${prefixCls}-content`">
          <slot name="content">{{ content }}</slot>
        </span>
      </div>
      <div :class="`${prefixCls}-footer`">
        <Button size="xs" v-bind="cancelButtonProps" @click="handleCancel">
          {{ cancelText || t("popconfirm.cancelText") }}
        </Button>
        <Button
          variant="text"
          size="xs"
          v-bind="confirmButtonProps"
          :loading="mergedConfirmButtonLoading"
          @click="handleConfirm"
        >
          {{ confirmButtonText || t("popconfirm.confirmButtonText") }}
        </Button>
      </div>
    </template>
  </trigger>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { createNamespace, getPrefixCls } from "../_utils/global-config";
import { IconInfoCircleFill } from "@cedarjs/icons-vue/icon-info-circle-fill";
import { IconCheckCircleFill } from "@cedarjs/icons-vue/icon-check-circle-fill";
import { IconExclamationCircleFill } from "@cedarjs/icons-vue/icon-exclamation-circle-fill";
import { IconCloseCircleFill } from "@cedarjs/icons-vue/icon-close-circle-fill";
import Button from "../button";
import Trigger from "../trigger";
import { useI18n } from "../locale";
import { isBoolean, isFunction, isPromise } from "../_utils/is";
import { popconfirmProps } from "./props";

export default defineComponent({
  name: createNamespace("popconfirm").name,
  components: {
    Button,
    Trigger,
    IconInfoCircleFill,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill,
  },
  props: popconfirmProps,
  emits: {
    "update:open": (visible: boolean) => true,
    /**
     * @zh 气泡确认框的显隐状态改变时触发
     * @en Triggered when the visible or hidden state of the bubble confirmation box changes
     * @param {boolean} visible
     */
    openChange: (visible: boolean) => true,
    /**
     * @zh 点击确认按钮时触发
     * @en Triggered when the confirm button is clicked
     */
    confirm: () => true,
    /**
     * @zh 点击取消按钮时触发
     * @en Triggered when the cancel button is clicked
     */
    cancel: () => true,
  },
  /**
   * @zh 内容
   * @en Content
   * @slot content
   */
  /**
   * @zh 图标
   * @en Icon
   * @slot icon
   */
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("popconfirm");
    const { t } = useI18n();

    const _open = ref(props.defaultOpen);
    const computedOpen = computed(() => props.open ?? _open.value);
    const _confirmButtonLoading = ref(false);
    const mergedConfirmButtonLoading = computed(
      () => props.confirmButtonLoading || _confirmButtonLoading.value,
    );

    // Used to ignore closed Promises
    let promiseNumber = 0;

    const close = () => {
      promiseNumber++;
      if (_confirmButtonLoading.value) {
        _confirmButtonLoading.value = false;
      }
      _open.value = false;
      emit("update:open", false);
      emit("openChange", false);
    };

    const handleOpenChange = (visible: boolean) => {
      if (!visible) {
        close();
      } else {
        _open.value = visible;
        emit("update:open", visible);
        emit("openChange", visible);
      }
    };

    const handleConfirm = async () => {
      const currentPromiseNumber = promiseNumber;
      const closed = await new Promise<boolean>(
        // eslint-disable-next-line no-async-promise-executor
        async (resolve) => {
          if (isFunction(props.beforeConfirm)) {
            let result = props.beforeConfirm((closed = true) =>
              resolve(closed),
            );
            if (isPromise(result) || !isBoolean(result)) {
              _confirmButtonLoading.value = true;
            }
            if (isPromise(result)) {
              try {
                // if beforeConfirm is Promise<void> ,set Defaults true
                result = (await result) ?? true;
              } catch (error) {
                result = false;
                throw error;
              }
            }
            if (isBoolean(result)) {
              resolve(result);
            }
          } else {
            resolve(true);
          }
        },
      );

      if (currentPromiseNumber === promiseNumber) {
        if (closed) {
          emit("confirm");
          close();
        } else if (_confirmButtonLoading.value) {
          _confirmButtonLoading.value = false;
        }
      }
    };

    const handleCancel = () => {
      let result = true;
      if (isFunction(props.beforeCancel)) {
        result = props.beforeCancel() ?? false;
      }
      if (result) {
        emit("cancel");
        close();
      }
    };

    const contentCls = computed(() => [
      `${prefixCls}-popup-content`,
      props.contentClass,
    ]);

    const arrowCls = computed(() => [
      `${prefixCls}-popup-arrow`,
      props.arrowClass,
    ]);

    return {
      prefixCls,
      contentCls,
      arrowCls,
      computedOpen,
      mergedConfirmButtonLoading,
      handleOpenChange,
      handleConfirm,
      handleCancel,
      t,
    };
  },
});
</script>
