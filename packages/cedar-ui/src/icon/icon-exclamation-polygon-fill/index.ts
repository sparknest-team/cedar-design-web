import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconExclamationPolygonFill from './icon-exclamation-polygon-fill.vue';

export const IconExclamationPolygonFill = Object.assign(_IconExclamationPolygonFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconExclamationPolygonFill.name, _IconExclamationPolygonFill);
  }
});

export default IconExclamationPolygonFill;
