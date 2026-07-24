import type { App, AppContext } from 'vue'
import { nextTick, createVNode, render } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import { MESSAGE_TYPES } from '../_utils/constant'
import { getOverlay } from '../_utils/dom'
import { isFunction } from '../_utils/is'
import _Dialog from './Dialog.vue'
import type { DialogAction, DialogConfig, DialogMethod, DialogReturn, DialogUpdateConfig } from './types'
import { omit } from '../_utils/omit'
import { getSlotFunction } from '../_utils/vue-utils'

function createDialogMethod(defaultMethodConfig: Partial<DialogConfig> = {}) {
  return (config: DialogConfig, appContext?: AppContext): DialogReturn & Promise<DialogAction | void> => {
    let container: HTMLElement | null = getOverlay('dialog')
    let resolvePromise: ((action: DialogAction | void) => void) | null = null

    const promise = new Promise<DialogAction | void>((resolve) => {
      resolvePromise = resolve
    })

    const handleConfirm = () => {
      if (vm.component) {
        vm.component.props.show = false
      }

      if (isFunction(config.onConfirm)) {
        config.onConfirm()
      }

      resolvePromise?.('confirm')
    }

    const handleCancel = () => {
      if (vm.component) {
        vm.component.props.show = false
      }

      if (isFunction(config.onCancel)) {
        config.onCancel()
      }

      resolvePromise?.('cancel')
    }

    const handleClose = async () => {
      await nextTick()
      if (container) {
        render(null, container)
        document.body.removeChild(container)
      }
      container = null

      if (isFunction(config.onClosed)) {
        config.onClosed()
      }
    }

    const handleReturnClose = () => {
      if (vm.component) {
        vm.component.props.show = false
      }
      resolvePromise?.('close')
    }

    const handleUpdateConfig = (updateConfig: DialogUpdateConfig) => {
      if (vm.component) {
        Object.entries(updateConfig).forEach(([key, value]) => {
          vm.component!.props[key] = value
        })
      }
    }

    const defaultConfig = {
      cancelButtonProps: {
        type: 'outline',
      },
      titleAlign: 'start' as const,
      show: true,
      teleport: false,
      unmountOnClose: true,
      onConfirm: handleConfirm,
      onCancel: handleCancel,
      onClosed: handleClose,
    }

    const content = config.content ?? config.message

    const vm = createVNode(
      _Dialog,
      {
        ...defaultConfig,
        ...defaultMethodConfig,
        ...omit(config, ['content', 'message', 'title', 'footer', 'show', 'unmountOnClose', 'onConfirm', 'onCancel', 'onClosed']),
        ...{
          footer: typeof config.footer === 'boolean' ? config.footer : undefined,
        },
      },
      {
        default: getSlotFunction(content),
        title: getSlotFunction(config.title),
        footer: typeof config.footer !== 'boolean' ? getSlotFunction(config.footer) : undefined,
      },
    )

    if (appContext ?? Dialog._context) {
      vm.appContext = appContext ?? Dialog._context
    }

    render(vm, container!)
    document.body.appendChild(container!)

    const dialogReturn: DialogReturn = {
      close: handleReturnClose,
      update: handleUpdateConfig,
    }

    return Object.assign(promise, dialogReturn)
  }
}

const dialog: DialogMethod = {
  open: createDialogMethod(),
  confirm: createDialogMethod({ type: 'warning', simple: true }),
  alert: createDialogMethod({ cancelButton: false, closeOnClickOverlay: false, closeOnKeyEscape: false, simple: true }),
  ...MESSAGE_TYPES.reduce(
    (pre, value) => {
      pre[value] = createDialogMethod({
        cancelButton: false,
        type: value,
        simple: true,
      })
      return pre
    },
    {} as Pick<DialogMethod, 'info' | 'success' | 'warning' | 'error'>,
  ),
}

const Dialog = Object.assign(_Dialog, {
  ...dialog,
  close: () => {},
  setDefaultOptions: (_options: DialogConfig) => {},
  resetDefaultOptions: () => {},
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Dialog.name, _Dialog)

    const dialogWithContext = {} as DialogMethod

    for (const key of Object.keys(dialog) as (keyof DialogMethod)[]) {
      dialogWithContext[key] = (config, appContext = app._context) => dialog[key](config, appContext)
    }

    app.config.globalProperties.$dialog = dialogWithContext
  },
  _context: null as AppContext | null,
})

export type { DialogMethod, DialogConfig, DialogReturn, DialogAction, DialogType, DialogBeforeCloseRefs } from './types'

export default Dialog
