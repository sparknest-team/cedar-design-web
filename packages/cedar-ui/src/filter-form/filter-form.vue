<template>
  <Form
    ref="formRef"
    :model="model_"
    class="c-filter-form"
    layout="vertical"
    v-bind="{ ...$props, ...$attrs }"
  >
    <input style="display: none;" type="hidden"></input>
    <Grid
      :colGap="16"
      :collapsed="collapsed_"
      :cols="cols"
      v-bind="gridProps"
    >
      <template
        v-for="(item, i) in components"
        :key="i"
      >
        <GridItem
          v-if="item.visible !== false"
          v-bind="item.gridItemProps"
        >
          <FormItem
            :field="item.props.prop"
            :label="item.props.label"
            v-bind="item.formItemProps"
          >
            <Select
              v-if="item.name === 'select'"
              :modelValue="getPropByPath(model_, item.props.prop, true).v"
              :options="(item.props && item.props.options) || store[item.props.prop]"
              v-bind="item.props"
              @change="formChange(item, $event)"
              @blur="formInputBlur(item, $event)"
            >
            </Select>
            <PeopleSelect
              v-if="item.name === 'people-select'"
              :modelValue="getPropByPath(model_, item.props.prop, true).v"
              :options="(item.props && item.props.options) || store[item.props.prop]"
              v-bind="item.props"
              @change="formChange(item, $event)"
              @blur="formInputBlur(item, $event)"
            >
            </PeopleSelect>
            <Cascader
              v-if="item.name === 'cascader'"
              :modelValue="getPropByPath(model_, item.props.prop, true).v"
              :options="(item.props && item.props.options) || store[item.props.prop]"
              v-bind="item.props"
              @change="formChange(item, $event)"
              @blur="formInputBlur(item, $event)"
            >
            </Cascader>
            <InputNumber
              v-if="item.name === 'input-number'"
              :modelValue="getPropByPath(model_, item.props.prop, true).v"
              v-bind="item.props"
              @change="formChange(item, $event)"
              @keyup.enter="formInputKeyEnter(item, $event)"
              @blur="formInputBlur(item, $event)"
            >
            </InputNumber>
            <Input
              v-if="item.name === 'input'"
              :modelValue="getPropByPath(model_, item.props.prop, true).v"
              v-bind="item.props"
              @update:modelValue="formChange(item, $event)"
              @keyup.enter="formInputKeyEnter(item, $event)"
              @blur="formInputBlur(item, $event)"
            >
            </Input>
            <Textarea
              v-if="item.name === 'textarea'"
              :modelValue="getPropByPath(model_, item.props.prop, true).v"
              v-bind="item.props"
              @update:modelValue="formChange(item, $event)"
              @keyup.enter="formInputKeyEnter(item, $event)"
              @blur="formInputBlur(item, $event)"
            >
            </Textarea>
            <Date
              v-if="item.name === 'date-picker' || item.name === 'date'"
              :modelValue="getPropByPath(model_, item.props.prop, true).v"
              :time-picker-props="item.props.timePickerProps || { defaultValue: '00:00:00' }"
              :valueFormat="item.props.valueFormat || 'timestamp'"
              v-bind="item.props"
              @change="formChange(item, $event)"
              @blur="formInputBlur(item, $event)"
            >
            </Date>
            <DateRange
              v-if="item.name === 'date-range-picker' || item.name === 'date-range'"
              :modelValue="getPropByPath(model_, item.props.prop, true).v"
              :time-picker-props="item.props.timePickerProps || { defaultValue: ['00:00:00', '00:00:00'] }"
              :valueFormat="item.props.valueFormat || 'timestamp'"
              v-bind="item.props"
              @change="formChange(item, $event)"
              @blur="formInputBlur(item, $event)"
            >
            </DateRange>
          </FormItem>
        </GridItem>
      </template>
      <GridItem
        v-if="$slots.suffix"
        #="{ overflow }"
        suffix
      >
        <FormItem
          content-class="c-filter-form-suffix"
          label="&nbsp;"
        >
          <div v-if="overflow || !collapsed_" class="collapsed-btn" @click="collapseHandler">
            <IconDownCircle v-if="collapsed_"/>
            <IconUpCircle v-if="!collapsed_"/>
            {{
              collapsed_ ? t('formFilter.expandMore') :
                t('formFilter.collapseMore')
            }}
          </div>
          <slot name="suffix"></slot>
        </FormItem>
      </GridItem>
    </Grid>
    <!-- 遍历父组件传入的 slots 透传给子组件 -->
    <template v-for="(item, key, i) in slots" :key="i" #[key]>
      <slot :name="key"></slot>
    </template>
    <div
      v-if="showRememberSelections"
      class="c-filter-form-remember-selections"
    >
      <Checkbox
        :model-value="rememberUserSelections_"
        @change="changeRememberHandler"
      >
        {{ t('formFilter.rememberMe') }}
      </Checkbox>
    </div>
  </Form>
</template>
<script lang="ts" setup>
import { computed, getCurrentInstance, onMounted, ref, useSlots, watch } from 'vue'
import { debounce } from 'lodash-es'
import Checkbox from '../checkbox'
import Form, { FormItem } from '../form'
import Grid, { GridItem } from '../grid'
import { getPropByPath, setValueByPath } from '../layout-form/util'
import Select from '../select'
import PeopleSelect from '../people-select'
import Cascader from '../cascader'
import InputNumber from '../input-number'
import Input from '../input'
import Textarea from '../textarea'
import Date from '../date'
import DateRange from '../date-range'
import IconDownCircle, { IconUpCircle } from '../icon'
import { useI18n } from '../locale'
import type { IComponent } from './IComponent'
import { getStorageData } from './filter-form-util'
import { setCascaderValue, setSelectValue } from './util'

export interface FilterFormProps {
  components?: IComponent[]
  collapsed?: boolean
  cols?: any
  gridProps?: any
  model?: any
  rules?: any
  store?: any
  //
  showRememberSelections?: boolean
  autoRemember?: boolean
  rememberUserKey?: string
  fieldConfig?: {
    [key: string]: {
      remember?: boolean
      removeIfNotInOptions?: boolean
      required?: boolean
    }
  }
  defaultConfig?: {
    remember?: boolean
    removeIfNotInOptions?: boolean
    required?: boolean
  }
}

defineOptions({
  name: 'FilterForm',
})
const emit = defineEmits(['update:model', 'change'])
const props = withDefaults(defineProps<FilterFormProps>(), {
  showRememberSelections: false,
  autoRemember: true,
  collapsed: true,
  cols: { xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 5 },
  model: () => ({}),
  fieldConfig: () => ({}),
  defaultConfig: () => ({}),
})
const instance = getCurrentInstance()
const isUsingModelValue = computed(() => {
  return props?.model !== undefined
})
const isUsingVModel = computed(() => {
  // 判断是否传入了 `modelValue` prop 并且有 `update:modelValue` 事件监听器
  return Boolean(isUsingModelValue.value && instance?.vnode.props && instance.vnode.props['onUpdate:model'])
})
const { t } = useI18n()
const defaultConfig = {
  ...{
    required: false,
    remember: true,
    removeIfNotInOptions: true,
  },
  ...props.defaultConfig,
}
const isRemember = function () {
  let value = false
  const storedValue = window.localStorage.getItem(
    'isRemember_' + props.rememberUserKey,
  )
  // storedValue 有可能会存为undefined，取出来是undefined字符串。
  if (storedValue && storedValue !== 'undefined') {
    value = JSON.parse(storedValue)
  } else {
    const sessionValue = window.sessionStorage.getItem(
      'isRemember_' + props.rememberUserKey,
    )
    if (sessionValue && sessionValue !== 'undefined') {
      value = JSON.parse(sessionValue)
    }
  }
  return value
}
const setIsRemember = function () {
  window.localStorage.setItem(
    ('isRemember_' + props.rememberUserKey) as string,
    rememberUserSelections_.value + '',
  )
  window.sessionStorage.setItem(
    ('isRemember_' + props.rememberUserKey) as string,
    rememberUserSelections_.value + '',
  )
  let value = {} as any
  const storedValue = window.localStorage.getItem(
    'isRemember_' + props.rememberUserKey,
  )
  if (storedValue) {
    value = JSON.parse(storedValue)
  } else {
    const sessionValue = window.sessionStorage.getItem(
      'isRemember_' + props.rememberUserKey,
    )
    if (sessionValue) {
      value = JSON.parse(sessionValue)
    }
  }
  return value
}
const slots = useSlots()
const formRef = ref()
const rememberUserSelections_ = ref()
const model_ = ref({})
const collapsed_ = ref(props.collapsed)
onMounted(() => {
  rememberUserSelections_.value = isRemember()
})

function collapseHandler() {
  collapsed_.value = !collapsed_.value
}

watch(
  () => props.model,
  (v) => {
    model_.value = JSON.parse(JSON.stringify((v || {})))
  },
  { immediate: true, deep: true },
)

function setValue(key: string, value: any, item: IComponent) {
  const fieldConfig = {
    ...defaultConfig,
    ...(props.fieldConfig?.[item.props.prop] || {}),
  } as {
    remember: boolean
    removeIfNotInOptions: boolean
    required: boolean
  }
  if (!fieldConfig.remember) {
    return
  }
  let value_
  switch (item.name) {
    case 'cascader':
      value_ = setCascaderValue(value, item)
      break
    case 'select':
      value_ = setSelectValue(
        value,
        item,
        fieldConfig,
        props.store?.[key],
      )
      break
    default:
      value_ = value
  }
  setValueByPath(model_.value, item.props?.prop, value_)
  if (isUsingVModel.value) {
    setValueByPath(props.model, item.props?.prop, value_)
  }
}

const emitChange = (model, prop) => {
  emit('change', model, prop)
}

const debouncedEmitChange = debounce(emitChange, 500)

function formChange(item: IComponent, ...args) {
  setValueByPath(model_.value, item.props?.prop, args[0])

  if (isUsingVModel.value) {
    setValueByPath(props.model, item.props?.prop, args[0])
  }
  if (rememberUserSelections_.value && props.autoRemember) {
    saveStorageData()
  }
  if (item.props?.autoEmitChange !== false) {
    debouncedEmitChange(model_.value, item.props?.prop)
  }
}

function formInputKeyEnter(item: IComponent, ...args) {
  emitChange(model_.value, item.props?.prop)
}

function formInputBlur(item: IComponent, ...args) {
  if (item.props?.autoEmitChange === false) {
    debouncedEmitChange(model_.value, item.props?.prop)
  }
}

function loadStorageData() {
  if (rememberUserSelections_.value) {
    const value = getStorageData(props.rememberUserKey)
    props.components?.forEach((item) => {
      setValue(item.props.prop, getPropByPath(value, item.props.prop, true).v, item)
    })
    saveStorageData()
    // emit('update:value', model_.value)
  } else {
    if (props.rememberUserKey) {
      window.localStorage.removeItem(props.rememberUserKey)
      window.sessionStorage.removeItem(props.rememberUserKey)
    }
  }
}

function saveStorageData() {
  if (rememberUserSelections_.value) {
    window.localStorage.setItem(props.rememberUserKey as string, JSON.stringify(model_.value))
    window.sessionStorage.setItem(props.rememberUserKey as string, JSON.stringify(model_.value))
  }
}

defineExpose({
  loadStorageData,
  saveStorageData,
})

const changeRememberHandler = (value: boolean) => {
  rememberUserSelections_.value = value
  // 如果是自动缓存的时候，切换是否记忆的开关也需要进行保存。
  if (props.autoRemember) {
    if (rememberUserSelections_.value) {
      saveStorageData()
    } else {
      window.localStorage.setItem(props.rememberUserKey as string, JSON.stringify({}))
      window.sessionStorage.setItem(
        props.rememberUserKey as string,
        JSON.stringify({}),
      )
    }
  }
  setIsRemember()
}
</script>
