import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconStrikethrough from './icon-strikethrough.vue';

export const IconStrikethrough = Object.assign(_IconStrikethrough, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconStrikethrough.name, _IconStrikethrough);
  }
});

export default IconStrikethrough;
