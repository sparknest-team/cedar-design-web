import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Search from './search'

const Search = Object.assign(_Search, {
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Search.name, _Search)
  },
})

export * from './props'
export * from './result'

export type SearchInstance = InstanceType<typeof _Search>

export { Search }

export const _SearchComponent = Search

export default Search
