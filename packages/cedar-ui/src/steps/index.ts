import { withInstall } from '../_utils/global-config'
import _Steps from './steps.vue'
import _StepsStep from './step.vue'
import { stepsProps, stepProps } from './props'

const Steps = withInstall(_Steps, Object.assign(_Steps, {
  Step: _StepsStep,
}), { components: [_Steps, _StepsStep] })

export type StepsInstance = InstanceType<typeof _Steps>
export type StepsStepInstance = InstanceType<typeof _StepsStep>
export type { StepsProps, StepProps, StepStatus, StepsType, StepData } from './props'

export { stepsProps, stepProps }
export { _StepsStep as Step }

export const _StepsComponent = Steps

export { Steps }

export default Steps
