import type { FormLabelKey } from './use-form-label-width'
import type { FormLayoutOptions } from './use-form-item-layout'
import { InjectionKey } from 'vue'
import { Data } from '../_utils/types'
import { FieldData, FieldRule, FormItemEventHandler, ValidatedError, ValidateStatus } from './types'
import { ComponentSize } from '../_utils/constant'

export interface FormContext extends FormLayoutOptions {
  disabled?: boolean
  readonly?: boolean
  model: Data
  size: ComponentSize
  rules?: Record<string, FieldRule | FieldRule[]>
  fields: FormItemInfo[]
  touchedFields: FormItemInfo[]
  addField: (field: FormItemInfo) => void
  removeField: (field: FormItemInfo) => void
  validateField: (
    field: string | string[],
    callback?: (errors: undefined | Record<string, ValidatedError>) => void,
  ) => Promise<undefined | Record<string, ValidatedError>>
  setLabelWidth: (width: number, uid?: FormLabelKey) => void
  removeLabelWidth: (uid?: FormLabelKey) => void
  maxLabelWidth: number
  autoLabelWidth: boolean
  id?: string
}

export interface FormItemContext {
  eventHandlers: FormItemEventHandler
  size: ComponentSize | undefined
  disabled: boolean
  readonly: boolean
  error: boolean
  feedback: string | undefined
  hasOuterLabel?: boolean
  updateValidateState: (field: string, { status, message }: { status: ValidateStatus | ''; message: string }) => void
}

export interface FormItemInfo {
  field: string
  disabled: boolean
  error: boolean
  labelWidth?: number
  validate: () => Promise<any>
  clearValidate: () => void
  resetField: () => void
  setField: (data: FieldData) => void
}

export const formItemInjectionKey: InjectionKey<FormItemContext> = Symbol('CedarFormItemContext')
export const formInjectionKey: InjectionKey<FormContext> = Symbol('CedarFormContext')
