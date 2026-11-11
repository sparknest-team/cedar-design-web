import { effectScope, reactive } from 'vue'
import { describe, expect, it, vi } from 'vitest'
import { dayjs } from '../../../_utils/date'
import useRangeHeaderValue from '../hooks/use-range-header-value'

describe('range calendar viewport', () => {
  it('normalizes duplicate controlled months without changing the controlled value or emitting', () => {
    const scope = effectScope()
    const onChange = vi.fn()
    const props = reactive({
      mode: 'date' as const,
      value: ['2026-12-19', '2026-12-22'],
      defaultValue: undefined,
      selectedValue: [],
      format: 'YYYY-MM-DD',
      onChange,
    })
    const panel = scope.run(() => useRangeHeaderValue(props))!
    expect(panel.startHeaderValue.value.format('YYYY-MM')).toBe('2026-12')
    expect(panel.endHeaderValue.value.format('YYYY-MM')).toBe('2027-01')
    expect(props.value).toEqual(['2026-12-19', '2026-12-22'])
    expect(onChange).not.toHaveBeenCalled()
    panel.endHeaderOperations.value.onNext!()
    expect(onChange.mock.calls[0][0].map((date: any) => date.format('YYYY-MM'))).toEqual(['2027-01', '2027-02'])
    expect(panel.startHeaderValue.value.format('YYYY-MM')).toBe('2026-12')
    props.value = onChange.mock.calls[0][0].map((date: any) => date.format('YYYY-MM-DD'))
    expect(panel.endHeaderValue.value.format('YYYY-MM')).toBe('2027-02')
    scope.stop()
  })
  it('keeps month selection and outer arrows linked across year boundaries', () => {
    const scope = effectScope()
    const props = reactive({
      mode: 'date' as const,
      value: undefined,
      defaultValue: ['2026-12-01', '2027-01-01'],
      selectedValue: [],
      format: 'YYYY-MM-DD',
    })
    const panel = scope.run(() => useRangeHeaderValue(props))!
    panel.endHeaderOperations.value.onNext!()
    expect([panel.startHeaderValue.value, panel.endHeaderValue.value].map((date) => date.format('YYYY-MM'))).toEqual([
      '2027-01',
      '2027-02',
    ])
    panel.setHeaderValue([dayjs('2028-05-01'), panel.endHeaderValue.value])
    expect([panel.startHeaderValue.value, panel.endHeaderValue.value].map((date) => date.format('YYYY-MM'))).toEqual([
      '2028-05',
      '2028-06',
    ])
    scope.stop()
  })
})
