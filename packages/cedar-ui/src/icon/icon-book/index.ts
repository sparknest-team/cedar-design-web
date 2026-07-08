import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconBook from './icon-book.vue';

export const IconBook = Object.assign(_IconBook, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconBook.name, _IconBook);
  }
});

export default IconBook;
