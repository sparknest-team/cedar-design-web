import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCaretDown from './icon-caret-down.vue';

export const IconCaretDown = Object.assign(_IconCaretDown, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCaretDown.name, _IconCaretDown);
  }
});

export default IconCaretDown;
