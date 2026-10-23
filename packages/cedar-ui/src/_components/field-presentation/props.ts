import { popupContainerProp } from '../../_utils/popup-container'
import { beforeFieldCommitProp, readPrettyProp, fieldPresentationProp } from './context'

/** Common field presentation API; pure panels do not receive these props. */
export const fieldPresentationProps = {
  presentation: fieldPresentationProp,
  readPretty: readPrettyProp,
  beforeCommit: beforeFieldCommitProp,
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  popupContainer: popupContainerProp,
}
