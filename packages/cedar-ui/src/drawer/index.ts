import type { AppContext } from 'vue'
import { createVNode, nextTick, render } from 'vue'
import { getOverlay } from '../_utils/dom'
import { withInstall } from '../_utils/global-config'
import { isFunction } from '../_utils/is'
import { omit } from '../_utils/omit'
import { getSlotFunction } from '../_utils/vue-utils'
import _Drawer from './Drawer.vue'
import { drawerProps } from './props'
import type { DrawerConfig, DrawerMethod, DrawerUpdateConfig } from './types'

const open = (config: DrawerConfig, appContext?: AppContext) => {
  let container: HTMLElement | null = getOverlay('drawer')

  const handleConfirm = () => {
    if (vm.component) {
      vm.component.props.open = false
    }

    if (isFunction(config.onConfirm)) {
      config.onConfirm()
    }
  }

  const handleCancel = () => {
    if (vm.component) {
      vm.component.props.open = false
    }

    if (isFunction(config.onCancel)) {
      config.onCancel()
    }
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
      vm.component.props.open = false
    }
  }

  const handleUpdateConfig = (config: DrawerUpdateConfig) => {
    if (vm.component) {
      Object.entries(config).forEach(([key, value]) => {
        vm.component!.props[key] = value
      })
    }
  }

  const defaultConfig = {
    open: true,
    popupContainer: false,
    unmountOnClose: true,
    onConfirm: handleConfirm,
    onCancel: handleCancel,
    onClosed: handleClose,
  }

  // @ts-ignore
  const vm = createVNode(
    _Drawer,
    {
      ...defaultConfig,
      ...omit(config, [
        'content',
        'title',
        'footer',
        'open',
        'unmountOnClose',
        'onConfirm',
        'onCancel',
        'onClosed',
        'beforeConfirm',
        'beforeCancel',
      ]),
      ...{
        header: typeof config.header === 'boolean' ? config.header : undefined,
        footer: typeof config.footer === 'boolean' ? config.footer : undefined,
        beforeConfirm: config.beforeConfirm,
        beforeCancel: config.beforeCancel,
      },
    },
    {
      default: getSlotFunction(config.content),
      header: typeof config.header !== 'boolean' ? getSlotFunction(config.header) : undefined,
      title: getSlotFunction(config.title),
      footer: typeof config.footer !== 'boolean' ? getSlotFunction(config.footer) : undefined,
    },
  )

  if (appContext ?? Drawer._context) {
    vm.appContext = appContext ?? Drawer._context
  }

  render(vm, container)
  document.body.appendChild(container)

  return {
    close: handleReturnClose,
    update: handleUpdateConfig,
  }
}

const Drawer = withInstall(_Drawer, Object.assign(_Drawer, {
  open,
  _context: null as AppContext | null,
}), {
  setup: (app) => {
    const drawerWithContext: DrawerMethod = {
      open: (config, appContext = app._context) => open(config, appContext),
    }
    app.config.globalProperties.$drawer = drawerWithContext
  },
})

export type { DrawerMethod, DrawerConfig, DrawerReturn } from './types'

export type DrawerInstance = InstanceType<typeof _Drawer>
export type { DrawerPlacement, DrawerProps } from './props'
export { Drawer, drawerProps }
export const _DrawerComponent = Drawer

export default Drawer
