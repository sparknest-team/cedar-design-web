import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconExpand from './icon-expand.vue';

export const IconExpand = Object.assign(_IconExpand, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconExpand.name, _IconExpand);
  }
});

export default IconExpand;
