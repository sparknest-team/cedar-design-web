import type { App, AppContext } from "vue";
import { getComponentName, setGlobalConfig } from "../_utils/global-config";
import type { CedarOptions } from "../_utils/types";
import _Dialog from "./Dialog.vue";
import { dialogProps } from "./props";
import {
  closeLatestDialog,
  dialogMethods,
  resetDialogDefaultOptions,
  setDialogAppContext,
  setDialogDefaultOptions,
} from "./service";
import type { DialogConfig, DialogMethod, DialogService } from "./types";

const Dialog = Object.assign(_Dialog, {
  ...dialogMethods,
  close: closeLatestDialog,
  setDefaultOptions: setDialogDefaultOptions,
  resetDefaultOptions: resetDialogDefaultOptions,
  install(app: App, options?: CedarOptions) {
    setGlobalConfig(app, options);
    app.component(getComponentName(options, _Dialog.name), _Dialog);
    setDialogAppContext(app._context);

    const bind =
      (method: DialogMethod["open"]) => (config?: DialogConfig | string) =>
        method(config, app._context);
    const service: DialogService = Object.assign(
      {
        open: bind(dialogMethods.open),
        confirm: bind(dialogMethods.confirm),
        alert: bind(dialogMethods.alert),
        info: bind(dialogMethods.info),
        success: bind(dialogMethods.success),
        warning: bind(dialogMethods.warning),
        error: bind(dialogMethods.error),
      },
      {
        close: closeLatestDialog,
        setDefaultOptions: setDialogDefaultOptions,
        resetDefaultOptions: resetDialogDefaultOptions,
      },
    );
    app.config.globalProperties.$dialog = service;
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
} from "./types";
export type { DialogProps } from "./props";
export type DialogInstance = InstanceType<typeof _Dialog>;
export { Dialog, dialogProps };
export const _DialogComponent = Dialog;

export default Dialog;

export type { DialogBeforeClose } from "./types";

export type { BeforeHookContext, BeforeHookDone } from '../_hooks/use-action-guard'
