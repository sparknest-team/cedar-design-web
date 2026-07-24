import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconOriginalSize from './icon-original-size.vue';

export const IconOriginalSize = Object.assign(_IconOriginalSize, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconOriginalSize.name, _IconOriginalSize);
  }
});

export default IconOriginalSize;
