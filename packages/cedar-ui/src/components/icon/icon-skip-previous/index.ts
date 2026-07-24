import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconSkipPrevious from './icon-skip-previous.vue';

export const IconSkipPrevious = Object.assign(_IconSkipPrevious, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSkipPrevious.name, _IconSkipPrevious);
  }
});

export default IconSkipPrevious;
