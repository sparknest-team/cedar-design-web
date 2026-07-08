import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconComputer from './icon-computer.vue';

export const IconComputer = Object.assign(_IconComputer, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconComputer.name, _IconComputer);
  }
});

export default IconComputer;
