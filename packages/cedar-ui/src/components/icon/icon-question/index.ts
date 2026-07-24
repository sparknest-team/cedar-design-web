import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconQuestion from './icon-question.vue';

export const IconQuestion = Object.assign(_IconQuestion, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconQuestion.name, _IconQuestion);
  }
});

export default IconQuestion;
