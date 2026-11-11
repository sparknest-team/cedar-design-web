import {
  defineComponent,
  h,
  reactive,
  render,
  type ComponentPublicInstance,
  type Directive,
  type DirectiveBinding,
} from "vue";
import { withInstall } from "../_utils/global-config";
import _Loading from "./Loading.vue";
import { loadingProps } from "./props";
import type { LoadingSize, LoadingType } from "./props";

const locks = new WeakMap<Document, { count: number; owned: boolean }>()

function acquireBodyLock(document: Document) {
  let state = locks.get(document)
  if (!state) {
    state = { count: 0, owned: !document.body.classList.contains('c-loading-parent--hidden') }
    locks.set(document, state)
  }
  const lease = state
  lease.count++
  document.body.classList.add('c-loading-parent--hidden')
  let released = false
  return () => {
    if (released) return
    released = true
    if (--lease.count === 0) {
      if (lease.owned) document.body.classList.remove('c-loading-parent--hidden')
      locks.delete(document)
    }
  }
}

const INSTANCE_KEY = Symbol("CedarLoading");

export interface LoadingOptions {
  loading: boolean;
  tip?: string;
  type?: LoadingType;
  size?: LoadingSize | number;
  radius?: string | number;
  hideIcon?: boolean;
  color?: string;
  fullscreen?: boolean;
  background?: string;
}

type LoadingRenderOptions = Omit<LoadingOptions, "loading">;

export interface ElementLoading extends HTMLElement {
  [INSTANCE_KEY]?: {
    container: HTMLElement;
    options: LoadingRenderOptions;
    restorePosition: boolean;
    releaseBodyLock?: () => void;
    fullscreen: boolean;
    previousBusy: string | null;
  };
}

const LoadingComponent = defineComponent({
  props: ["options"],
  setup(props) {
    return () =>
      h(
        _Loading,
        {
          ...props.options,
          loading: true,
        },
        {
          default: () =>
            h("span", {
              class: "c-loading-directive__placeholder",
              "aria-hidden": "true",
            }),
        },
      );
  },
});

const createInstance = (
  el: ElementLoading,
  binding: DirectiveBinding<boolean | LoadingOptions>,
) => {
  const options = reactive<LoadingRenderOptions>(getOptions(binding.value));
  const document = el.ownerDocument;
  const container = document.createElement("div");
  // The overlay is inside the host: consume clicks before they reach Card/ancestors.
  container.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      event.stopPropagation();
    },
    true,
  );
  const fullscreen = options.fullscreen === true;
  const restorePosition =
    !fullscreen && !el.classList.contains("c-loading-parent--relative") && document.defaultView?.getComputedStyle(el).position === "static";
  container.className = fullscreen
    ? "c-loading-directive c-loading-directive--fullscreen"
    : "c-loading-directive";
  if (options.background)
    container.style.setProperty(
      "--c-loading-overlay-background",
      options.background,
    );

  const vnode = h(LoadingComponent, { options });
  vnode.appContext = (
    binding.instance as ComponentPublicInstance & {
      $?: { appContext?: typeof vnode.appContext };
    }
  )?.$?.appContext;
  render(vnode, container);

  const releaseBodyLock = fullscreen ? acquireBodyLock(document) : undefined;
  if (fullscreen) {
    document.body.appendChild(container);
  } else {
    if (restorePosition) el.classList.add("c-loading-parent--relative");
    el.appendChild(container);
  }

  const previousBusy = el.getAttribute("aria-busy");
  el.setAttribute("aria-busy", "true");
  el[INSTANCE_KEY] = {
    previousBusy,
    options,
    container,
    restorePosition,
    releaseBodyLock,
    fullscreen,
  };
};

const isLoading = (value: boolean | LoadingOptions) =>
  typeof value === "boolean" ? value : value.loading;

const getOptions = (value: boolean | LoadingOptions): LoadingRenderOptions => {
  if (typeof value === "boolean") return {};
  const { loading: _, ...options } = value;
  return options;
};

const updateOptions = (
  el: ElementLoading,
  newOptions: LoadingRenderOptions,
) => {
  const instance = el[INSTANCE_KEY];
  if (instance) {
    for (const key of Object.keys(instance.options)) delete instance.options[key as keyof LoadingRenderOptions];
    Object.assign(instance.options, newOptions);
  }
};

const removeInstance = (el: ElementLoading) => {
  const instance = el[INSTANCE_KEY];
  if (!instance) return;

  render(null, instance.container);
  instance.container.remove();
  if (instance.restorePosition)
    el.classList.remove("c-loading-parent--relative");
  instance.releaseBodyLock?.();
  if (el.getAttribute("aria-busy") === "true") {
    if (instance.previousBusy == null) el.removeAttribute("aria-busy");
    else el.setAttribute("aria-busy", instance.previousBusy);
  }
  el[INSTANCE_KEY] = undefined;
};

export const vLoading: Directive<ElementLoading, boolean | LoadingOptions> = {
  mounted(el, binding) {
    if (isLoading(binding.value)) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    if (isLoading(binding.value) && !el[INSTANCE_KEY]) {
      createInstance(el, binding);
    } else if (!isLoading(binding.value)) {
      removeInstance(el);
    } else if (el[INSTANCE_KEY]) {
      const options = getOptions(binding.value);
      if (el[INSTANCE_KEY].fullscreen !== (options.fullscreen === true)) {
        removeInstance(el);
        createInstance(el, binding);
        return;
      }
      updateOptions(el, options);
      if (options.background) {
        el[INSTANCE_KEY].container.style.setProperty(
          "--c-loading-overlay-background",
          options.background,
        );
      } else {
        el[INSTANCE_KEY].container.style.removeProperty(
          "--c-loading-overlay-background",
        );
      }
    }
  },
  unmounted(el) {
    removeInstance(el);
  },
  getSSRProps() {
    return {};
  },
};

const Loading = withInstall(_Loading, undefined, {
  setup(app) {
    app.directive("c-loading", vLoading);
  },
});

export type LoadingInstance = InstanceType<typeof _Loading>;
export type { LoadingProps, LoadingSize, LoadingType } from "./props";
export { Loading, loadingProps };
export const _LoadingComponent = Loading;

export default Loading;
