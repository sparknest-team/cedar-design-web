import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconTag from './icon-tag.vue';

export const IconTag = Object.assign(_IconTag, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconTag.name, _IconTag);
  }
});

export default IconTag;
