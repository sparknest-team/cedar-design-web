export const formControlVariants = ['filled', 'outlined', 'standard'] as const

export type FormControlVariant = (typeof formControlVariants)[number]
export type FormControlMaxLength = number | { length: number; errorOnly?: boolean }
export type WordLength = (value: string) => number
export type WordSlice = (value: string, maxLength: number) => string
