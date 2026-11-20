<script setup lang="ts">
import { ref, useAttrs, useSlots } from 'vue'
import { createNamespace, getPrefixCls } from '../../_utils/global-config'
import { useId } from '../../_utils/vue-compat'
import { useI18n } from '../../locale'
import { tableCoreProps } from './props'
import { useCoreLayout } from '../layout/use-core-layout'
import { renderCoreTable } from './render'
import type { TableCoreExpose, TableCoreColumn, TableCoreData } from './types'

defineOptions({ name: createNamespace('table-core').name, inheritAttrs: false })
const props = defineProps(tableCoreProps)
const emit = defineEmits<{
  (event: 'row-click', record: TableCoreData, nativeEvent: Event): void
  (event: 'cell-click', record: TableCoreData, column: TableCoreColumn, nativeEvent: Event): void
  (event: 'header-click', column: TableCoreColumn, nativeEvent: Event): void
}>()
const attrs = useAttrs()
const slots = useSlots()
const viewport = ref<HTMLElement>()
const table = ref<HTMLTableElement>()
const layout = useCoreLayout(props, viewport, table, () => attrs.dir)
const prefix = getPrefixCls('table-core')
const headerId = `c-table-core-header-${useId()}`
const { t } = useI18n()
const scrollTo: TableCoreExpose['scrollTo'] = (options) => {
  const element = viewport.value
  if (!element) return
  if (typeof element.scrollTo === 'function') element.scrollTo(options)
  else {
    if (options.left !== undefined) element.scrollLeft = options.left
    if (options.top !== undefined) element.scrollTop = options.top
  }
}
defineExpose({ scrollTo })
const RenderTable = () => renderCoreTable({ props, attrs, slots, emit, layout, viewport, table, prefix, headerId, emptyText: t('empty.description') })
</script>

<template><RenderTable /></template>
