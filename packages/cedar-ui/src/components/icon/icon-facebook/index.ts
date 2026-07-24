import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFacebook from './icon-facebook.vue';

export const IconFacebook = Object.assign(_IconFacebook, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFacebook.name, _IconFacebook);
  }
});

export default IconFacebook;
