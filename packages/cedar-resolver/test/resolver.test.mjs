import assert from 'node:assert/strict'
import test from 'node:test'
import { CedarResolver } from '../lib/index.js'

const [components, directives] = CedarResolver()

test('resolves UI components with their styles', () => {
  assert.deepEqual(components.resolve('CButton'), {
    from: '@cedarjs/ui',
    name: 'Button',
    sideEffects: ['@cedarjs/ui/button/style'],
  })

  assert.deepEqual(components.resolve('CIcon'), {
    from: '@cedarjs/ui',
    name: 'Icon',
    sideEffects: ['@cedarjs/ui/icon/style'],
  })
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
  assert.equal(autoImports.resolve('Message')?.name, 'Message')
  assert.deepEqual(autoImports.resolve('Message')?.sideEffects, ['@cedarjs/ui/message/style'])
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
