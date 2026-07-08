import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconCodeSandbox from './icon-code-sandbox.vue';

export const IconCodeSandbox = Object.assign(_IconCodeSandbox, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCodeSandbox.name, _IconCodeSandbox);
  }
});

export default IconCodeSandbox;
