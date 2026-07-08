import path from 'path'

const root = process.cwd()

function resolvePath(...relativePath: any[]) {
  return path.resolve(root, ...relativePath)
}

// components相关
const components = resolvePath('./src')

// icon相关
const icon = resolvePath('./icon')
const iconSvgs = resolvePath('./icon/_svgs')
const iconComponents = resolvePath('./src/icon')
const iconComponentsSource = resolvePath('./src/components/icon')

export default {
  resolvePath,
  root,
  icon,
  iconSvgs,
  iconComponents,
  iconComponentsSource,
  components,
}
