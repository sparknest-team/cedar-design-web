import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Button from './button.vue'
import _ButtonGroup from './button-group.vue'
import { buttonProps, buttonGroupProps } from './props'

const Button = Object.assign(_Button, {
  Group: _ButtonGroup,
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Button.name, _Button)
    app.component(componentPrefix + _ButtonGroup.name, _ButtonGroup)
  },
})

export type ButtonInstance = InstanceType<typeof _Button>
export type ButtonGroupInstance = InstanceType<typeof _ButtonGroup>
export type { ButtonProps, ButtonGroupProps, ButtonVariant } from './props'

export { buttonProps, buttonGroupProps }
export { Button }
export { _ButtonGroup as ButtonGroup }

export const _ButtonComponent = Button

export default Button
