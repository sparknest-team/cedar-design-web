import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconGitlab from './icon-gitlab.vue';

export const IconGitlab = Object.assign(_IconGitlab, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconGitlab.name, _IconGitlab);
  }
});

export default IconGitlab;
