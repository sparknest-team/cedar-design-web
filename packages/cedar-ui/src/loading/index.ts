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
import _Loading from "./loading.vue";
import { loadingProps } from "./props";
import type { LoadingSize, LoadingType } from "./props";

const INSTANCE_KEY = Symbol("CedarLoading");

export interface LoadingOptions {
  loading: boolean;
  tip?: string;
  type?: LoadingType;
  size?: LoadingSize | number;
  radius?: string | number;
  dot?: boolean;
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
  const container = document.createElement("div");
  // The overlay is inside the host: consume clicks before they reach Card/ancestors.
  container.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  }, true);
  const fullscreen = options.fullscreen === true;
  const restorePosition =
    !fullscreen && getComputedStyle(el).position === "static";
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

  if (fullscreen) {
    document.body.classList.add("c-loading-parent--hidden");
    document.body.appendChild(container);
  } else {
    if (restorePosition) el.classList.add("c-loading-parent--relative");
    el.appendChild(container);
  }

  el[INSTANCE_KEY] = {
    options,
    container,
    restorePosition,
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
  document.body.classList.remove("c-loading-parent--hidden");
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
    } else if (typeof binding.value === "object" && el[INSTANCE_KEY]) {
      updateOptions(el, getOptions(binding.value));
      if (binding.value.background) {
        el[INSTANCE_KEY].container.style.setProperty(
          "--c-loading-overlay-background",
          binding.value.background,
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
