import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCustomerService from './icon-customer-service.vue';

export const IconCustomerService = Object.assign(_IconCustomerService, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCustomerService.name, _IconCustomerService);
  }
});

export default IconCustomerService;
