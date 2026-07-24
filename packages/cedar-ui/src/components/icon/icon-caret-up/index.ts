import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCaretUp from './icon-caret-up.vue';

export const IconCaretUp = Object.assign(_IconCaretUp, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCaretUp.name, _IconCaretUp);
  }
});

export default IconCaretUp;
