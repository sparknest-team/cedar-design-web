import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconGoogleCircleFill from './icon-google-circle-fill.vue';

export const IconGoogleCircleFill = Object.assign(_IconGoogleCircleFill, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconGoogleCircleFill.name, _IconGoogleCircleFill);
  }
});

export default IconGoogleCircleFill;
