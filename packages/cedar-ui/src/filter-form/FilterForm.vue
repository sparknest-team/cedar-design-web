<template>
  <Form
    ref="formRef"
    :model="innerModel"
    :class="classes(n(), [responsiveCols <= 1, n('--stacked')])"
    layout="vertical"
    :rules="rules"
  >
    <Grid
      :col-gap="colGap"
      :row-gap="16"
      :collapsed-rows="responsiveCols <= 2 ? 2 : 1"
      :collapsed="collapsed_"
      :cols="cols"
      v-bind="gridProps"
    >
      <GridItem
        v-for="(item, index) in resolvedFields"
        :key="`${item.field.field}-${index}`"
        v-bind="item.field.gridItemProps"
      >
        <FormItem
          :field="item.field.field"
          :label="item.field.label"
          v-bind="item.field.formItemProps"
        >
          <component
            :is="item.registration.component"
            v-bind="getFieldBind(item)"
            @update:model-value="onFieldValue(item, $event)"
            @keyup.enter="onFieldEnter(item)"
            @blur="onFieldBlur(item)"
          />
        </FormItem>
      </GridItem>

      <GridItem
        v-if="showSuffixItem"
        #="{ overflow }"
        suffix
        :span="2"
      >
        <FormItem hide-label :class="classes(n('action-item'))">
          <div :class="classes(n('actions'))">
            <button
              v-if="collapsible && (overflow || !collapsed_)"
              type="button"
              :aria-expanded="!collapsed_"
              :class="classes(n('collapse'))"
              @click="toggleCollapsed"
            >
              <IconDownCircle v-if="collapsed_" />
              <IconUpCircle v-else />
              {{ collapsed_ ? t('filterForm.expandMore') : t('filterForm.collapseMore') }}
            </button>
            <div v-if="$slots.actions" :class="classes(n('action-slot'))">
              <slot name="actions" />
            </div>
          </div>
        </FormItem>
      </GridItem>
    </Grid>
  </Form>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots, watch } from 'vue'
import Form, { FormItem } from '../form'
import Grid, { GridItem } from '../grid'
import { useResponsiveState } from '../grid/hook/use-responsive-state'
import type { ResponsiveValue } from '../grid/types'
import { getValueByPath, setValueByPath } from '../_utils/get-value-by-path'
import { debounce } from '../_utils/debounce'
import { isString } from '../_utils/is'
import { IconDownCircle, IconUpCircle } from '@cedarjs/icons-vue'
import { useI18n } from '../locale'
import { createNamespace } from '../_utils/global-config'
import { filterFormProps } from './props'
import {
  normalizeFieldRegistration,
  type FilterFormField,
  type FilterFormFieldRegistration,
} from './types'

defineOptions({
  name: createNamespace('filter-form').name,
})

const { n, classes } = createNamespace('filter-form')
const props = defineProps(filterFormProps)
const emit = defineEmits<{
  'update:modelValue': [value: Record<string, unknown>]
  'update:collapsed': [collapsed: boolean]
  change: [value: Record<string, unknown>, field: string]
}>()

const { t } = useI18n()
const slots = useSlots()
const formRef = ref()
const innerModel = ref<Record<string, unknown>>({})
const collapsed_ = ref(props.collapsed)
/** Grid measures numeric gaps; callers customize this with gridProps.colGap. */
const colGap = 16
const responsiveCols = useResponsiveState(
  computed(() => (props.gridProps?.cols as number | ResponsiveValue | undefined) ?? props.cols),
  1,
)

const showSuffixItem = computed(() => props.collapsible || Boolean(slots.actions))

const emitChange = debounce((value: Record<string, unknown>, field: string) => {
  emit('change', value, field)
}, props.changeDebounce)

watch(
  () => props.modelValue,
  (value) => {
    innerModel.value = cloneModel(value)
  },
  { immediate: true, deep: true },
)

watch(
  () => props.collapsed,
  (value) => {
    collapsed_.value = value
  },
)

function cloneModel(value: Record<string, unknown> | undefined) {
  if (!value) {
    return {}
  }
  try {
    return structuredClone(value)
  } catch {
    return JSON.parse(JSON.stringify(value)) as Record<string, unknown>
  }
}

function emitModel() {
  emit('update:modelValue', cloneModel(innerModel.value))
}

function resolveRegistration(field: FilterFormField): FilterFormFieldRegistration | undefined {
  const component = field.component
  if (isString(component)) {
    return normalizeFieldRegistration(props.fieldMap?.[component])
  }
  return normalizeFieldRegistration(component)
}

type ResolvedField = {
  field: FilterFormField
  registration: FilterFormFieldRegistration
}

const resolvedFields = computed((): ResolvedField[] => {
  return (props.fields || [])
    .map((field) => {
      const registration = resolveRegistration(field)
      if (!registration || field.visible === false) {
        return null
      }
      return {
        field,
        registration,
      }
    })
    .filter((item): item is ResolvedField => Boolean(item))
})

function getFieldBind(item: ResolvedField) {
  const { field, registration } = item
  const bind: Record<string, unknown> = {
    ...(registration.defaultProps || {}),
    ...(field.props || {}),
    modelValue: getValueByPath(innerModel.value, field.field),
  }
  return bind
}

function patchFieldValue(fieldPath: string, value: unknown) {
  setValueByPath(innerModel.value, fieldPath, value)
  emitModel()
}

function onFieldValue(item: ResolvedField, value: unknown) {
  patchFieldValue(item.field.field, value)
  if (item.field.autoEmitChange !== false) {
    emitChange(cloneModel(innerModel.value), item.field.field)
  }
}

function onFieldEnter(item: ResolvedField) {
  emit('change', cloneModel(innerModel.value), item.field.field)
}

function onFieldBlur(item: ResolvedField) {
  if (item.field.autoEmitChange === false) {
    emitChange(cloneModel(innerModel.value), item.field.field)
  }
}

function toggleCollapsed() {
  collapsed_.value = !collapsed_.value
  emit('update:collapsed', collapsed_.value)
}

defineExpose({
  formRef,
})
</script>
