import { withInstall, type ComponentWithInstall } from '../_utils/global-config'
import _Section from './Section.vue'

export const Section: ComponentWithInstall<typeof _Section> = withInstall(_Section)
export const _SectionComponent: typeof Section = Section
export type SectionInstance = InstanceType<typeof _Section>
export { sectionProps } from './props'
export type { SectionProps, SectionSlots, SectionVariant, SectionHeadingLevel } from './props'
export default Section
