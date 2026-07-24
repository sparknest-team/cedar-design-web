import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconIdcard from './icon-idcard.vue';

export const IconIdcard = Object.assign(_IconIdcard, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconIdcard.name, _IconIdcard);
  }
});

export default IconIdcard;
