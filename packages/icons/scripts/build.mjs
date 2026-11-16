import { downlevelVueDeclarations } from '../../../../design-ui/packages/ui-build/src/vue-declarations.mjs'
import { rm } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import ts from 'typescript'
import { build } from 'vite'
import { browserTargets } from '../../../../design-ui/packages/ui-build/src/browser-targets.mjs'
import { writeDualDeclarations } from '../../../../design-ui/packages/ui-build/src/dual-declarations.mjs'

const root = resolve(import.meta.dirname, '..')

function generateTypes() {
  return new Promise((resolvePromise, reject) => {
    const child = spawn('vue-tsc', ['-p', 'tsconfig.build.json'], { cwd: root, stdio: 'inherit' })
    child.on('error', reject)
    child.on('exit', (code) =>
      code === 0 ? resolvePromise() : reject(new Error(`vue-tsc exited with code ${code}`)),
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

await Promise.all([
  buildModules('es', 'es', 'mjs'),
  buildModules('cjs', 'lib', 'cjs'),
  generateTypes(),
])
downlevelVueDeclarations(root, 'types', ts)
writeDualDeclarations(resolve(root, 'types'), ts)
