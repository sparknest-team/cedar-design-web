import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconTags from './icon-tags.vue';

export const IconTags = Object.assign(_IconTags, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconTags.name, _IconTags);
  }
});

export default IconTags;
