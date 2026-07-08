import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconGithub from './icon-github.vue';

export const IconGithub = Object.assign(_IconGithub, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconGithub.name, _IconGithub);
  }
});

export default IconGithub;
