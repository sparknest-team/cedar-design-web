import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconErrorNetwork from './icon-error-network.vue';

export const IconErrorNetwork = Object.assign(_IconErrorNetwork, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconErrorNetwork.name, _IconErrorNetwork);
  }
});

export default IconErrorNetwork;
