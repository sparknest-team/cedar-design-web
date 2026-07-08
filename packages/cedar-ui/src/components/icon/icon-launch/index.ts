import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconLaunch from './icon-launch.vue';

export const IconLaunch = Object.assign(_IconLaunch, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconLaunch.name, _IconLaunch);
  }
});

export default IconLaunch;
