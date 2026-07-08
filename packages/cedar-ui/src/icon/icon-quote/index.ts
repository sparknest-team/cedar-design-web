import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconQuote from './icon-quote.vue';

export const IconQuote = Object.assign(_IconQuote, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconQuote.name, _IconQuote);
  }
});

export default IconQuote;
