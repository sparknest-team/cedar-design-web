import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconPlusCircleFill from './icon-plus-circle-fill.vue';

export const IconPlusCircleFill = Object.assign(_IconPlusCircleFill, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPlusCircleFill.name, _IconPlusCircleFill);
  }
});

export default IconPlusCircleFill;
