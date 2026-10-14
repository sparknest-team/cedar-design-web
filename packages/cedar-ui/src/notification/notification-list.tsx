import type { PropType } from "vue";
import { defineComponent, TransitionGroup } from "vue";
import { getPrefixCls, createNamespace } from "../_utils/global-config";
import { toKebabCase } from "../_utils/convert-case";
import Notification from "./Notification.vue";
import {
  NOTIFICATION_POSITION,
  NotificationItem,
  NotificationPosition,
} from "./types";
import usePopupManager from "../_hooks/use-popup-manager";
import { getSlotFunction } from "../_utils/vue-utils";

const { name } = createNamespace("notification-list");

export default defineComponent({
  name,
  props: {
    notifications: {
      type: Array as PropType<NotificationItem[]>,
      default: () => [],
    },
    position: {
      type: String as PropType<NotificationPosition>,
      default: "topRight",
      validator: (value: any) => {
        return NOTIFICATION_POSITION.includes(value);
      },
    },
  },
  emits: ["close", "closed"],
  setup(props, context) {
    // A re-added logical ID is a new item, not the old component/timer.
    const itemKeys = new WeakMap<NotificationItem, number>();
    let nextItemKey = 0;
    const getItemKey = (item: NotificationItem) => {
      let key = itemKeys.get(item);
      if (key === undefined) {
        key = nextItemKey++;
        itemKeys.set(item, key);
      }
      return key;
    };
    const prefixCls = getPrefixCls("notification-list");
    const kebabPosition = toKebabCase(props.position);
    const { zIndex } = usePopupManager("message", { runOnMounted: true });

    const isRight = props.position.includes("Right");

    return () => (
      <TransitionGroup
        {...({
          class: [prefixCls, `${prefixCls}-${kebabPosition}`],
          style: { zIndex: zIndex.value },
          name: `slide-${isRight ? "right" : "left"}-notification`,
          onAfterLeave: () => context.emit("closed"),
          tag: "ul",
        } as any)}
      >
        {props.notifications.map((item) => {
          const slots = {
            default: getSlotFunction(item.title),
            content: getSlotFunction(item.content),
            icon: getSlotFunction(item.icon),
            footer: getSlotFunction(item.footer),
            closeIcon: getSlotFunction(item.closeIcon),
            closeIconElement: getSlotFunction(item.closeIconElement),
          };
          return (
            <Notification
              key={getItemKey(item)}
              type={item.type}
              style={item.style}
              class={item.class}
              duration={item.duration}
              closable={item.closable}
              showIcon={item.showIcon}
              resetOnUpdate={item.resetOnUpdate}
              v-slots={slots}
              onClose={() => context.emit("close", item.id)}
            />
          );
        })}
      </TransitionGroup>
    );
  },
});
