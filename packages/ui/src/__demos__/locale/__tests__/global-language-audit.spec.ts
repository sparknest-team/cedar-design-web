// @vitest-environment node
import { globSync, readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { parse as parseTemplate } from '@vue/compiler-dom'
import { compileScript, compileTemplate, parse } from '@vue/compiler-sfc'
import ts from 'typescript-js'
import { describe, expect, it } from 'vitest'
import normalizedDemos from './normalized-demos.json'

const root = resolve(import.meta.dirname, '../../../..')
const localizedDemos = globSync('src/**/__demos__/**/*.en-US.vue', { cwd: root })
function bilingual(value: string) {
  const parts = value.trim().split(' / ')
  if (parts.length !== 2) return false
  const chinese = /\p{Script=Han}/u
  if (['Enter', 'Space', 'Tab', 'Home', 'End'].includes(parts[0])) return false
  return (
    (chinese.test(parts[0]) && !chinese.test(parts[1]) && /[A-Za-z]/.test(parts[1])) ||
    (chinese.test(parts[1]) && !chinese.test(parts[0]) && /[A-Za-z]/.test(parts[0]))
  )
}
const languageName = /^(?:english|isEnglish|isEn|lang|language|locale)$/i

const siteLanguages = new Set(['zh-CN', 'en-US'])
const equalityOperators = new Set<ts.SyntaxKind>([
  ts.SyntaxKind.EqualsEqualsToken,
  ts.SyntaxKind.EqualsEqualsEqualsToken,
  ts.SyntaxKind.ExclamationEqualsToken,
  ts.SyntaxKind.ExclamationEqualsEqualsToken,
])

function inspectScript(code: string, report: (reason: string) => void) {
  const tree = ts.createSourceFile('demo.tsx', code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  function script(node: ts.Node) {
    if (ts.isIdentifier(node) && node.text === 'useDemoLocale')
      report('private demo language helper: the document route selects the localized example')
    if ((ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) && bilingual(node.text))
      report('mixed bilingual literal')
    if (ts.isIdentifier(node) && languageName.test(node.text)) report(`local language identifier ${node.text}`)
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      ['useLocale', 'addI18nMessages'].includes(node.expression.text)
    )
      report('local language mutation')
    if (
      ts.isBinaryExpression(node) &&
      equalityOperators.has(node.operatorToken.kind) &&
      [node.left, node.right].some((operand) => ts.isStringLiteralLike(operand) && siteLanguages.has(operand.text))
    )
      report('local language comparison: the site selects the language')
    ts.forEachChild(node, script)
  }
  script(tree)
}

describe('all component demos follow the global language', () => {
  it.each([
    "english.value = language === 'en-US'",
    "watch(getLocale, (next) => { active.value = next === 'en-US' })",
    "'zh-CN' !== getLocale() ? first : second",
  ])('rejects a local language comparison in %s', (code) => {
    const reasons: string[] = []
    inspectScript(code, (reason) => reasons.push(reason))
    expect(reasons).toContain('local language comparison: the site selects the language')
  })

  it('contains no local language selectors, bilingual DOM, or browser-dependent formatting', () => {
    const violations: string[] = []
    const files = globSync('src/**/__demos__/**/*.vue', { cwd: root })
    expect(files.length).toBeGreaterThan(1000)
    for (const file of files) {
      const source = readFileSync(resolve(root, file), 'utf8')
      const { descriptor } = parse(source, { filename: file })
      function report(reason: string) {
        violations.push(`${file}: ${reason}`)
      }
      if (/from\s*["'][^"']*__demos__\/locale(?:\/[^"']*)?["']/.test(source))
        report('copyable demo imports a private documentation language module')
      for (const style of descriptor.styles) {
        if (/\[lang\s*[=|]/.test(style.content)) report('CSS language branch')
      }
      function template(node: any) {
        if (node.type === 5) inspectScript(node.content.content, report)
        if (
          node.type === 2 &&
          (bilingual(node.content) || /[。！？]\s*[A-Za-z][A-Za-z]+(?:\s+\w+){2}/.test(node.content))
        )
          report('mixed bilingual text')
        for (const prop of node.props ?? []) {
          if (prop.type === 7 && prop.exp) inspectScript(prop.exp.content, report)
          const name = prop.type === 6 ? prop.name : prop.arg?.content
          if (prop.type === 6 && prop.value && bilingual(prop.value.content)) report('mixed bilingual attribute')
          if (name === 'lang' && /^(?:zh-CN|en-US)$/.test(prop.value?.content ?? '')) report('bilingual DOM')
          if (languageName.test(name ?? '') && name !== 'lang') report('language passed to a demo/component')
        }
        for (const child of node.children ?? []) template(child)
      }
      if (descriptor.template) {
        const tree = parseTemplate(descriptor.template.content)
        template(tree)
      }
      for (const block of [descriptor.scriptSetup, descriptor.script]) if (block) inspectScript(block.content, report)
      if (/\.toLocale(?:DateString|TimeString|String)\s*\((?!\s*getLocale\(\))/.test(source))
        report('formatting bypasses the global locale')
    }
    expect(violations).toEqual([])
  }, 120_000)

  it('rejects a static demo that imports the private dictionary under an alias', () => {
    const reasons: string[] = []
    inspectScript("import { useDemoLocale as messages } from '../../__demos__/locale'", (reason) =>
      reasons.push(reason),
    )
    expect(reasons).toContain('private demo language helper: the document route selects the localized example')
  })

  it('keeps each Section example independent of the private language dictionary', () => {
    // 从目录取真实示例：Section 改版会增删示例（card 已换成 outline/sizes），
    // 硬编码清单只会把审计变成一次性快照，改名后就失效。
    const examples = readdirSync(resolve(root, 'src/section/__demos__'))
      .filter((file: string) => file.endsWith('.vue') && !file.endsWith('.en-US.vue'))
      .map((file: string) => file.slice(0, -'.vue'.length))
      .sort()
    expect(examples.length).toBeGreaterThan(0)
    for (const example of examples) {
      for (const [readme, suffix] of [
        ['README.md', ''],
        ['README.en-US.md', '.en-US'],
      ]) {
        const demo = `./__demos__/${example}${suffix}.vue`
        const directory = resolve(root, 'src/section')
        expect(readFileSync(resolve(directory, readme), 'utf8')).toContain(`<demo src="${demo}">`)
        const source = readFileSync(resolve(directory, demo), 'utf8')
        const { descriptor, errors } = parse(source)
        expect(errors).toEqual([])
        expect(source, demo).not.toContain('__demos__/locale')
        expect(compileTemplate({ source: descriptor.template!.content, filename: demo, id: demo }).errors).toEqual([])
      }
    }
  })

  it('uses the localized source on every English component page', () => {
    const localized = new Set(localizedDemos.map((file) => resolve(root, file)))
    const mismatches: string[] = []
    for (const doc of globSync('src/**/*.en-US.md', { cwd: root })) {
      const content = readFileSync(resolve(root, doc), 'utf8')
      for (const [, ref] of content.matchAll(/<demo\s+src="([^"]+\.vue)"/g)) {
        const file = resolve(root, doc, '..', ref)
        if (localized.has(file.replace(/\.vue$/, '.en-US.vue'))) mismatches.push(doc + ': ' + ref)
      }
    }
    expect(mismatches).toEqual([])
  })

  it.each([...new Set([...normalizedDemos, ...localizedDemos])])('compiles the migrated example %s', (file) => {
    const { descriptor, errors } = parse(readFileSync(resolve(root, file), 'utf8'), { filename: file })
    expect(errors).toEqual([])
    const script = descriptor.scriptSetup || descriptor.script ? compileScript(descriptor, { id: file }) : undefined
    const template = compileTemplate({
      source: descriptor.template!.content,
      filename: file,
      id: file,
      compilerOptions: { bindingMetadata: script?.bindings },
    })
    expect(template.errors).toEqual([])
  })
})
