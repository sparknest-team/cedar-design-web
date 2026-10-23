import { mkdir, readFile, rename, unlink, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import type { App, Plugin } from '@vuepress/core'

/** Keep Vite from reading a truncated page-data module during regeneration. */
export function protectTempWrites(app: Pick<App, 'writeTemp' | 'dir'>) {
  const pending = new Map<string, Promise<string>>()
  let sequence = 0
  app.writeTemp = (file, content) => {
    const target = app.dir.temp(file)
    const write = async () => {
      try {
        if (await readFile(target, 'utf8') === content) return target
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error
      }
      await mkdir(dirname(target), { recursive: true })
      const temporary = `${target}.${process.pid}.${sequence++}.tmp`
      try {
        await writeFile(temporary, content)
        await rename(temporary, target)
      } finally {
        await unlink(temporary).catch(error => {
          if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error
        })
      }
      return target
    }
    const result = (pending.get(target) ?? Promise.resolve()).catch(() => {}).then(write)
    pending.set(target, result)
    result.finally(() => { if (pending.get(target) === result) pending.delete(target) }).catch(() => {})
    return result
  }
}

export function atomicTempPlugin(): Plugin {
  return { name: 'cedar-atomic-temp', onInitialized: app => { protectTempWrites(app) } }
}
