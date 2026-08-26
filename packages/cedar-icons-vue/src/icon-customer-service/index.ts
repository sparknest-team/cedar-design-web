import type { App } from 'vue'
import type { CedarIconOptions } from '../_utils/types'
import _IconCustomerService from './icon-customer-service.vue'

export const IconCustomerService = Object.assign(_IconCustomerService, {
  install(app: App, options?: CedarIconOptions) {
    app.component(options?.iconPrefix ? options.iconPrefix + 'IconCustomerService' : _IconCustomerService.name, _IconCustomerService)
  },
})
