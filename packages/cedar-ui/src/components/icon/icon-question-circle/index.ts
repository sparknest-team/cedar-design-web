import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconQuestionCircle from './icon-question-circle.vue';

export const IconQuestionCircle = Object.assign(_IconQuestionCircle, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconQuestionCircle.name, _IconQuestionCircle);
  }
});

export default IconQuestionCircle;
