import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconRecord from './icon-record.vue';

export const IconRecord = Object.assign(_IconRecord, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconRecord.name, _IconRecord);
  }
});

export default IconRecord;
