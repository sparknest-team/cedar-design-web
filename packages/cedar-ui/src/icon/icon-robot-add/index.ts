import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconRobotAdd from './icon-robot-add.vue';

export const IconRobotAdd = Object.assign(_IconRobotAdd, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconRobotAdd.name, _IconRobotAdd);
  }
});

export default IconRobotAdd;
