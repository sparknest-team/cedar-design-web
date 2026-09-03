import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type CSSProperties,
} from "vue";
import { createNamespace, getPrefixCls } from "../_utils/global-config";
import Spin from "../spin";
import { infiniteScrollProps } from "./props";
import type { InfiniteScrollStatus } from "./props";

const { name } = createNamespace("infinite-scroll");

type ScrollTarget = HTMLElement | Window;

export default defineComponent({
  name,
  props: infiniteScrollProps,
  emits: {
    "update:status": (status: InfiniteScrollStatus) => status === "loading",
    load: () => true,
    retry: () => true,
  },
  setup(props, { emit, expose, slots }) {
    const prefixCls = getPrefixCls("infinite-scroll");
    const rootRef = ref<HTMLElement>();
    const detectorRef = ref<HTMLElement>();
    const effectiveStatus = ref<InfiniteScrollStatus>(props.status);
    let mounted = false;
    let locked = props.status === "loading";
    let targetElement: HTMLElement | undefined;
    let scrollTarget: ScrollTarget | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let mutationObserver: MutationObserver | undefined;
    let scheduledTask: number | undefined;

    const cancelScheduledCheck = () => {
      if (scheduledTask === undefined || typeof window === "undefined") return;
      window.cancelAnimationFrame?.(scheduledTask);
      window.clearTimeout(scheduledTask);
      scheduledTask = undefined;
    };

    const scheduleCheck = () => {
      if (
        !mounted ||
        scheduledTask !== undefined ||
        typeof window === "undefined"
      )
        return;
      const run = () => {
        scheduledTask = undefined;
        check();
      };
      scheduledTask = window.requestAnimationFrame
        ? window.requestAnimationFrame(run)
        : window.setTimeout(run, 0);
    };

    const resolveCssLength = (value: string | number) => {
      if (typeof value === "number") return Number.isFinite(value) ? value : 0;
      if (typeof document === "undefined" || !value.trim()) return 0;
      if (window.CSS?.supports && !window.CSS.supports("width", value))
        return 0;

      const probe = document.createElement("div");
      const style: CSSProperties = {
        position: "absolute",
        visibility: "hidden",
        pointerEvents: "none",
        width: value,
      };
      Object.assign(probe.style, style);
      if (!probe.style.width) return 0;
      document.body.appendChild(probe);
      const rectWidth = probe.getBoundingClientRect().width;
      const computedWidth = window.getComputedStyle(probe).width;
      probe.remove();

      if (Number.isFinite(rectWidth) && rectWidth !== 0) return rectWidth;
      if (/^-?(?:\d+|\d*\.\d+)px$/.test(computedWidth)) {
        const pixels = Number(computedWidth.slice(0, -2));
        return Number.isFinite(pixels) ? pixels : 0;
      }
      return 0;
    };

    const isPageTarget = (element: HTMLElement) =>
      element === document.documentElement ||
      element === document.body ||
      element === document.scrollingElement;

    const reachedThreshold = () => {
      const root = rootRef.value;
      const detector = detectorRef.value;
      const target = targetElement;
      if (!root || !detector || !target || typeof window === "undefined")
        return false;

      const offset = resolveCssLength(props.bottomOffset);
      if (root.contains(target) && !target.contains(detector)) {
        if (target.clientHeight <= 0) return false;
        return (
          target.scrollHeight - target.scrollTop - target.clientHeight <= offset
        );
      }

      const detectorRect = detector.getBoundingClientRect();
      let viewportBottom: number;
      if (isPageTarget(target)) {
        if (window.innerHeight <= 0) return false;
        viewportBottom = window.innerHeight;
      } else {
        const targetRect = target.getBoundingClientRect();
        if (targetRect.height <= 0) return false;
        viewportBottom = targetRect.bottom;
      }

      const rootRect = root.getBoundingClientRect();
      if (
        rootRect.width === 0 &&
        rootRect.height === 0 &&
        rootRect.top === 0 &&
        rootRect.bottom === 0
      ) {
        return false;
      }
      return detectorRect.bottom - viewportBottom <= offset;
    };

    const start = (event: "load" | "retry") => {
      locked = true;
      effectiveStatus.value = "loading";
      emit("update:status", "loading");
      if (event === "load") emit("load");
      else emit("retry");
    };

    function check() {
      if (
        !mounted ||
        props.disabled ||
        locked ||
        effectiveStatus.value !== "idle" ||
        !reachedThreshold()
      ) {
        return;
      }
      start("load");
    }

    const retry = () => {
      if (props.disabled || locked || effectiveStatus.value !== "error") return;
      start("retry");
    };

    const findScrollParent = (element: HTMLElement) => {
      let parent = element.parentElement;
      while (parent) {
        const style = window.getComputedStyle(parent);
        if (
          /(auto|scroll|overlay)/.test(`${style.overflow}${style.overflowY}`)
        ) {
          return parent;
        }
        parent = parent.parentElement;
      }
      return (document.scrollingElement ||
        document.documentElement) as HTMLElement;
    };

    const resolveTarget = () => {
      const root = rootRef.value;
      if (!root || typeof document === "undefined") return undefined;
      if (typeof props.target === "string") {
        try {
          const element = document.querySelector(props.target);
          return element instanceof HTMLElement ? element : undefined;
        } catch {
          return undefined;
        }
      }
      if (props.target && props.target instanceof HTMLElement)
        return props.target;
      return findScrollParent(root);
    };

    const cleanupBindings = () => {
      cancelScheduledCheck();
      scrollTarget?.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
      resizeObserver = undefined;
      mutationObserver = undefined;
      scrollTarget = undefined;
      targetElement = undefined;
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") scheduleCheck();
    };

    const bindTarget = (initial = false) => {
      if (
        !mounted ||
        typeof window === "undefined" ||
        typeof document === "undefined"
      )
        return;
      cleanupBindings();
      targetElement = resolveTarget();
      if (!targetElement) return;
      scrollTarget = isPageTarget(targetElement) ? window : targetElement;
      scrollTarget.addEventListener("scroll", scheduleCheck, { passive: true });
      window.addEventListener("resize", scheduleCheck, { passive: true });
      document.addEventListener("visibilitychange", handleVisibilityChange);

      if (typeof ResizeObserver !== "undefined") {
        let skipInitialNotification = initial && !props.immediate;
        resizeObserver = new ResizeObserver(() => {
          if (skipInitialNotification) {
            skipInitialNotification = false;
            return;
          }
          scheduleCheck();
        });
        if (rootRef.value) resizeObserver.observe(rootRef.value);
        resizeObserver.observe(targetElement);
      }
      if (typeof MutationObserver !== "undefined" && rootRef.value) {
        mutationObserver = new MutationObserver(scheduleCheck);
        mutationObserver.observe(rootRef.value, {
          childList: true,
          subtree: true,
        });
      }
      if (!initial || props.immediate) scheduleCheck();
    };

    watch(
      () => props.status,
      (status) => {
        effectiveStatus.value = status;
        locked = status === "loading";
        if (status === "idle") scheduleCheck();
      },
      { flush: "sync" },
    );
    watch(
      () => props.disabled,
      (disabled, previous) => {
        if (previous && !disabled) scheduleCheck();
      },
    );
    watch(() => props.bottomOffset, scheduleCheck);
    watch(
      () => props.target,
      () => nextTick(() => bindTarget()),
      { flush: "post" },
    );

    onMounted(() => {
      mounted = true;
      bindTarget(true);
    });
    onBeforeUnmount(() => {
      mounted = false;
      cleanupBindings();
    });

    expose({ check, retry });

    const renderStatus = () => {
      if (effectiveStatus.value === "loading") {
        return (
          <div class={[`${prefixCls}-status`, `${prefixCls}-loading`]}>
            {slots.loading?.() ?? <Spin tip="加载中" />}
          </div>
        );
      }
      if (effectiveStatus.value === "error") {
        return (
          <div class={[`${prefixCls}-status`, `${prefixCls}-error`]}>
            {slots.error?.({ retry }) ?? (
              <button
                type="button"
                class={`${prefixCls}-retry`}
                onClick={retry}
              >
                加载失败，点击重试
              </button>
            )}
          </div>
        );
      }
      if (effectiveStatus.value === "finished") {
        return (
          <div class={[`${prefixCls}-status`, `${prefixCls}-finished`]}>
            {slots.finished?.() ?? "没有更多了"}
          </div>
        );
      }
      return null;
    };

    return () => (
      <div ref={rootRef} class={prefixCls}>
        {slots.default?.()}
        <div
          ref={detectorRef}
          class={`${prefixCls}-detector`}
          aria-hidden="true"
        />
        {renderStatus()}
      </div>
    );
  },
});
