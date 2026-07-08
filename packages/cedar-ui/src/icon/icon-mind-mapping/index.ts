import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconMindMapping from './icon-mind-mapping.vue';

export const IconMindMapping = Object.assign(_IconMindMapping, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconMindMapping.name, _IconMindMapping);
  }
});

export default IconMindMapping;
