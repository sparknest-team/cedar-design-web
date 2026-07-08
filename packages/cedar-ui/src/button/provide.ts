import type { ComputedRef } from 'vue'
import { useChildren, useParent } from '@maplejs/maple-use'
import { Size, Status } from '../_utils/constant'
import { ButtonVariant } from './props'

export interface ButtonGroupProvider {
  status: ComputedRef<Status>
  variant: ComputedRef<ButtonVariant>
  size: ComputedRef<Size>
  color: ComputedRef<string | undefined>
  textColor: ComputedRef<string | undefined>
  stacked: ComputedRef<boolean>
  disabled: ComputedRef<boolean>
  vertical: ComputedRef<boolean>
}

export const BUTTON_GROUP_BIND_BUTTON_KEY = Symbol('BUTTON_GROUP_BIND_BUTTON_KEY')

export function useButtons() {
  const { bindChildren, childProviders, length } = useChildren<ButtonGroupProvider, null>(BUTTON_GROUP_BIND_BUTTON_KEY)

  return {
    length,
    buttons: childProviders,
    bindButtons: bindChildren,
  }
}

export function useButtonGroup() {
  const { bindParent, parentProvider, index } = useParent<ButtonGroupProvider, null>(BUTTON_GROUP_BIND_BUTTON_KEY)

  return {
    index,
    buttonGroup: parentProvider,
    bindButtonGroup: bindParent,
  }
}

