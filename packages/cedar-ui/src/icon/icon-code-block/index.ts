import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconCodeBlock from './icon-code-block.vue';

export const IconCodeBlock = Object.assign(_IconCodeBlock, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCodeBlock.name, _IconCodeBlock);
  }
});

export default IconCodeBlock;
