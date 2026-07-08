import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconScissor from './icon-scissor.vue';

export const IconScissor = Object.assign(_IconScissor, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconScissor.name, _IconScissor);
  }
});

export default IconScissor;
