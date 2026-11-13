import { unref, type Ref } from 'vue'

/** Vue-compatible input types available across supported Vue 3 releases. */
export type CompatibleMaybeRef<T> = T | Ref<T>
export type CompatibleMaybeRefOrGetter<T> = CompatibleMaybeRef<T> | (() => T)

/** Match Vue toValue: call a getter or unwrap one ref layer. */
export function resolveMaybeRefOrGetter<T>(source: CompatibleMaybeRefOrGetter<T>): T {
  return typeof source === 'function' ? (source as () => T)() : (unref(source) as T)
}
