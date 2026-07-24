import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconEmptyDefault from './icon-empty-default.vue';

export const IconEmptyDefault = Object.assign(_IconEmptyDefault, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconEmptyDefault.name, _IconEmptyDefault);
  }
});

export default IconEmptyDefault;
