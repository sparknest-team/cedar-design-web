import { describe, expect, test } from 'vitest'
import { Popconfirm, popconfirmProps } from '../index'

describe('Popconfirm', () => {
  test('exposes a validated public contract', () => {
    expect(Popconfirm.name).toBe('CPopconfirm')
    expect(popconfirmProps.type.default).toBe('info')
    expect(popconfirmProps.type.validator('warning')).toBe(true)
    expect(popconfirmProps.type.validator('invalid' as never)).toBe(false)
    expect(popconfirmProps.beforeConfirm).toBeTypeOf('function')
    expect(popconfirmProps.beforeCancel).toBeTypeOf('function')
  })
})
