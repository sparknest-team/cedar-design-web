import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconPalette from './icon-palette.vue';

export const IconPalette = Object.assign(_IconPalette, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPalette.name, _IconPalette);
  }
});

export default IconPalette;
