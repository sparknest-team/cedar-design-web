import type { App } from 'vue'
import type { ArcoOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _DragContainer from './drag-container'
import { dragContainerProps } from './props'

const DragContainer = Object.assign(_DragContainer, {
  install: (app: App, options?: ArcoOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _DragContainer.name, _DragContainer)
  },
})

export type DragContainerInstance = InstanceType<typeof _DragContainer>
export type { DragContainerProps, DragOptions } from './props'

export { dragContainerProps }
export { DragContainer }

export const _DragContainerComponent = DragContainer

export default DragContainer
