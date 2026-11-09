import type { TypographyEmits, TypographyContentSlots, TypographySlots, TypographyText, TypographyTitle, TypographyParagraph, Typography } from '@cedar-design/ui'
import type { TypographyContentSlots as EntrySlots } from '@cedar-design/ui/typography'

const slots: TypographyContentSlots = {
  default: () => [],
  'copy-icon': ({ copied }) => { copied.valueOf(); return [] },
  'expand-node': ({ expanded }) => { expanded.valueOf(); return [] },
}
const rootSlots: TypographySlots = { default: () => [] }
const entry: EntrySlots = slots
const text = {} as InstanceType<typeof TypographyText>
const title = {} as InstanceType<typeof TypographyTitle>
const paragraph = {} as InstanceType<typeof TypographyParagraph>
const root = {} as InstanceType<typeof Typography>
text.$slots['copy-icon']?.({ copied: true })
title.$slots['expand-node']?.({ expanded: false })
paragraph.$slots.default?.()
root.$slots.default?.()
// @ts-expect-error The copy slot receives a boolean.
text.$slots['copy-icon']?.({ copied: 'yes' })
text.$emit('update:editing', true)
title.$emit('change', 'updated')
// @ts-expect-error The ellipsis event receives a boolean.
paragraph.$emit('ellipsis', 'yes')
const event: TypographyEmits['copy'] = ['text']
void [entry, rootSlots, event]
