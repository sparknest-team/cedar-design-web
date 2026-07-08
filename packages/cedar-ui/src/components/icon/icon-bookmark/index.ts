import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconBookmark from './icon-bookmark.vue';

export const IconBookmark = Object.assign(_IconBookmark, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconBookmark.name, _IconBookmark);
  }
});

export default IconBookmark;
