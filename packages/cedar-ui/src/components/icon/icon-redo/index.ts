import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconRedo from './icon-redo.vue';

export const IconRedo = Object.assign(_IconRedo, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconRedo.name, _IconRedo);
  }
});

export default IconRedo;
