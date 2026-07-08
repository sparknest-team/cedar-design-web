import { createBEM } from '../../utils/create'

export function createNamespace(name: string) {
  const prefixedName = `cedar-${name}`
  return [prefixedName, createBEM(prefixedName)] as const
}
