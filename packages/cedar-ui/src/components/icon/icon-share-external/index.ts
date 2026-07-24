import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconShareExternal from './icon-share-external.vue';

export const IconShareExternal = Object.assign(_IconShareExternal, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconShareExternal.name, _IconShareExternal);
  }
});

export default IconShareExternal;
