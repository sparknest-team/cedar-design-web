import { withInstall } from '../_utils/global-config'
import _Card from './card.vue'
import { cardProps } from './props'

const Card = withInstall(_Card, Object.assign(_Card, {
}), { components: [_Card] })

export type CardInstance = InstanceType<typeof _Card>
export { cardProps }
export type { CardDirection, CardFit, CardProps, CardSize, CardVariant } from './props'
export { Card }
export const _CardComponent = Card

export default Card
