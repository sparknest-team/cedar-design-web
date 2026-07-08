import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconSubscribeAdd from './icon-subscribe-add.vue';

export const IconSubscribeAdd = Object.assign(_IconSubscribeAdd, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconSubscribeAdd.name, _IconSubscribeAdd);
  }
});

export default IconSubscribeAdd;
