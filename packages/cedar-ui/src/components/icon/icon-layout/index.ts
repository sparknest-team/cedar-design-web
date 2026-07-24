import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconLayout from './icon-layout.vue';

export const IconLayout = Object.assign(_IconLayout, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconLayout.name, _IconLayout);
  }
});

export default IconLayout;
