import { useScrollLock } from '../_utils/scroll-lock'
import { createNamespace } from '../_utils/global-config'

const { n } = createNamespace('')

export function useLock(source: () => boolean, useSource: () => boolean = () => true) {
  useScrollLock(
    () => typeof document === 'undefined' ? undefined : document.body,
    () => source() && useSource(),
    { className: n('$--lock'), reserveScrollBar: true },
  )
}
