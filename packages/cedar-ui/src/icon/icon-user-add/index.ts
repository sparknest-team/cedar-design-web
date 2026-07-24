import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconUserAdd from './icon-user-add.vue';

export const IconUserAdd = Object.assign(_IconUserAdd, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconUserAdd.name, _IconUserAdd);
  }
});

export default IconUserAdd;
