import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Tag from './tag.vue'

const Tag = Object.assign(_Tag, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Tag.name, _Tag)
  },
})

export type TagInstance = InstanceType<typeof _Tag>
export type { TagProps, TagColor, TagVariant } from './types'

export default Tag
