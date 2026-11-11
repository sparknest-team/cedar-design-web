import type { FormProps, FormItemProps } from '@cedar-design/ui-vue'
import type { FormProps as EntryFormProps, FormItemProps as EntryItemProps } from '@cedar-design/ui-vue/form'
const form: FormProps = { editMode: 'direct', readPretty: false }
const item: FormItemProps = { editMode: 'click', readPretty: true }
const entryForm: EntryFormProps = form
const entryItem: EntryItemProps = item
// @ts-expect-error Internal descriptor name is not a public configuration prop.
const invalidForm: FormProps = { fieldEditModeProp: 'direct' }
// @ts-expect-error Internal descriptor name is not a public configuration prop.
const invalidItem: FormItemProps = { fieldEditModeProp: 'click' }
void [form, item, entryForm, entryItem, invalidForm, invalidItem]
