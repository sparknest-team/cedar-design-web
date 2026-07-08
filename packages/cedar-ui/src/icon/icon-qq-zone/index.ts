import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconQqZone from './icon-qq-zone.vue';

export const IconQqZone = Object.assign(_IconQqZone, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconQqZone.name, _IconQqZone);
  }
});

export default IconQqZone;
