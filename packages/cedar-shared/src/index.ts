import { assert as _assert } from 'rattail'

export * from 'rattail'

export function assert(condition: boolean, source: string, message: string): asserts condition {
  return _assert(condition, `Cedar [${source}]: ${message}`)
}

export function warn(source: string, message: string): void {
  console.warn(`Cedar [${source}]: ${message}`)
}

export function error(source: string, message: string): void {
  console.error(`Cedar [${source}]: ${message}`)
}

export const isURL = (val: string | undefined | null) => {
  if (!val) {
    return false
  }

  return /^(http)|(\.*\/)/.test(val)
}
