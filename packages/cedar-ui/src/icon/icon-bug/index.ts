import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconBug from './icon-bug.vue';

export const IconBug = Object.assign(_IconBug, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconBug.name, _IconBug);
  }
});

export default IconBug;
