<template>
  <InputGroup
    :class="{
      'cedar-search': true,
      'cedar-search-noselect': !fields.length,
    }"
  >
    <Select v-if="fields.length" :modelValue="searchField_" :style="selectStyle" bordered @change="onSelectChange">
      <Option v-for="item in fields" :key="item.value" :value="item.value">
        {{ item.label }}
      </Option>
    </Select>
    <div ref="wrapper" class="cedar-search-input-wrapper">
      <Input
        ref="ins"
        v-model:modelValue="searchText_"
        :placeholder="placeholder"
        clearable
        @change="onInputChange"
        @click="showHistoryPop"
        @clear="onInputClear"
        @input="onInput"
        @keyup="onKeyUp"
      >
        <template #suffix>
          <IconSearch class="search-icon" @click="onSearch" />
        </template>
      </Input>
    </div>
    <Dropdown
      v-if="enableSearchHistory && data_.length && searchHistoryKey"
      v-model:popup-visible="visible"
      :popup-container="wrapper"
      trigger="click"
    >
      <template #content>
        <Doption v-for="item in data_" :key="item" @click="onSelect(item)">{{ item }}</Doption>
      </template>
    </Dropdown>
  </InputGroup>
</template>
<script lang="ts" setup>
import type { AutoCompleteInstance } from '@cedar/ui'
import { computed, ref, watch, getCurrentInstance } from 'vue'
import { InputGroup, Input } from '@arco-design/web-vue'
import Dropdown, { Doption } from '../dropdown'
import type { SearchField, SearchProps } from './props'
import type { SearchResult } from './result'
import Select, { Option } from '../select'
import { IconSearch } from '../icon'
import { searchHistory } from './search-history'

defineOptions({
  name: 'Search',
})
const props = withDefaults(defineProps<SearchProps>(), {
  fields: () => [],
  enableSearchHistory: true,
  searchHistoryMaxCount: 5,
})
const emit = defineEmits(['search', 'change', 'update:searchText', 'update:searchField'])
const instance = getCurrentInstance()
const isUsingModelValue = computed(() => {
  return props?.model !== undefined
})
const isUsingVModel = computed(() => {
  // 判断是否传入了 `modelValue` prop 并且有 `update:modelValue` 事件监听器
  return Boolean(isUsingModelValue.value && instance?.vnode.props && instance.vnode.props['onUpdate:model'])
})
const ins = ref<AutoCompleteInstance>()
const wrapper = ref<HTMLElement>()
const model_ = ref()
const visible = ref(false)
const searchText_ = ref()
const searchField_ = ref()
const data_ = ref<string[]>([])
const { push, getArray } = searchHistory(props.searchHistoryKey as string, props.searchHistoryMaxCount as number)

data_.value = getArray()

const updateModel = () => {
  model_.value = model_.value || {}
  props.fields?.forEach((item) => {
    model_.value[item.value as string] = undefined
    if (isUsingVModel.value) {
      ;(props.model as any)[item.value as string] = undefined
    }
  })
  if (searchField_.value) {
    model_.value[searchField_.value as string] = searchText_.value
    if (isUsingVModel.value) {
      ;(props.model as any)[searchField_.value as string] = searchText_.value
    }
  }
}

function emitSearch() {
  emit('search', {
    searchField: searchField_.value,
    searchText: searchText_.value,
    model: model_.value,
  } as SearchResult)
  push(searchText_.value)
  data_.value = getArray()
  visible.value = false
}

// 回车和enter的时候都触发。
const onSearch = (e: Event) => {
  e.stopPropagation()
  updateModel()
  emitSearch()
}
const onSelect = (item) => {
  searchText_.value = item
  emit('update:searchText', searchText_.value)
  updateModel()
  emitSearch()
  emit('change', {
    searchField: searchField_.value,
    searchText: searchText_.value,
    model: model_.value,
  } as SearchResult)
}
const onKeyUp = (e: KeyboardEvent) => {
  if (e.code === 'Enter') {
    updateModel()
    emitSearch()
    ins.value?.blur()
  }
}

const onSelectChange = (val: any) => {
  ins.value?.focus()
  searchField_.value = val
  searchText_.value = undefined
  emit('update:searchText', searchText_.value)
  emit('update:searchField', searchField_.value)
  updateModel()
  emit('change', {
    searchField: searchField_.value,
    searchText: searchText_.value,
    model: model_.value,
  } as SearchResult)
}

const showHistoryPop = () => {
  visible.value = true
}

const onInputChange = (val: any) => {
  searchText_.value = val
  emit('update:searchText', searchText_.value)
}

const onInputClear = () => {
  emit('update:searchText', searchText_.value)
  updateModel()
  emit('change', {
    searchField: searchField_.value,
    searchText: searchText_.value,
    model: model_.value,
  } as SearchResult)
}

const onInput = (val: string) => {
  searchText_.value = val
  emit('update:searchText', searchText_.value)
  updateModel()
  emit('change', {
    searchField: searchField_.value,
    searchText: searchText_.value,
    model: model_.value,
  } as SearchResult)
}

const placeholder = computed(() => {
  const selected = props.fields.find((item: SearchField) => item.value === searchField_.value)
  return selected?.placeholder || props.placeholder
})

function init() {
  if (props.fields.length && props.defaultField) {
    searchField_.value = props.defaultField
  } else if (props.fields.length && props.searchField) {
    searchField_.value = props.searchField
  } else if (props.fields.length) {
    searchField_.value = props.fields[0]?.value
  }
}

// 先init，再watch。
init()

watch(
  () => props.searchText,
  (v) => {
    searchText_.value = v
    updateModel()
  },
  { immediate: true },
)

// 不需要 immediate ，初始化默认是下拉框中的第一个值。
watch(
  () => props.searchField,
  (v) => {
    searchField_.value = v
    updateModel()
  },
)

// 不需要 immediate ，初始化默认是下拉框中的第一个值。
watch(
  () => props.defaultField,
  (v) => {
    searchField_.value = v
    updateModel()
  },
)

watch(
  () => props.model,
  (value) => {
    if (props.fields?.length) {
      let isSame = true
      for (let field of props.fields) {
        if (!!value[field.value] !== !!model_.value[field.value]) {
          isSame = false
          break
        }
      }
      if (isSame) {
        return
      }
    }
    model_.value = { ...(value || {}) }
    if (searchField_.value && !model_.value[searchField_.value]) {
      searchText_.value = undefined
    }
    if (searchField_.value && model_.value[searchField_.value]) {
      searchText_.value = model_.value[searchField_.value]
    }
    if (props.fields?.length) {
      let isSelected = false
      props.fields?.forEach((item) => {
        if (value[item.value] || (typeof value[item.value] === 'string' && value[item.value]?.trim() !== '')) {
          isSelected = true
        }
      })
      if (!isSelected) {
        searchField_.value = props.defaultField || props.fields[0]
      }
    }
  },
  { immediate: true, deep: true },
)
</script>
