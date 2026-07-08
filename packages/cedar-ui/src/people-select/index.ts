import type { App } from 'vue'
import type { ArcoOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _PeopleSelect from './people-select'
import { peopleSelectProps } from './props'

const PeopleSelect = Object.assign(_PeopleSelect, {
  install: (app: App, options?: ArcoOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _PeopleSelect.name, _PeopleSelect)
  },
})

export type PeopleSelectInstance = InstanceType<typeof _PeopleSelect>
export type { PeopleSelectProps } from './props'

export { peopleSelectProps }
export { PeopleSelect }

export const _PeopleSelectComponent = PeopleSelect

export default PeopleSelect
