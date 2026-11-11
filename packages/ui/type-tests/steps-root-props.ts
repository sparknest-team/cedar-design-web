import { stepsProps, stepProps } from '@cedar-design/ui-vue'
import { stepsProps as subSteps, stepProps as subStep } from '@cedar-design/ui-vue/steps'
const root: typeof subSteps = stepsProps
const item: typeof subStep = stepProps
void [root, item]
