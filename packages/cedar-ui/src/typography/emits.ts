export const typographyEmits = {
  'edit-start': () => true,
  change: (_text: string) => true,
  'update:editText': (_text: string) => true,
  'edit-end': () => true,
  'update:editing': (_editing: boolean) => true,
  copy: (_text: string) => true,
  ellipsis: (_isEllipsis: boolean) => true,
  expand: (_expanded: boolean) => true,
}
