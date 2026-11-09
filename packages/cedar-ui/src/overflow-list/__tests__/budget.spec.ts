import { expect, test } from 'vitest'
import { isOverflowFrom, isOverflowNumber, overflowMargin, overflowMinimum, visibleOverflowItems } from '../layout'
test('minimum counts retain zero, floor fractions and clamp to actual totals', () => {
  expect([0, 2.9, 4, 8, -1, NaN, Infinity].map(value => overflowMinimum(value, 4))).toEqual([0, 2, 4, 4, 0, 0, 0])
  expect(overflowMinimum(4, 0)).toBe(0)
  expect(isOverflowNumber(0)).toBe(true); expect(isOverflowNumber(-1)).toBe(false)
  expect(overflowMargin(NaN)).toBe(8); expect(overflowMargin(.5)).toBe(.5)
  expect(isOverflowFrom('start')).toBe(true); expect(isOverflowFrom('left')).toBe(false)
})
test('exact full width includes only real inter-item gaps and removes the indicator', () => {
  expect(visibleOverflowItems([50, 50, 50, 50], 221, 7, 30, 0, 'end')).toBe(4)
  expect(visibleOverflowItems([], 0, 8, 30, 0, 'end')).toBe(0)
  expect(visibleOverflowItems([0, 0], 0, 0, 30, 0, 'end')).toBe(2)
})
test('the minimum may intentionally overflow, while ordinary items leave counter space', () => {
  expect(visibleOverflowItems([60, 60, 60, 60], 221, 8, 30, 0, 'end')).toBe(2)
  expect(visibleOverflowItems([60, 60, 60, 60], 221, 8, 30, 3, 'end')).toBe(3)
  expect(visibleOverflowItems([60, 60, 60, 60], 221, 8, 30, 4, 'end')).toBe(4)
  expect(visibleOverflowItems([60, 60], 0, 8, 30, 0, 'end')).toBe(0)
})
test('the fold end belongs to data order rather than physical reading direction', () => {
  expect(visibleOverflowItems([40, 40, 100, 100], 221, 8, 30, 0, 'end')).toBe(2)
  expect(visibleOverflowItems([40, 40, 100, 100], 221, 8, 30, 0, 'start')).toBe(1)
})
