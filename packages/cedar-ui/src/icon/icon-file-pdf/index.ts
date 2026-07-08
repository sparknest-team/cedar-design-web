import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _IconFilePdf from './icon-file-pdf.vue';

export const IconFilePdf = Object.assign(_IconFilePdf, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _IconFilePdf.name, _IconFilePdf);
  }
});

export default IconFilePdf;
