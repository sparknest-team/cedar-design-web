import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconPrinter from './icon-printer.vue';

export const IconPrinter = Object.assign(_IconPrinter, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconPrinter.name, _IconPrinter);
  }
});

export default IconPrinter;
