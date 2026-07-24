import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconInfo from './icon-info.vue';

export const IconInfo = Object.assign(_IconInfo, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconInfo.name, _IconInfo);
  }
});

export default IconInfo;
