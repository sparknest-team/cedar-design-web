import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCode from './icon-code.vue';

export const IconCode = Object.assign(_IconCode, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCode.name, _IconCode);
  }
});

export default IconCode;
