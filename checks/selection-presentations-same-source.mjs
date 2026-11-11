import { normalizeLessSource, normalizeSelectionEmptyValueImports, normalizeTypeScript, normalizeVueSyntaxSource } from './normalize-source.mjs'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
const workspace = fileURLToPath(new URL('../../', import.meta.url))
const cedar = resolve(workspace, 'cedar-design-web/packages/ui/src')
const maple = resolve(workspace, 'maple-design-mobile/packages/ui/src')
const files = [
  '_components/field-presentation/with-field-presentation.ts',
  '_components/field-presentation/use-field-search.ts',
  '_components/field-presentation/option-labels.ts',
  "select/Option.vue",
  "select/types.ts",
  "select/utils.ts",
  "select/SelectMenu.tsx",
  "select/use-select-controller.ts",
  "select/hooks/use-options.ts",
  "select/SelectDropdown.vue",
  "cascader/types.ts",
  "select/select.tsx",
  "select/hooks/use-select.ts",
  "cascader/cascader-search-panel.tsx",
  "select/emits.ts",
  "cascader/utils.ts",
  "cascader/use-cascader-controller.ts",
  "cascader/use-cascader-focus.ts",
  "cascader/cascader-column.tsx",
  "cascader/CascaderEditorPanel.vue",
  "cascader/CascaderMenu.vue",
  "cascader/Cascader.vue",
  "cascader/cascader-option.tsx",
  "cascader/context.ts",
  "cascader/hooks/use-selected-path.ts",
  "cascader/emits.ts",
  "cascader/base-cascader-panel.tsx",
  "select/Optgroup.vue",
  "select/context.ts",
  "cascader/CascaderPanel.vue",
  "_components/selection-field/use-selection-session.ts",
  "_components/selection-field/SelectionIndicator.vue",
  "_components/selection-field/MenuPresentation.vue",
  "_components/selection-field/style/indicator.less",
  "select/style/index.less",
  "select/style/token.less",
  "cascader/style/index.less",
  "cascader/style/token.less"
]
const toMaple = source => source
  .replaceAll('@cedar-design/icons-vue/icon-right', '@maple-design/icons-vue')
  .replaceAll('@cedar-design/icons-vue/icon-loading', '@maple-design/icons-vue')
  .replaceAll('@cedar-design/icons-vue', '@maple-design/icons-vue')
  .replaceAll('_utils/global-config', 'utils/components')
  .replaceAll('_utils/option-data', 'utils/option-data')
  .replaceAll('../scrollbar', '../_components/selection-scrollbar')
  .replaceAll('--c-', '--mp-').replaceAll('.c-', '.mp-')
for (const file of files) {
  const c = readFileSync(resolve(cedar, file), 'utf8')
  const m = readFileSync(resolve(maple, file), 'utf8')
  const canonical = file.endsWith('.vue') ? normalizeVueSyntaxSource : file.endsWith('.less') ? normalizeLessSource : normalizeTypeScript
  assert.equal(await canonical(normalizeSelectionEmptyValueImports(toMaple(c), file.endsWith('.vue'))), await canonical(m), file + ' differs: copy Cedar and adjust local imports/prefixes')
  assert.doesNotMatch(m, /from ['"][^'"]*(?:cedar-design|@cedar-design\/ui-vue|platform)/)
}
for (const [root, compiler] of [[cedar, '../node_modules/less/package.json'], [maple, '../../cli/node_modules/less/package.json']]) {
  const less = createRequire(resolve(root, compiler))('./')
  for (const component of ['select', 'cascader']) {
    const filename = resolve(root, component, 'style/index.less')
    const { css } = await less.render(readFileSync(filename, 'utf8'), { filename })
    assert.ok(css.includes(component))
  }
}
console.log('Selection presentations: ' + files.length + ' independent source pairs and four Less outputs verified.')
