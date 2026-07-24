import type { App } from 'vue';
import type { CedarIconOptions } from '../../_utils/types';
import _IconFormula from './icon-formula.vue';

export const IconFormula = Object.assign(_IconFormula, {
  install: (app: App, options?: CedarIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFormula.name, _IconFormula);
  }
});

export default IconFormula;
