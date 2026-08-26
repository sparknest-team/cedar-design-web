export const PAGE_ITEM_TYPES = ['page', 'more', 'previous', 'next'] as const

export type PageItemType = (typeof PAGE_ITEM_TYPES)[number]
