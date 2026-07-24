/**
 * Regenerate src/style/color/colors.less as static hex values.
 * Avoids Less @plugin + `color` package which breaks under Vite.
 *
 * Usage: node scripts/generate-color-palette.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const { generate } = require('../src/style/color/vendor')

const bases = {
  red: '#f53f3f',
  orangered: '#f77234',
  orange: '#ff7d00',
  gold: '#f7ba1e',
  yellow: '#fadc19',
  lime: '#9fdb1d',
  green: '#00b42a',
  cyan: '#14c9c9',
  blue: '#3491fa',
  brand: '#00bebe',
  purple: '#722ed1',
  pinkpurple: '#d91ad9',
  magenta: '#f5319d',
}

const colorsPath = path.join(root, 'src/style/color/colors.less')
const original = fs.readFileSync(colorsPath, 'utf8')
const semanticStart = original.indexOf('// 命名具有具体含义')
if (semanticStart === -1) {
  throw new Error('semantic section not found in colors.less')
}

const lines = [
  '// Auto-generated static palette (no less @plugin / color runtime).',
  '// Regenerate: node scripts/generate-color-palette.mjs',
  '',
]

for (const [name, hex] of Object.entries(bases)) {
  for (let i = 1; i <= 10; i++) {
    const value = i === 6 ? hex : generate(hex, { index: i }).toLowerCase()
    lines.push(`@${name}-${i}: ${value};`)
  }
  lines.push('')
}

lines.push(
  '@gray-1: #f7f8fa;',
  '@gray-2: #f2f3f5;',
  '@gray-3: #e5e6eb;',
  '@gray-4: #c9cdd4;',
  '@gray-5: #a9aeb8;',
  '@gray-6: #86909c;',
  '@gray-7: #6b7785;',
  '@gray-8: #4e5969;',
  '@gray-9: #272e3b;',
  '@gray-10: #1d2129;',
  '',
  '// dark',
  '',
)

for (const [name, hex] of Object.entries(bases)) {
  for (let i = 1; i <= 10; i++) {
    lines.push(`@dark-${name}-${i}: ${generate(hex, { index: i, dark: true }).toLowerCase()};`)
  }
  lines.push('')
}

lines.push(
  '@dark-gray-1: #17171a;',
  '@dark-gray-2: #2e2e30;',
  '@dark-gray-3: #484849;',
  '@dark-gray-4: #5f5f60;',
  '@dark-gray-5: #78787a;',
  '@dark-gray-6: #929293;',
  '@dark-gray-7: #ababac;',
  '@dark-gray-8: #c5c5c5;',
  '@dark-gray-9: #dfdfdf;',
  '@dark-gray-10: #f6f6f6;',
  '',
)

lines.push(original.slice(semanticStart).trimEnd(), '')

fs.writeFileSync(colorsPath, lines.join('\n'))
console.log(`updated ${colorsPath}`)
