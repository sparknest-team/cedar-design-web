import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconInteraction from './icon-interaction.vue';

export const IconInteraction = Object.assign(_IconInteraction, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconInteraction.name, _IconInteraction);
  }
});

export default IconInteraction;
