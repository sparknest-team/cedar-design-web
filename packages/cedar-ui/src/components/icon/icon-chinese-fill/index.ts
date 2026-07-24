import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconChineseFill from './icon-chinese-fill.vue';

export const IconChineseFill = Object.assign(_IconChineseFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconChineseFill.name, _IconChineseFill);
  }
});

export default IconChineseFill;
