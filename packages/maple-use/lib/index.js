// src/useEventListener.ts
import { isRef, onBeforeUnmount, onDeactivated, unref, watch } from "vue";
import { inBrowser, isFunction } from "@maplejs/maple-shared";

// src/onSmartMounted.ts
import { nextTick, onActivated, onMounted } from "vue";
function onSmartMounted(hook) {
  let isMounted = false;
  onMounted(() => {
    hook();
    nextTick(() => {
      isMounted = true;
    });
  });
  onActivated(() => {
    if (!isMounted) {
      return;
    }
    hook();
  });
}

// src/useEventListener.ts
function useEventListener(target, type, listener, options = {}) {
  if (!inBrowser()) {
    return;
  }
  const { passive = false, capture = false } = options;
  let listening = false;
  let cleaned = false;
  const getElement = (target2) => isFunction(target2) ? target2() : unref(target2);
  const add = (target2) => {
    if (listening || cleaned) {
      return;
    }
    const element = getElement(target2);
    if (element) {
      element.addEventListener(type, listener, {
        passive,
        capture
      });
      listening = true;
    }
  };
  const remove = (target2) => {
    if (!listening || cleaned) {
      return;
    }
    const element = getElement(target2);
    if (element) {
      element.removeEventListener(type, listener, {
        capture
      });
      listening = false;
    }
  };
  let watchStopHandle;
  if (isRef(target)) {
    watchStopHandle = watch(
      () => target.value,
      (newValue, oldValue) => {
        remove(oldValue);
        add(newValue);
      }
    );
  }
  const cleanup = () => {
    watchStopHandle?.();
    remove(target);
    cleaned = true;
  };
  onSmartMounted(() => {
    add(target);
  });
  onBeforeUnmount(() => {
    remove(target);
  });
  onDeactivated(() => {
    remove(target);
  });
  return cleanup;
}

// src/useClickOutside.ts
import { unref as unref2 } from "vue";
import { inBrowser as inBrowser2, isFunction as isFunction2 } from "@maplejs/maple-shared";
function useClickOutside(target, type, listener) {
  if (!inBrowser2()) {
    return;
  }
  const handler = (event) => {
    const element = isFunction2(target) ? target() : unref2(target);
    if (element && !element.contains(event.target)) {
      listener(event);
    }
  };
  useEventListener(document, type, handler);
}

// src/onSmartUnmounted.ts
import { onDeactivated as onDeactivated2, onUnmounted } from "vue";
function onSmartUnmounted(hook) {
  let keepalive = false;
  onDeactivated2(() => {
    keepalive = true;
    hook();
  });
  onUnmounted(() => {
    if (keepalive) {
      return;
    }
    hook();
  });
}

// src/useParent.ts
import {
  computed,
  getCurrentInstance,
  inject,
  nextTick as nextTick2,
  onBeforeUnmount as onBeforeUnmount2,
  onMounted as onMounted2
} from "vue";
function keyInProvides(key) {
  const instance = getCurrentInstance();
  return key in instance.provides;
}
function useParent(key) {
  if (!keyInProvides(key)) {
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  }
  const provider = inject(key);
  const { childInstances, collect, clear, ...parentProvider } = provider;
  const childInstance = getCurrentInstance();
  const index = computed(() => childInstances.indexOf(childInstance));
  const bindParent = (childProvider) => {
    onMounted2(() => {
      nextTick2().then(() => {
        collect(childInstance, childProvider);
      });
    });
    onBeforeUnmount2(() => {
      nextTick2().then(() => {
        clear(childInstance, childProvider);
      });
    });
  };
  return {
    index,
    parentProvider,
    bindParent
  };
}

// src/useChildren.ts
import {
  computed as computed2,
  getCurrentInstance as getCurrentInstance2,
  isVNode,
  provide,
  reactive
} from "vue";
import { isArray, removeItem } from "@maplejs/maple-shared";
function flatVNodes(subTree) {
  const vNodes = [];
  const flat = (subTree2) => {
    if (subTree2?.component) {
      flat(subTree2?.component.subTree);
      return;
    }
    if (isArray(subTree2?.children)) {
      subTree2.children.forEach((child) => {
        if (isVNode(child)) {
          vNodes.push(child);
          flat(child);
        }
      });
    }
  };
  flat(subTree);
  return vNodes;
}
function useChildren(key) {
  const parentInstance = getCurrentInstance2();
  const childInstances = reactive([]);
  const childProviders = [];
  const length = computed2(() => childInstances.length);
  const sortInstances = () => {
    const vNodes = flatVNodes(parentInstance.subTree);
    childInstances.sort((a, b) => vNodes.indexOf(a.vnode) - vNodes.indexOf(b.vnode));
  };
  const collect = (childInstance, childProvider) => {
    childInstances.push(childInstance);
    childProviders.push(childProvider);
    sortInstances();
  };
  const clear = (childInstance, childProvider) => {
    removeItem(childInstances, childInstance);
    removeItem(childProviders, childProvider);
  };
  const bindChildren = (parentProvider) => {
    provide(key, {
      childInstances,
      collect,
      clear,
      ...parentProvider
    });
  };
  return {
    length,
    childProviders,
    bindChildren
  };
}

// src/onWindowResize.ts
function onWindowResize(listener) {
  useEventListener(() => window, "resize", listener, { passive: true });
  useEventListener(() => window, "orientationchange", listener, { passive: true });
}

// src/useInitialized.ts
import { ref, watch as watch2 } from "vue";
function useInitialized(source, value) {
  const initialized = ref(false);
  watch2(
    source,
    (newValue) => {
      if (value === newValue) {
        initialized.value = true;
      }
    },
    { immediate: true }
  );
  return initialized;
}

// src/useTouch.ts
import { ref as ref2 } from "vue";
import { getScrollTop } from "@maplejs/maple-shared";
function getDirection(x, y) {
  if (x > y) {
    return "horizontal";
  }
  if (y > x) {
    return "vertical";
  }
}
function useTouch() {
  const startX = ref2(0);
  const startY = ref2(0);
  const deltaX = ref2(0);
  const deltaY = ref2(0);
  const offsetX = ref2(0);
  const offsetY = ref2(0);
  const prevX = ref2(0);
  const prevY = ref2(0);
  const moveX = ref2(0);
  const moveY = ref2(0);
  const direction = ref2();
  const touching = ref2(false);
  const dragging = ref2(false);
  const startTime = ref2(0);
  const distance = ref2(0);
  let draggingAnimationFrame = null;
  const resetTouch = () => {
    startX.value = 0;
    startY.value = 0;
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    prevX.value = 0;
    prevY.value = 0;
    moveX.value = 0;
    moveY.value = 0;
    direction.value = void 0;
    touching.value = false;
    dragging.value = false;
    startTime.value = 0;
    distance.value = 0;
  };
  const startTouch = (event) => {
    resetTouch();
    const { clientX: x, clientY: y } = event.touches[0];
    startX.value = x;
    startY.value = y;
    prevX.value = x;
    prevY.value = y;
    touching.value = true;
    startTime.value = performance.now();
    dragging.value = false;
    if (draggingAnimationFrame) {
      window.cancelAnimationFrame(draggingAnimationFrame);
    }
  };
  const moveTouch = (event) => {
    const { clientX: x, clientY: y } = event.touches[0];
    dragging.value = true;
    deltaX.value = x - startX.value;
    deltaY.value = y - startY.value;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);
    distance.value = Math.sqrt(offsetX.value ** 2 + offsetY.value ** 2);
    moveX.value = x - prevX.value;
    moveY.value = y - prevY.value;
    if (!direction.value) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
    prevX.value = x;
    prevY.value = y;
  };
  const endTouch = () => {
    touching.value = false;
    draggingAnimationFrame = window.requestAnimationFrame(() => {
      dragging.value = false;
    });
  };
  const isReachTop = (element) => {
    const scrollTop = getScrollTop(element);
    return scrollTop === 0 && deltaY.value > 0;
  };
  const isReachBottom = (element, offset = 1) => {
    const { scrollHeight, clientHeight, scrollTop } = element;
    const offsetBottom = Math.abs(scrollHeight - scrollTop - clientHeight);
    return deltaY.value < 0 && offsetBottom <= offset;
  };
  return {
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    prevX,
    prevY,
    moveX,
    moveY,
    direction,
    touching,
    dragging,
    startTime,
    distance,
    resetTouch,
    startTouch,
    moveTouch,
    endTouch,
    isReachTop,
    isReachBottom
  };
}

// src/useId.ts
import { getCurrentInstance as getCurrentInstance3, ref as ref3 } from "vue";
import { kebabCase } from "@maplejs/maple-shared";
function useId() {
  const id = ref3();
  const instance = getCurrentInstance3();
  const name = kebabCase(instance.type.name);
  id.value = process.env.NODE_ENV === "test" ? `${name}-mock-id` : `${name}-${instance.uid}`;
  return id;
}

// src/useClientId.ts
import { getCurrentInstance as getCurrentInstance4, onMounted as onMounted3, ref as ref4 } from "vue";
import { kebabCase as kebabCase2 } from "@maplejs/maple-shared";
function useClientId() {
  const instance = getCurrentInstance4();
  const name = kebabCase2(instance.type.name);
  const id = ref4(process.env.NODE_ENV === "test" ? `${name}-mock-id` : void 0);
  onMounted3(() => {
    if (process.env.NODE_ENV !== "test") {
      id.value = `${name}-${instance.uid}`;
    }
  });
  return id;
}

// src/useWindowSize.ts
import { ref as ref5 } from "vue";
import { inBrowser as inBrowser3 } from "@maplejs/maple-shared";
function useWindowSize(options = {}) {
  const { initialWidth = 0, initialHeight = 0 } = options;
  const width = ref5(initialWidth);
  const height = ref5(initialHeight);
  const update = () => {
    if (!inBrowser3()) {
      return;
    }
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };
  onSmartMounted(update);
  onWindowResize(update);
  return {
    width,
    height
  };
}

// src/useVModel.ts
import { computed as computed3, nextTick as nextTick3, ref as ref6, watch as watch3 } from "vue";
import { call } from "@maplejs/maple-shared";
function useVModel(props, key, options = {}) {
  const { passive = true, eventName, defaultValue, emit } = options;
  const event = eventName ?? `onUpdate:${key.toString()}`;
  const getValue = () => props[key] ?? defaultValue;
  if (!passive) {
    return computed3({
      get() {
        return getValue();
      },
      set(value) {
        emit ? emit(event, value) : call(props[event], value);
      }
    });
  }
  const proxy = ref6(getValue());
  let shouldEmit = true;
  watch3(
    () => props[key],
    () => {
      shouldEmit = false;
      proxy.value = getValue();
      nextTick3(() => {
        shouldEmit = true;
      });
    }
  );
  watch3(
    () => proxy.value,
    (newValue) => {
      if (!shouldEmit) {
        return;
      }
      emit ? emit(event, newValue) : call(props[event], newValue);
    }
  );
  return proxy;
}

// src/useMotion.ts
import { ref as ref7 } from "vue";
import { isFunction as isFunction3, motion } from "@maplejs/maple-shared";
function useMotion(options) {
  const value = ref7(getter(options.from));
  const state = ref7("pending");
  let ctx = createMotionContext();
  function getter(value2) {
    return isFunction3(value2) ? value2() : value2;
  }
  function reset() {
    ctx.reset();
    value.value = getter(options.from);
    state.value = "pending";
    ctx = createMotionContext();
  }
  function start() {
    ctx.start();
  }
  function pause() {
    ctx.pause();
  }
  function createMotionContext() {
    return motion({
      from: getter(options.from),
      to: getter(options.to),
      duration: options.duration ? getter(options.duration) : 300,
      timingFunction: options.timingFunction,
      onStateChange(newState) {
        state.value = newState;
      },
      frame({ value: newValue, done }) {
        value.value = newValue;
        if (done) {
          options.onFinished?.(value.value);
        }
      }
    });
  }
  return {
    value,
    state,
    start,
    pause,
    reset
  };
}
export {
  keyInProvides,
  onSmartMounted,
  onSmartUnmounted,
  onWindowResize,
  useChildren,
  useClickOutside,
  useClientId,
  useEventListener,
  useId,
  useInitialized,
  useMotion,
  useParent,
  useTouch,
  useVModel,
  useWindowSize
};
