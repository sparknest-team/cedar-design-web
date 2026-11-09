import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'
import { inputTagEmits } from '../emits'
import { inputTagProps } from '../props'

const docs = readFileSync(new URL('../README.md', import.meta.url), 'utf8')
function table(section: string) {
  return docs.split(`### InputTag ${section}`)[1]?.split('\n### ')[0] ?? ''
}
test('public Props, every event and existing slot have explicit API rows', () => {
  const privateNames = new Set(['baseCls', 'focused', 'disabledInput', 'uninjectFormItemContext'])
  const props = table('Props')
  for (const key of Object.keys(inputTagProps).filter((key) => !privateNames.has(key))) {
    const name = key.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())
    expect(props, name).toMatch(new RegExp('\\|\\s*' + name + '(?:\\s|\\*)'))
  }
  for (const event of Object.keys(inputTagEmits)) expect(table('Events'), event).toContain(`| ${event}`)
  for (const slot of ['prefix', 'suffix', 'tag', 'clear-icon', 'read'])
    expect(table('Slots'), slot).toMatch(new RegExp('\\|\\s*' + slot + '\\s*\\|'))
})
