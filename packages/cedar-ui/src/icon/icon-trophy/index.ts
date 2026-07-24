import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconTrophy from './icon-trophy.vue';

export const IconTrophy = Object.assign(_IconTrophy, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconTrophy.name, _IconTrophy);
  }
});

export default IconTrophy;
