import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _LayoutForm from './layout-form'
import { layoutFormProps } from './props'

export { ComponentEnum } from './mapping'
export type { IRenderComponent } from './RenderComponent'
export type { LayoutFormProps } from './props'

const LayoutForm = Object.assign(_LayoutForm, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _LayoutForm.name, _LayoutForm)
  },
})

export type LayoutFormInstance = InstanceType<typeof _LayoutForm>

export { layoutFormProps }
export { LayoutForm }

export const _LayoutFormComponent = LayoutForm

export default LayoutForm
