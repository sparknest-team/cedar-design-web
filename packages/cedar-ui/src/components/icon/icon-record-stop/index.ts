import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconRecordStop from './icon-record-stop.vue';

export const IconRecordStop = Object.assign(_IconRecordStop, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconRecordStop.name, _IconRecordStop);
  }
});

export default IconRecordStop;
