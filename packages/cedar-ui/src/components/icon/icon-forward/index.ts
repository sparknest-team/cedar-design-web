import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconForward from './icon-forward.vue';

export const IconForward = Object.assign(_IconForward, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconForward.name, _IconForward);
  }
});

export default IconForward;
