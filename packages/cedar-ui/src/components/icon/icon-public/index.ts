import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconPublic from './icon-public.vue';

export const IconPublic = Object.assign(_IconPublic, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPublic.name, _IconPublic);
  }
});

export default IconPublic;
