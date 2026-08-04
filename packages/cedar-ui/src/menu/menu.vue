<template>
  <Trigger
    :popup-visible="computedPopupVisible"
    animation-name="slide-dynamic-origin"
    auto-fit-transform-origin
    :trigger="trigger"
    :position="position"
    :popup-offset="4"
    :popup-container="popupContainer"
    :auto-fit-popup-width="autoFitPopupWidth"
    :opened-class="`${prefixCls}-open`"
    @popup-visible-change="handlePopupVisibleChange"
  >
    <slot />
    <template #content>
      <MenuPanel>
        <slot name="content" />
        <template v-if="$slots.footer" #footer>
          <slot name="footer" />
        </template>
      </MenuPanel>
    </template>
  </Trigger>
</template>

<script lang="ts">
import { defineComponent, PropType, provide, toRefs } from "vue";
import { TriggerEvent } from "../_utils/constant";
import { getPrefixCls } from "../_utils/global-config";
import Trigger from "../trigger";
import MenuPanel from "./menu-panel.vue";
import { useTrigger } from "../_hooks/use-trigger";
import { menuInjectionKey } from "./context";
import { MenuPosition, MenuValue } from "./types";

export default defineComponent({
  name: "Menu",
  components: {
    Trigger,
    MenuPanel,
  },
  props: {
    /**
     * @zh 选中的值
     * @en Selected value
     * @vModel
     */
    modelValue: {
      type: [String, Number, Object] as PropType<MenuValue>,
    },
    /**
     * @zh 弹出框是否可见
     * @en Whether the popup is visible
     * @vModel
     */
    popupVisible: {
      type: Boolean,
      default: undefined,
    },
    /**
     * @zh 弹出框默认是否可见（非受控模式）
     * @en Whether the popup is visible by default (uncontrolled mode)
     */
    defaultPopupVisible: {
      type: Boolean,
      default: false,
    },
    /**
     * @zh 触发方式
     * @en Trigger method
     * @values 'hover','click','focus','contextMenu'
     */
    trigger: {
      type: [String, Array] as PropType<TriggerEvent | TriggerEvent[]>,
      default: "click",
    },
    /**
     * @zh 弹出位置
     * @en Popup position
     * @values 'top','tl','tr','bottom','bl','br'
     */
    position: {
      type: String as PropType<MenuPosition>,
      default: "bottom",
    },
    /**
     * @zh 弹出框的挂载容器
     * @en Mount container for popup
     */
    popupContainer: {
      type: [String, Object] as PropType<string | HTMLElement>,
    },
    /**
     * @zh 弹出框最大高度
     * @en Maximum height of the popup
     * @version 2.29.0
     */
    popupMaxHeight: {
      type: [Boolean, Number],
      default: true,
    },
    /**
     * @zh 是否在用户选择菜单项后隐藏弹出框
     * @en Whether to hide popup when the user selects a menu item
     * @version 2.43.0
     */
    hideOnSelect: {
      type: Boolean,
      default: true,
    },
    /**
     * @zh 是否将弹出框宽度设置为触发器宽度
     * @en Whether to set the width of the popup to the width of the trigger
     */
    autoFitPopupWidth: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    "update:modelValue": (value: MenuValue) => true,
    "update:popupVisible": (visible: boolean) => true,
    /**
     * @zh 下拉框显示状态发生改变时触发
     * @en Triggered when the display status of the drop-down box changes
     * @param {boolean} visible
     */
    popupVisibleChange: (visible: boolean) => true,
    /**
     * @zh 用户选择菜单项时触发；受控模式下是否产生选中态取决于 modelValue 是否更新
     * @en Triggered when the user selects a menu item. In controlled mode, whether the selected state changes depends on whether modelValue is updated.
     * @param {string | number | Record<string, any> | undefined } value
     * @param {Event} ev
     */
    select: (value: MenuValue, ev: Event) => true,
  },
  /**
   * @zh 内容
   * @en Content
   * @slot content
   */
  /**
   * @zh 页脚
   * @en Footer
   * @slot footer
   * @version 2.10.0
   */
  setup(props, { emit }) {
    const { modelValue, defaultPopupVisible, popupVisible, popupMaxHeight } =
      toRefs(props);
    const prefixCls = getPrefixCls("menu");

    const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
      defaultPopupVisible,
      popupVisible,
      emit,
    });

    const handleOptionClick = (value: MenuValue, ev: Event) => {
      emit("update:modelValue", value);
      emit("select", value, ev);
      props.hideOnSelect && handlePopupVisibleChange(false);
    };

    provide(menuInjectionKey, {
      popupMaxHeight,
      modelValue,
      onOptionClick: handleOptionClick,
    });

    return {
      prefixCls,
      computedPopupVisible,
      handlePopupVisibleChange,
    };
  },
});
</script>
