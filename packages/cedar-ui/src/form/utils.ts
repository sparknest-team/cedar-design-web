import { resolveFieldPath } from '../_utils/field-path'
import { VALIDATE_STATUSES, ValidateStatus } from './types'

export function getValueByPath(obj: any, path: string, strict: boolean) {
  return resolveFieldPath(obj, path, strict)
}

export const getFinalValidateStatus = (validateStatus: Record<string, ValidateStatus | ''>) => {
  let status: ValidateStatus | '' = ''
  for (const key of Object.keys(validateStatus)) {
    const _status = validateStatus[key]
    if (_status) {
      if (!status || VALIDATE_STATUSES.indexOf(_status) > VALIDATE_STATUSES.indexOf(status)) {
        status = validateStatus[key]
      }
    }
  }
  return status
}

export const getFinalValidateMessage = (validateMessage: Record<string, string>) => {
  const messages: string[] = []
  for (const key of Object.keys(validateMessage)) {
    const _message = validateMessage[key]
    if (_message) {
      messages.push(_message)
    }
  }
  return messages
}

export const getFormElementId = (prefix: string | undefined, field: string) => {
  const id = (field as string).replace(/[[.]/g, '_').replace(/\]/g, '')
  return prefix ? `${prefix}-${id}` : `${id}`
}
