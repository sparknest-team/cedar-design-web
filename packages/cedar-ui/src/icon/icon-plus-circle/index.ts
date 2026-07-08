import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconPlusCircle from './icon-plus-circle.vue';

export const IconPlusCircle = Object.assign(_IconPlusCircle, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPlusCircle.name, _IconPlusCircle);
  }
});

export default IconPlusCircle;
