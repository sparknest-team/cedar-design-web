import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconLanguage from './icon-language.vue';

export const IconLanguage = Object.assign(_IconLanguage, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconLanguage.name, _IconLanguage);
  }
});

export default IconLanguage;
