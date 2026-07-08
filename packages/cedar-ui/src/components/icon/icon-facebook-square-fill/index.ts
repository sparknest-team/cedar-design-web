import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconFacebookSquareFill from './icon-facebook-square-fill.vue';

export const IconFacebookSquareFill = Object.assign(_IconFacebookSquareFill, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFacebookSquareFill.name, _IconFacebookSquareFill);
  }
});

export default IconFacebookSquareFill;
