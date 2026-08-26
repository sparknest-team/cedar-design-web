import { kebabCase } from '@cedarjs/shared'

export interface CedarResolverOptions {
  /** Automatically import component styles. @default true */
  importStyle?: boolean
  /** Resolve Cedar directives such as `v-loading` and `v-tooltip`. @default true */
  directives?: boolean
  /** Resolve programmatic APIs for unplugin-auto-import. @default true */
  autoImport?: boolean
}

const cedarFunctions = ['Dialog', 'Message', 'Notification']
const cedarDirectives: Record<string, string> = {
  Loading: 'vLoading',
  Tooltip: 'vTooltip',
}

function getStyleSideEffects(name: string, importStyle = true) {
  return importStyle ? [`@cedarjs/ui/${kebabCase(name)}/style`] : undefined
}

export function resolveCedarComponent(name: string, options: CedarResolverOptions = {}) {
  return {
    from: '@cedarjs/ui',
    name,
    sideEffects: getStyleSideEffects(name, options.importStyle),
  }
}

function resolveCedarIcon(name: string) {
  const iconName = name.slice('CIcon'.length)
  return {
    from: `@cedarjs/icons-vue/icon-${kebabCase(iconName)}`,
    name: `Icon${iconName}`,
  }
}

/**
 * Resolver for Cedar components, SVG icons, directives, and programmatic APIs.
 * Use the same resolver with unplugin-vue-components and unplugin-auto-import.
 */
export function CedarResolver(options: CedarResolverOptions = {}) {
  return [
    {
      type: 'component' as const,
      resolve(name: string) {
        if (name.startsWith('CIcon') && name.length > 'CIcon'.length) {
          return resolveCedarIcon(name)
        }

        if (/^C[A-Z]/.test(name)) {
          return resolveCedarComponent(name.slice(1), options)
        }

        if (options.autoImport !== false && cedarFunctions.includes(name)) {
          return resolveCedarComponent(name, options)
        }
      },
    },
    {
      type: 'directive' as const,
      resolve(name: string) {
        if (options.directives === false || !cedarDirectives[name]) return

        return {
          from: '@cedarjs/ui',
          name: cedarDirectives[name],
          sideEffects: getStyleSideEffects(name, options.importStyle),
        }
      },
    },
  ]
}
