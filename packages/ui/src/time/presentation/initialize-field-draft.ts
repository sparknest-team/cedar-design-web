import type { TimeFieldProps } from '../field-state'
import type { TimeCommitInput } from '../time-commit'

/** Desktop lists initialize candidates in their own panel, not in the field model. */
export function initializeTimeFieldDraft(value: TimeCommitInput, _rules: TimeFieldProps, _range: boolean): TimeCommitInput {
  return value
}
