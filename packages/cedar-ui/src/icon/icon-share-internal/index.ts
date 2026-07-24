import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconShareInternal from './icon-share-internal.vue';

export const IconShareInternal = Object.assign(_IconShareInternal, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconShareInternal.name, _IconShareInternal);
  }
});

export default IconShareInternal;
