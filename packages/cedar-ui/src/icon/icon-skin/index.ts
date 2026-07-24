import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconSkin from './icon-skin.vue';

export const IconSkin = Object.assign(_IconSkin, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSkin.name, _IconSkin);
  }
});

export default IconSkin;
