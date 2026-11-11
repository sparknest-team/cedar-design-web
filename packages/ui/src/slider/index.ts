import { withInstall } from '../_utils/global-config'
import _Slider from './presentation'
import { sliderProps } from './props'

const Slider = withInstall(_Slider, Object.assign(_Slider, {}), { components: [_Slider] })

export type SliderInstance = InstanceType<typeof _Slider> & import('./props').SliderExpose
export type {
  SliderProps,
  SliderTooltipFormatter,
  SliderTooltipVisibility,
  SliderEmits,
  SliderSlots,
  SliderExpose,
  SliderOrientation,
  SliderValue,
} from './props'
export { sliderProps }
export { Slider }
export const _SliderComponent = Slider

export default Slider
