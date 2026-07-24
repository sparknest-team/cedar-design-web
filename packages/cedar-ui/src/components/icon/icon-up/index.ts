import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconUp from './icon-up.vue';

export const IconUp = Object.assign(_IconUp, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconUp.name, _IconUp);
  }
});

export default IconUp;
