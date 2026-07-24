import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconMan from './icon-man.vue';

export const IconMan = Object.assign(_IconMan, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMan.name, _IconMan);
  }
});

export default IconMan;
