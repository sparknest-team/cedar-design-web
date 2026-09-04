import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import test from 'node:test'
import { CedarResolver } from '../lib/index.js'

const [components, directives] = CedarResolver()

test('resolves UI components with their styles', () => {
  assert.deepEqual(components.resolve('CProgressGroup'), {
    from: '@cedarjs/ui',
    name: '_ProgressGroupComponent',
    sideEffects: ['@cedarjs/ui/progress-group/style'],
  })

  assert.deepEqual(components.resolve('CButton'), {
    from: '@cedarjs/ui',
    name: '_ButtonComponent',
    sideEffects: ['@cedarjs/ui/button/style'],
  })

  assert.deepEqual(components.resolve('CIcon'), {
    from: '@cedarjs/ui',
    name: '_IconComponent',
    sideEffects: ['@cedarjs/ui/icon/style'],
  })

  assert.deepEqual(components.resolve('CDatePicker'), {
    from: '@cedarjs/ui',
    name: '_DatePickerComponent',
    sideEffects: ['@cedarjs/ui/date/picker/style'],
  })

  assert.deepEqual(components.resolve('CButtonGroup'), {
    from: '@cedarjs/ui',
    name: '_ButtonGroupComponent',
    sideEffects: ['@cedarjs/ui/button/style'],
  })

  assert.deepEqual(components.resolve('CCountdown'), {
    from: '@cedarjs/ui',
    name: '_CountdownComponent',
    sideEffects: ['@cedarjs/ui/countdown/style'],
  })
})

test('maps sub-components to their parent style directory', () => {
  for (const [name, dir] of [
    ['COption', 'select'],
    ['CMenuOption', 'menu'],
    ['CTypographyText', 'typography'],
    ['CStep', 'steps'],
    ['CAnchorLink', 'anchor'],
    ['CTableColumn', 'table'],
    ['CLayoutHeader', 'layout'],
    ['CInputGroup', 'input'],
    ['CSkeletonLine', 'skeleton'],
    ['CImagePreview', 'image'],
    ['CCascaderPanel', 'cascader'],
  ]) {
    assert.deepEqual(components.resolve(name), {
      from: '@cedarjs/ui',
      name: `_${name.slice(1)}Component`,
      sideEffects: [`@cedarjs/ui/${dir}/style`],
    })
  }
})

test('resolves every public component to an existing style entry', () => {
  const uiRoot = new URL('../../cedar-ui/src/', import.meta.url)
  const componentNames = new Set()

  for (const entry of readdirSync(uiRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    for (const file of ['index.ts', 'index.tsx']) {
      const indexUrl = new URL(`${entry.name}/${file}`, uiRoot)
      if (!existsSync(indexUrl)) continue
      const source = readFileSync(indexUrl, 'utf8')
      for (const match of source.matchAll(/\b_([A-Z][A-Za-z0-9]*)Component\b/g)) {
        componentNames.add(match[1])
      }
    }
  }

  for (const name of componentNames) {
    const result = components.resolve(`C${name}`)
    assert.ok(result, `C${name} should resolve`)
    assert.equal(result.name, `_${name}Component`)
    for (const sideEffect of result.sideEffects ?? []) {
      const stylePath = sideEffect.replace('@cedarjs/ui/', '')
      assert.ok(existsSync(new URL(`${stylePath}/index.ts`, uiRoot)), `${sideEffect} should exist`)
    }
  }
})

test('every component exposed by CedarVue has a resolver alias', () => {
  const uiRoot = new URL('../../cedar-ui/src/', import.meta.url)
  const cedarVueSource = readFileSync(new URL('cedar-vue.ts', uiRoot), 'utf8')
  const publicComponents = new Set()
  const resolverAliases = new Set()

  for (const match of cedarVueSource.matchAll(
    /^import\s+([A-Z][A-Za-z0-9]*)(?:,\s*\{([^}]+)\})?\s+from\s+'\.\/[^']+'/gm,
  )) {
    publicComponents.add(match[1])
    for (const name of (match[2] ?? '').split(',').map((item) => item.trim()).filter(Boolean)) {
      publicComponents.add(name)
    }
  }

  for (const entry of readdirSync(uiRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    for (const file of ['index.ts', 'index.tsx']) {
      const indexUrl = new URL(`${entry.name}/${file}`, uiRoot)
      if (!existsSync(indexUrl)) continue
      const source = readFileSync(indexUrl, 'utf8')
      for (const match of source.matchAll(/\b_([A-Z][A-Za-z0-9]*)Component\b/g)) {
        resolverAliases.add(match[1])
      }
    }
  }

  // Function API exported by cedar-vue, not a component used as <c-image-preview-fn>.
  publicComponents.delete('ImagePreviewFn')

  assert.deepEqual(
    [...publicComponents].filter((name) => !resolverAliases.has(name)).sort(),
    [],
  )
})

test('resolves components without styles with no side effects', () => {
  for (const name of ['CColor', 'CContext', 'CSplitButton', 'CStyleProvider']) {
    assert.deepEqual(components.resolve(name), {
      from: '@cedarjs/ui',
      name: `_${name.slice(1)}Component`,
      sideEffects: undefined,
    })
  }
})

test('resolves SVG icons from the standalone icon package', () => {
  assert.deepEqual(components.resolve('CIconCheckCircleFill'), {
    from: '@cedarjs/icons-vue/icon-check-circle-fill',
    name: 'IconCheckCircleFill',
  })

  assert.deepEqual(components.resolve('CIconFaceBookCircleFill'), {
    from: '@cedarjs/icons-vue/icon-face-book-circle-fill',
    name: 'IconFaceBookCircleFill',
  })
})

test('resolves programmatic APIs and directives', () => {
  const [autoImports] = CedarResolver()
  for (const [name, style] of [
    ['Dialog', 'dialog'],
    ['Drawer', 'drawer'],
    ['ImagePreviewFn', 'image'],
    ['Message', 'message'],
    ['Notification', 'notification'],
    ['previewImage', 'image'],
  ]) {
    assert.equal(autoImports.resolve(name)?.name, name)
    assert.deepEqual(autoImports.resolve(name)?.sideEffects, [`@cedarjs/ui/${style}/style`])
  }
  assert.deepEqual(autoImports.resolve('StyleProvider'), {
    from: '@cedarjs/ui',
    name: 'StyleProvider',
    sideEffects: undefined,
  })
  assert.equal(directives.resolve('Loading')?.name, 'vLoading')
  assert.equal(directives.resolve('Tooltip')?.name, 'vTooltip')
})

test('can disable styles and directives', () => {
  const [noStyleComponents, noDirectives] = CedarResolver({ importStyle: false, directives: false })
  assert.equal(noStyleComponents.resolve('CButton')?.sideEffects, undefined)
  assert.equal(noDirectives.resolve('Loading'), undefined)
})

test('can disable programmatic API resolution', () => {
  const [components] = CedarResolver({ autoImport: false })
  assert.equal(components.resolve('Message'), undefined)
})
