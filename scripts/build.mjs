import { resolve } from 'node:path'
import { createSpinner } from 'nanospinner'
import { x } from 'tinyexec'

const CWD = process.cwd()

export function createTask(cwd, command = 'build') {
  return () => x('pnpm', [command], { nodeOptions: { cwd } })
}

export async function runTask(taskName, task) {
  const s = createSpinner(`Building ${taskName}`).start()
  try {
    const start = performance.now()
    await task()
    s.success({ text: `Build ${taskName} completed! (${Math.ceil(performance.now() - start)}ms)` })
  } catch (e) {
    s.error({ text: `Build ${taskName} failed!` })
    console.error(e.toString())
  }
}

export const buildShared = createTask(resolve(CWD, './packages/cedar-shared'))

export const buildPresetUnocss = createTask(resolve(CWD, './packages/cedar-preset-unocss'))

export const buildPresetTailwindcss = createTask(resolve(CWD, './packages/cedar-preset-tailwindcss'))

export const buildResolver = createTask(resolve(CWD, './packages/cedar-resolver'))

export const buildUse = createTask(resolve(CWD, './packages/cedar-use'))

export const buildIcons = createTask(resolve(CWD, './packages/cedar-icons-vue'))

export const buildUI = createTask(resolve(CWD, './packages/cedar-ui'), 'build:lib')

export async function runTaskQueue() {
  const start = performance.now()

  await runTask('shared', buildShared)
  await runTask('preset-unocss & preset-tailwindcss & resolver & use', () =>
    Promise.all([buildPresetUnocss(), buildPresetTailwindcss(), buildResolver(), buildUse()]),
  )
  await runTask('icons', buildIcons)
  await runTask('ui', buildUI)

  console.info(`All tasks built in ${Math.ceil(performance.now() - start)} ms`)
}
