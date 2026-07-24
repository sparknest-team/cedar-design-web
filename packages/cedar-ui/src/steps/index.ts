import type { App } from 'vue'
import type { CedarOptions } from '../_utils/types'
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config'
import _Steps from './steps.vue'
import _StepsStep from './step.vue'
import { stepsProps, stepProps } from './props'

const Steps = Object.assign(_Steps, {
  Step: _StepsStep,
  install: (app: App, options?: CedarOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)

    app.component(componentPrefix + _Steps.name, _Steps)
    app.component(componentPrefix + _StepsStep.name, _StepsStep)
  },
})

export type StepsInstance = InstanceType<typeof _Steps>
export type StepsStepInstance = InstanceType<typeof _StepsStep>
export type { StepsProps, StepProps, StepStatus, StepsType, StepData } from './props'

export { stepsProps, stepProps }
export { _StepsStep as Step }

export const _StepsComponent = Steps

export default Steps
