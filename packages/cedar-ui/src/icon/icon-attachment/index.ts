import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconAttachment from './icon-attachment.vue';

export const IconAttachment = Object.assign(_IconAttachment, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconAttachment.name, _IconAttachment);
  }
});

export default IconAttachment;
