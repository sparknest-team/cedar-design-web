import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconCaretRight from './icon-caret-right.vue';

export const IconCaretRight = Object.assign(_IconCaretRight, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCaretRight.name, _IconCaretRight);
  }
});

export default IconCaretRight;
