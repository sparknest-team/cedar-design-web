import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconReply from './icon-reply.vue';

export const IconReply = Object.assign(_IconReply, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconReply.name, _IconReply);
  }
});

export default IconReply;
