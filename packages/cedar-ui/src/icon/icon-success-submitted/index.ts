import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconSuccessSubmitted from './icon-success-submitted.vue';

export const IconSuccessSubmitted = Object.assign(_IconSuccessSubmitted, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSuccessSubmitted.name, _IconSuccessSubmitted);
  }
});

export default IconSuccessSubmitted;
