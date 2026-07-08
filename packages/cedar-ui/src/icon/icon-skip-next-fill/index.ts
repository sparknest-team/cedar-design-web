import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSkipNextFill from './icon-skip-next-fill.vue';

export const IconSkipNextFill = Object.assign(_IconSkipNextFill, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSkipNextFill.name, _IconSkipNextFill);
  }
});

export default IconSkipNextFill;
