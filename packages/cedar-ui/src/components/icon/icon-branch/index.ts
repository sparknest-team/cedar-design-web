import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconBranch from './icon-branch.vue';

export const IconBranch = Object.assign(_IconBranch, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconBranch.name, _IconBranch);
  }
});

export default IconBranch;
