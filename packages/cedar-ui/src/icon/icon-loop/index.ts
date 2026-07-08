import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconLoop from './icon-loop.vue';

export const IconLoop = Object.assign(_IconLoop, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconLoop.name, _IconLoop);
  }
});

export default IconLoop;
