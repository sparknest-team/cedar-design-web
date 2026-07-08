import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconShareAlt from './icon-share-alt.vue';

export const IconShareAlt = Object.assign(_IconShareAlt, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconShareAlt.name, _IconShareAlt);
  }
});

export default IconShareAlt;
