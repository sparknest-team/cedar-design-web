// These imports are shared by the docs shell and component demos. Include their
// public spellings up front so Vite doesn't invalidate the module graph and
// reload an already compiled page when it discovers a demo's Day.js imports.
const plugins = ['advancedFormat', 'customParseFormat', 'isBetween', 'quarterOfYear', 'weekOfYear', 'weekYear']
const locales = ['zh-cn', 'zh-tw', 'zh-hk', 'ja', 'fa']
export const docsDevDependencies = [
  'vue', 'vue-router', '@vueuse/core',
  'b-validate', 'b-tween', 'rrule', '@js-temporal/polyfill', 'dayjs',
  'decimal.js', 'number-precision', 'resize-observer-polyfill', 'zod', 'lodash-es', 'scroll-into-view-if-needed', 'sortablejs',
  ...[...plugins.map(name => `dayjs/plugin/${name}`), ...locales.map(name => `dayjs/locale/${name}`)]
    .flatMap(name => [name, `${name}.js`]),
]
