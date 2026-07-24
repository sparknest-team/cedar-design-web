import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconUserGroup from './icon-user-group.vue';

export const IconUserGroup = Object.assign(_IconUserGroup, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconUserGroup.name, _IconUserGroup);
  }
});

export default IconUserGroup;
