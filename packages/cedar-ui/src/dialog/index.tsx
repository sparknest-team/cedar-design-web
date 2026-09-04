import type { App, AppContext } from "vue";
import { createVNode, nextTick, reactive, render } from "vue";
import { MESSAGE_TYPES } from "../_utils/constant";
import { getOverlay, isServerRendering } from "../_utils/dom";
import { setGlobalConfig, getComponentName } from "../_utils/global-config";
import { omit } from "../_utils/omit";
import type { CedarOptions } from "../_utils/types";
import _Dialog from "./Dialog.vue";
import { dialogProps } from "./props";
import type {
  DialogAction,
  DialogConfig,
  DialogMethod,
  DialogRenderContent,
  DialogReturn,
  DialogService,
  DialogUpdateConfig,
} from "./types";

type UserDialogConfig = DialogConfig | string;

let defaultOptions: DialogConfig = {};
const activeDialogs: DialogReturn[] = [];

function normalizeConfig(config: UserDialogConfig = {}): DialogConfig {
  return typeof config === "string" ? { message: config } : config;
}

function getDialogSlot(
  content: DialogRenderContent | undefined,
): (() => any) | undefined {
  if (content == null) return undefined;
  return typeof content === "function" ? content : () => content;
}

function createDialogMethod(defaultMethodConfig: Partial<DialogConfig> = {}) {
  return (
    userConfig: UserDialogConfig = {},
    appContext?: AppContext,
  ): DialogReturn & Promise<DialogAction | void> => {
    if (isServerRendering) {
      return Object.assign(Promise.resolve(), {
        close: () => {},
        update: () => {},
      });
    }

    const config = {
      closable: false,
      simple: true,
      ...defaultOptions,
      ...defaultMethodConfig,
      ...normalizeConfig(userConfig),
    };
    const reactiveConfig = reactive({ ...config });
    let container: HTMLElement | null = getOverlay("dialog");
    let resolvePromise: ((action: DialogAction | void) => void) | null = null;
    let resolved = false;

    const promise = new Promise<DialogAction | void>((resolve) => {
      resolvePromise = resolve;
    });

    const resolveAction = (action: DialogAction) => {
      if (!resolved) {
        resolved = true;
        resolvePromise?.(action);
      }
    };

    const handleConfirm = (e?: Event) => {
      if (vm.component) vm.component.props.open = false;
      config.onConfirm?.(e);
      resolveAction("confirm");
    };

    const handleCancel = (e?: Event) => {
      if (vm.component) vm.component.props.open = false;
      config.onCancel?.(e);
      resolveAction("cancel");
    };

    const handleLifecycleClose = () => {
      config.onClose?.();
      resolveAction("close");
    };

    const handleClosed = async () => {
      await nextTick();
      if (container) {
        render(null, container);
        document.body.removeChild(container);
      }
      container = null;
      const index = activeDialogs.indexOf(dialogReturn);
      if (index >= 0) activeDialogs.splice(index, 1);
      config.onClosed?.();
    };

    const handleReturnClose = () => {
      if (vm.component) vm.component.props.open = false;
      resolveAction("close");
    };

    const handleUpdateConfig = (updateConfig: DialogUpdateConfig) => {
      if (!vm.component) return;
      Object.assign(reactiveConfig, updateConfig);
      Object.entries(updateConfig).forEach(([key, value]) => {
        if (
          (key === "title" && hasTitleSlot) ||
          key === "message" ||
          key === "content"
        )
          return;
        vm.component!.props[key] = value;
      });
    };

    const defaultConfig = {
      titleAlign: "start" as const,
      open: true,
      popupContainer: false,
      unmountOnClose: true,
      "onUpdate:open": (open: boolean) => {
        if (vm.component) vm.component.props.open = open;
      },
      onConfirm: handleConfirm,
      onCancel: handleCancel,
      onClose: handleLifecycleClose,
      onClosed: handleClosed,
    };

    const hasTitleSlot =
      config.title != null && typeof config.title !== "string";
    const vm = createVNode(
      _Dialog,
      {
        ...defaultConfig,
        ...omit(config, [
          "content",
          "message",
          "title",
          "footer",
          "open",
          "unmountOnClose",
          "onConfirm",
          "onCancel",
          "onClose",
          "onClosed",
        ]),
        title: hasTitleSlot ? undefined : config.title,
        footer: typeof config.footer === "boolean" ? config.footer : undefined,
      },
      {
        default: () =>
          getDialogSlot(reactiveConfig.content ?? reactiveConfig.message)?.(),
        title: hasTitleSlot
          ? () => getDialogSlot(reactiveConfig.title)?.()
          : undefined,
        footer:
          typeof config.footer !== "boolean"
            ? getDialogSlot(config.footer)
            : undefined,
      },
    );

    if (appContext ?? Dialog._context)
      vm.appContext = appContext ?? Dialog._context;
    render(vm, container!);
    document.body.appendChild(container!);

    const dialogReturn: DialogReturn = {
      close: handleReturnClose,
      update: handleUpdateConfig,
    };
    activeDialogs.push(dialogReturn);
    return Object.assign(promise, dialogReturn);
  };
}

const dialog: DialogMethod = {
  open: createDialogMethod(),
  confirm: createDialogMethod({ type: "warning" }),
  alert: createDialogMethod({
    cancelButton: false,
    maskClosable: false,
    escToClose: false,
  }),
  ...MESSAGE_TYPES.reduce(
    (methods, type) => {
      methods[type] = createDialogMethod({
        cancelButton: false,
        type,
      });
      return methods;
    },
    {} as Pick<DialogMethod, "info" | "success" | "warning" | "error">,
  ),
};

const Dialog = Object.assign(_Dialog, {
  ...dialog,
  close: () => activeDialogs.at(-1)?.close(),
  setDefaultOptions: (options: DialogConfig) => {
    defaultOptions = { ...options };
  },
  resetDefaultOptions: () => {
    defaultOptions = {};
  },
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options);
    app.component(getComponentName(options, _Dialog.name), _Dialog);

    const dialogWithContext = {} as DialogService;
    for (const key of Object.keys(dialog) as (keyof DialogMethod)[]) {
      dialogWithContext[key] = (config, appContext = app._context) =>
        dialog[key](config, appContext);
    }
    dialogWithContext.close = Dialog.close;
    dialogWithContext.setDefaultOptions = Dialog.setDefaultOptions;
    dialogWithContext.resetDefaultOptions = Dialog.resetDefaultOptions;
    app.config.globalProperties.$dialog = dialogWithContext;
    Dialog._context = app._context;
  },
  _context: null as AppContext | null,
});

export type {
  DialogMethod,
  DialogService,
  DialogConfig,
  DialogReturn,
  DialogAction,
  DialogType,
  DialogMessageAlign,
  DialogTitleAlign,
  DialogRenderContent,
  DialogUpdateConfig,
  DialogBeforeCloseRefs,
} from "./types";
export type { DialogProps } from "./props";
export type DialogInstance = InstanceType<typeof _Dialog>;
export { Dialog, dialogProps };
export const _DialogComponent = Dialog;

export default Dialog;
