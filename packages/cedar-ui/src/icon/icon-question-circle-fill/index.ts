import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconQuestionCircleFill from './icon-question-circle-fill.vue';

export const IconQuestionCircleFill = Object.assign(_IconQuestionCircleFill, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconQuestionCircleFill.name, _IconQuestionCircleFill);
  }
});

export default IconQuestionCircleFill;
