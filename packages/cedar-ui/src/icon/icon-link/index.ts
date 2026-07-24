import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconLink from './icon-link.vue';

export const IconLink = Object.assign(_IconLink, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconLink.name, _IconLink);
  }
});

export default IconLink;
