import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconCommand from './icon-command.vue';

export const IconCommand = Object.assign(_IconCommand, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconCommand.name, _IconCommand);
  }
});

export default IconCommand;
