import { createRequire } from 'node:module';
import { normalizeCopiedSource, normalizeCopiedTypeScript } from '../../design-ui/bin/copied-source-normalization.mjs';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const { transformSync } = createRequire(new URL('../../maple-design-mobile/node_modules/.pnpm/node_modules/esbuild/package.json', import.meta.url))('esbuild');
const canonical = source => normalizeCopiedTypeScript(normalizeCopiedSource(source), transformSync, 'ts');

const workspace = fileURLToPath(new URL('../../', import.meta.url));
const cedar = resolve(workspace, 'cedar-design-web/packages/cedar-ui/src');
const maple = resolve(workspace, 'maple-design-mobile/packages/maple-ui/src');
const read = (root, file) => readFileSync(resolve(root, file), 'utf8');
const normalize = source => source
  .replaceAll('`c${Capitalize<string>}`', '`mp${Capitalize<string>}`')
  .replaceAll('../_utils/maple/elements', '../utils/elements')
  .replaceAll('../_utils/global-config', '../utils/components')
  .replaceAll('cedar-theme', 'platform-theme')
  .replaceAll('maple-theme', 'platform-theme')
  .replaceAll('data-c-theme', 'data-platform-theme')
  .replaceAll('data-mp-theme', 'data-platform-theme')
  .replaceAll('--c-', '--platform-').replaceAll('--mp-', '--platform-')
  .replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '')
  .replace(/[\s'";,]/g, '');
for (const file of ['theme-provider/props.ts', 'theme-provider/context.ts', 'style/theme/local-scope.less']) {
  const compare = file.endsWith('.ts') ? canonical : normalize;
  assert.equal(compare(read(cedar, file)), compare(read(maple, file)), `${file}: platform drift`);
}
const template = source => source.match(/<template>[\s\S]*<\/template>/)[0];
assert.equal(normalize(template(read(cedar, 'theme-provider/ThemeProvider.vue'))), normalize(template(read(maple, 'theme-provider/ThemeProvider.vue'))));
for (const root of [cedar, maple]) {
  assert.doesNotMatch(read(root, 'button/Button.vue'), /touchstart|handleTouchstart/);
  assert.doesNotMatch(read(root, 'button/use-button.ts'), /touchstart|handleTouchstart/);
  assert.match(read(root, 'trigger/popup.ts'), /themeScope\.value/);
}
assert.doesNotMatch(read(cedar, 'nav-menu/props.ts'), /\btheme\s*:/);
assert.doesNotMatch(read(cedar, 'layout/Sider.vue'), /\btheme\s*:/);
console.log('Local theme contract passed: props, nested context, CSS boundaries, popup propagation and retired APIs.');
