import { reactive } from 'vue'
import { describe, expect, it } from 'vitest'
import useFormat from '../picker/hooks/use-format'

describe('date format integration', () => {
  it('retains reactive mode and date-time defaults', () => {
    const props = reactive<{ mode: 'date' | 'month'; showTime: boolean }>({ mode: 'date', showTime: false })
    const state = useFormat(props)
    expect(state.format.value).toBe('YYYY-MM-DD')
    props.showTime = true
    expect(state.format.value).toBe('YYYY-MM-DD HH:mm:ss')
    props.mode = 'month'
    expect(state.format.value).toBe('YYYY-MM')
    expect(state.valueFormat.value).toBe('YYYY-MM')
  })
  it('retains explicit display and model formats', () => {
    const props = reactive({ mode: 'date' as const, format: 'DD/MM/YYYY', valueFormat: 'timestamp' })
    const state = useFormat(props)
    expect(state.format.value).toBe('DD/MM/YYYY')
    expect(state.valueFormat.value).toBe('timestamp')
    expect(state.parseValueFormat.value).toBe('DD/MM/YYYY')
    props.valueFormat = 'YYYY-MM-DD'
    expect(state.parseValueFormat.value).toBe('YYYY-MM-DD')
  })
})
