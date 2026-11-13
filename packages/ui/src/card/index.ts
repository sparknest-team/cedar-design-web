import { withInstall } from '../_utils/global-config'
import _Card from './Card.vue'
import { cardProps } from './props'

const Card: import('../_utils/global-config').ComponentWithInstall<typeof _Card> = withInstall(_Card, Object.assign(_Card, {
}), { components: [_Card] })

export type CardInstance = InstanceType<typeof _Card>
export { cardProps }
export type { CardDirection, CardFit, CardProps, CardSize, CardVariant } from './props'
export { Card }
export const _CardComponent: typeof Card = Card

export default Card
