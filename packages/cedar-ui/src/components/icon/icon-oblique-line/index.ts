import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconObliqueLine from './icon-oblique-line.vue';

export const IconObliqueLine = Object.assign(_IconObliqueLine, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconObliqueLine.name, _IconObliqueLine);
  }
});

export default IconObliqueLine;
