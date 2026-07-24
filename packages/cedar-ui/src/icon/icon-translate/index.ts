import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconTranslate from './icon-translate.vue';

export const IconTranslate = Object.assign(_IconTranslate, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconTranslate.name, _IconTranslate);
  }
});

export default IconTranslate;
