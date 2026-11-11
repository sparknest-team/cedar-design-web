import { h } from 'vue'
import Segmented, { type SegmentedProps } from '../src/segmented'

const options = [{ value: 1, label: 'One', extra: 'metadata' }, { value: '1' }] as const
const props: SegmentedProps = { options, readonly: true, disabled: false }
h(Segmented, props)
