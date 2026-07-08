import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconDice from './icon-dice.vue';

export const IconDice = Object.assign(_IconDice, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconDice.name, _IconDice);
  }
});

export default IconDice;
