import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconInfo from './icon-info.vue';

export const IconInfo = Object.assign(_IconInfo, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconInfo.name, _IconInfo);
  }
});

export default IconInfo;
