import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconUser from './icon-user.vue';

export const IconUser = Object.assign(_IconUser, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconUser.name, _IconUser);
  }
});

export default IconUser;
