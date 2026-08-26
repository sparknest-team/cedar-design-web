<template>
  <Form
    ref="formRef"
    :model="innerModel"
    :class="classes(n())"
    layout="vertical"
    :rules="rules"
  >
    <Grid
      :col-gap="colGap"
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
            v-on="getFieldListeners(item)"
            @keyup.enter="onFieldEnter(item)"
            @blur="onFieldBlur(item)"
          />
        </FormItem>
      </GridItem>

      <GridItem
        v-if="showSuffixItem"
        #="{ overflow }"
        suffix
      >
        <FormItem hide-label>
          <div :class="classes(n('actions'))">
            <div
              v-if="collapsible && (overflow || !collapsed_)"
              :class="classes(n('collapse'))"
              @click="toggleCollapsed"
            >
              <IconDownCircle v-if="collapsed_" />
              <IconUpCircle v-else />
              {{ collapsed_ ? t('filterForm.expandMore') : t('filterForm.collapseMore') }}
            </div>
            <slot name="actions" />
          </div>
        </FormItem>
      </GridItem>
    </Grid>
  </Form>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots, watch, type Component } from 'vue'
import Form, { FormItem } from '../form'
import Grid, { GridItem } from '../grid'
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
const missingFieldKeys = new Set<string>()
/** Grid col-gap，与 --c-filter-form-col-gap 同值 */
const colGap = 16

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

function isVueComponent(value: unknown): value is Component {
  return Boolean(
    value
      && (typeof value === 'function'
        || (typeof value === 'object'
          && ('setup' in value || 'render' in value || 'template' in value || '__asyncLoader' in value))),
  )
}

function resolveRegistration(field: FilterFormField): FilterFormFieldRegistration | undefined {
  const type = field.type
  if (isVueComponent(type)) {
    return normalizeFieldRegistration(type)
  }
  if (!isString(type) || !type) {
    return undefined
  }
  const reg = normalizeFieldRegistration(props.fieldMap?.[type])
  if (!reg && !missingFieldKeys.has(type)) {
    missingFieldKeys.add(type)
  }
  return reg
}

type ResolvedField = {
  field: FilterFormField
  registration: FilterFormFieldRegistration & { valueEvent: 'change' | 'update:modelValue' }
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
        registration: {
          ...registration,
          valueEvent: registration.valueEvent || 'change',
        },
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
  if (registration.optionsFromMap) {
    bind.options = field.props?.options || props.optionsMap?.[field.field]
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

function getFieldListeners(item: ResolvedField) {
  return {
    [item.registration.valueEvent]: (value: unknown) => onFieldValue(item, value),
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
