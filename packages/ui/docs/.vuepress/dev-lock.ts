import { createHash } from 'node:crypto'
import { closeSync, existsSync, openSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

/** A second VuePress process must not overwrite the first process's .temp files. */
export function acquireDocsDevLock(project: string, pid = process.pid) {
  const key = createHash('sha256').update(resolve(project)).digest('hex').slice(0, 20)
  const file = join(tmpdir(), `cedar-docs-${key}.lock`)
  const owner = String(pid)
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const descriptor = openSync(file, 'wx')
      try { writeFileSync(descriptor, owner) } finally { closeSync(descriptor) }
      const release = () => {
        process.removeListener('exit', release)
        if (existsSync(file) && readFileSync(file, 'utf8') === owner) unlinkSync(file)
      }
      process.once('exit', release)
      return release
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'EEXIST') throw error
      const previous = readFileSync(file, 'utf8')
      if (previous === owner) return () => {}
      const previousPid = Number(previous)
      // An empty lock can belong to another process between open and write.
      if (!Number.isSafeInteger(previousPid) || previousPid <= 0) throw new Error(`Cedar docs startup lock is busy: ${file}`)
      try {
        process.kill(previousPid, 0)
      } catch (failure) {
        if ((failure as NodeJS.ErrnoException).code !== 'ESRCH') throw failure
        if (readFileSync(file, 'utf8') === previous) unlinkSync(file)
        continue
      }
      throw new Error(`Cedar docs is already running (PID ${previousPid}). Reuse that server or stop it before starting another; both would write the same .temp directory.`)
    }
  }
  throw new Error(`Could not acquire Cedar docs startup lock: ${file}`)
}
