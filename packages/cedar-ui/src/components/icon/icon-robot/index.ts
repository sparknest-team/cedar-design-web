import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconRobot from './icon-robot.vue';

export const IconRobot = Object.assign(_IconRobot, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconRobot.name, _IconRobot);
  }
});

export default IconRobot;
