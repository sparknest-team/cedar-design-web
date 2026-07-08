import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSettings from './icon-settings.vue';

export const IconSettings = Object.assign(_IconSettings, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSettings.name, _IconSettings);
  }
});

export default IconSettings;
