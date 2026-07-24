import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Textarea from './textarea.vue'

const Textarea = Object.assign(_Textarea, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Textarea.name, _Textarea)
  },
})

export type TextareaInstance = InstanceType<typeof _Textarea>

export default Textarea
