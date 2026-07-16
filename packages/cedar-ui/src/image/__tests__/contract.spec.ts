import { describe, expect, it } from 'vitest'
import { normalizePreviewOptions } from '../utils/normalizePreviewOptions'
import { imagePlatformConfig } from '../platform.config'

describe('image api contract', () => {
  it('normalizes string preview options', () => {
    expect(normalizePreviewOptions('a.jpg')).toEqual({
      images: ['a.jpg'],
    })
  })

  it('normalizes srcList alias', () => {
    expect(normalizePreviewOptions({ srcList: ['a.jpg', 'b.jpg'] })).toEqual({
      srcList: ['a.jpg', 'b.jpg'],
      images: ['a.jpg', 'b.jpg'],
    })
  })

  it('uses cedar platform defaults', () => {
    expect(imagePlatformConfig.defaultPreview).toBe(true)
    expect(imagePlatformConfig.defaultClosable).toBe(true)
  })
})
