import type { MenuPlacement, TriggerPlacement, TimelineItemContentPlacement, NotificationConfig } from '../src'
// @ts-expect-error Legacy placement alias was removed.
import type { MenuPosition } from '../src/menu'
// @ts-expect-error Legacy timeline type was removed.
import type { PositionType } from '../src/timeline/types'
const menu: MenuPlacement = 'bottom-start'
const trigger: TriggerPlacement = menu
const content: TimelineItemContentPlacement = 'bottom'
const corners: NonNullable<NotificationConfig['position']>[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
// @ts-expect-error Corner values use kebab-case.
const oldCorner: NonNullable<NotificationConfig['position']> = 'topRight'
void [trigger, content, corners, oldCorner]
