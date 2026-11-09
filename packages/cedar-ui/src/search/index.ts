import { withInstall } from '../_utils/global-config'
import { searchProps } from './props'
import _Search from './search.vue'

const Search = withInstall(_Search, Object.assign(_Search, {}), {
  components: [_Search],
})

export * from './props'
export * from './result'

export type SearchInstance = InstanceType<typeof _Search>

export { Search, searchProps }

export const _SearchComponent = Search

export default Search

export type { SearchEmits, SearchSlots, SearchExpose } from './types'
