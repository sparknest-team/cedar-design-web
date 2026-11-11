// @vitest-environment node
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, expect, test, vi } from 'vitest'
import { acquireDocsDevLock } from '../dev-lock'

const releases: (() => void)[] = []
const projects: string[] = []
afterEach(() => {
  vi.restoreAllMocks()
  releases.splice(0).forEach(release => release())
  projects.splice(0).forEach(project => rmSync(project, { recursive: true }))
})
function project() {
  const folder = mkdtempSync(join(tmpdir(), 'cedar-docs-lock-test-'))
  projects.push(folder)
  return folder
}
test('allows config reload in the owner process and releases its own lock', () => {
  const folder = project()
  releases.push(acquireDocsDevLock(folder))
  expect(() => acquireDocsDevLock(folder)).not.toThrow()
  releases.pop()!()
  releases.push(acquireDocsDevLock(folder))
})
test('rejects a second live process before it writes shared temporary pages', () => {
  const folder = project()
  releases.push(acquireDocsDevLock(folder))
  const pid = process.pid
  expect(() => acquireDocsDevLock(folder, pid + 1)).toThrow(`already running (PID ${pid})`)
})
test('isolates repositories even if their dev servers use different ports', () => {
  releases.push(acquireDocsDevLock(project()))
  expect(() => releases.push(acquireDocsDevLock(project()))).not.toThrow()
})
