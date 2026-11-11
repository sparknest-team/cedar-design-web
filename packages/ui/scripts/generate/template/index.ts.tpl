import type { App } from 'vue'
import _<%= pascalCaseName %> from './<%= name %><%= type === 'sfc' ? '.vue' : '' %>'
import { getComponentPrefix } from '../_utils/global-config'

export const <%= pascalCaseName %> = Object.assign(_<%= pascalCaseName %>, {
  install: (app: App, options?: any) => {
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _<%= pascalCaseName %>.name, _<%= pascalCaseName %>)
  },
})

export type <%= pascalCaseName %>Instance = InstanceType<typeof _<%= pascalCaseName %>>
export default <%= pascalCaseName %>
