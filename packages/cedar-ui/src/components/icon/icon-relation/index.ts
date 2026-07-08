import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconRelation from './icon-relation.vue';

export const IconRelation = Object.assign(_IconRelation, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconRelation.name, _IconRelation);
  }
});

export default IconRelation;
