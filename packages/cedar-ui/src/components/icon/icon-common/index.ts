import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCommon from './icon-common.vue';

export const IconCommon = Object.assign(_IconCommon, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCommon.name, _IconCommon);
  }
});

export default IconCommon;
