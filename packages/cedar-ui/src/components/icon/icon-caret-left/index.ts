import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCaretLeft from './icon-caret-left.vue';

export const IconCaretLeft = Object.assign(_IconCaretLeft, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCaretLeft.name, _IconCaretLeft);
  }
});

export default IconCaretLeft;
