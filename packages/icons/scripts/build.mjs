import { spawn } from 'node:child_process'
import { rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import {
  browserTargets,
  downlevelVueDeclarations,
  normalizeVueTypeFiles,
  writeDualDeclarations,
} from '@sparknest/ui-build-vue'
import vue from '@vitejs/plugin-vue'
import ts from 'typescript-js'
import { build } from 'vite'

const root = resolve(import.meta.dirname, '..')

function generateTypes() {
  return new Promise((resolvePromise, reject) => {
    const child = spawn('tsc', ['--runExternalCode', '-p', 'tsconfig.build.json'], {
      cwd: root,
      stdio: 'inherit',
    })
    child.on('error', reject)
    child.on('exit', (code) =>
      code === 0 ? resolvePromise() : reject(new Error(`TypeScript exited with code ${code}`)),
    )
  })
}

await Promise.all(['es', 'lib', 'types'].map((dir) => rm(resolve(root, dir), { force: true, recursive: true })))

async function buildModules(format, outDir, extension) {
  await build({
    root,
    logLevel: 'warn',
    plugins: [vue()],
    build: {
      target: [...browserTargets],
      emptyOutDir: false,
      copyPublicDir: false,
      minify: false,
      outDir,
      rolldownOptions: {
        input: resolve(root, 'src/index.ts'),
        external: ['vue'],
        preserveEntrySignatures: 'strict',
        output: {
          format,
          preserveModules: true,
          preserveModulesRoot: resolve(root, 'src'),
          entryFileNames: `[name].${extension}`,
          exports: 'named',
        },
      },
    },
  })
}

await generateTypes()
await Promise.all([buildModules('es', 'es', 'mjs'), buildModules('cjs', 'lib', 'cjs')])
await normalizeVueTypeFiles(resolve(root, 'types'))
downlevelVueDeclarations(root, 'types', ts)
writeDualDeclarations(resolve(root, 'types'), ts)
