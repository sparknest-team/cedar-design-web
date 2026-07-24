import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconLiveBroadcast from './icon-live-broadcast.vue';

export const IconLiveBroadcast = Object.assign(_IconLiveBroadcast, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconLiveBroadcast.name, _IconLiveBroadcast);
  }
});

export default IconLiveBroadcast;
