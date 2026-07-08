import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSkipNext from './icon-skip-next.vue';

export const IconSkipNext = Object.assign(_IconSkipNext, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSkipNext.name, _IconSkipNext);
  }
});

export default IconSkipNext;
