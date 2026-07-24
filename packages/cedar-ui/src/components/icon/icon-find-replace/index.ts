import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFindReplace from './icon-find-replace.vue';

export const IconFindReplace = Object.assign(_IconFindReplace, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFindReplace.name, _IconFindReplace);
  }
});

export default IconFindReplace;
