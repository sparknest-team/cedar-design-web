import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconEnglishFill from './icon-english-fill.vue';

export const IconEnglishFill = Object.assign(_IconEnglishFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconEnglishFill.name, _IconEnglishFill);
  }
});

export default IconEnglishFill;
