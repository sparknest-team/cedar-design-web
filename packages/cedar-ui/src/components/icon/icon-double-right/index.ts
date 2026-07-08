import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconDoubleRight from './icon-double-right.vue';

export const IconDoubleRight = Object.assign(_IconDoubleRight, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDoubleRight.name, _IconDoubleRight);
  }
});

export default IconDoubleRight;
