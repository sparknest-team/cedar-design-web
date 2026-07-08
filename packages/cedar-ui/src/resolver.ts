import type { ComponentResolver, SideEffectsInfo } from 'unplugin-vue-components/types'
import { kebabCase } from 'unplugin-vue-components'

const isSSR = Boolean(process.env.SSR || process.env.SSG || process.env.VITE_SSR || process.env.VITE_SSG)

const moduleType = isSSR ? '/lib' : ''

export interface CedarResolverOptions {
  /**
   * import style css or scss along with components
   *
   * @default true
   */
  importStyle?: boolean | 'css' | 'scss'
}

function getSideEffects(dirName: string, options: CedarResolverOptions): SideEffectsInfo | undefined {
  const { importStyle = true } = options

  if (!importStyle || isSSR) return

  if (importStyle === true) {
    return `@cedar/ui/${moduleType}/${dirName}/style/index`
  }
}

/**
 * Resolver for Cedar
 *
 * @link https://github.com/bfehub/vlib-starter
 */
export function CedarResolver(options: CedarResolverOptions = {}): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^C[A-Z]/)) {
        const importName = name.slice(1)
        const kebabCaseName = kebabCase(importName)

        // 生产环境使用编译后的代码
        return {
          name: importName,
          from: `@cedar/ui${moduleType}`,
          sideEffects: getSideEffects(kebabCaseName, options),
        }
      }
    },
  }
}

const functionArray = ['Modal', 'Message', 'Notification']

export function CedarImport(options: CedarResolverOptions): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (functionArray.includes(name)) {
        return {
          name,
          from: `@cedar/ui${moduleType}`,
        }
      }
    }
  }
}
