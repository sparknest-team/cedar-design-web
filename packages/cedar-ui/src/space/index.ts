import type { App } from 'vue'
import type { ArcoOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Space from './space'
import { spaceProps } from './props'

const Space = Object.assign(_Space, {
  install: (app: App, options?: ArcoOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Space.name, _Space)
  },
})

export type SpaceInstance = InstanceType<typeof _Space>
export type {
  SpaceProps,
  SpaceAlign,
  SpaceDirection,
  SpaceJustify,
  SpaceInternalSize,
  SpaceSize,
} from './props'

export { spaceProps }
export { Space }

export const _SpaceComponent = Space

export default Space
