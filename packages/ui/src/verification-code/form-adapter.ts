import { provide, reactive } from 'vue'
import { formItemInjectionKey } from '../form/context'
import { useInputForm } from '../input/use-input-form'
import type { VerificationCodeProps } from './props'
export function useVerificationForm(props: Readonly<VerificationCodeProps>) {
  const state = useInputForm(props)
  provide(formItemInjectionKey, reactive({ ...state.formItemCtx, eventHandlers: {}, feedback: undefined }))
  return state
}

