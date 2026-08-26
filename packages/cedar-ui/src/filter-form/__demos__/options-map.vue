<template>
  <c-space direction="column" style="width: 100%">
    <c-alert>
      optionsMap 可异步填充；字段通过 `optionsFromMap` 从 `optionsMap[field]` 取 options。
    </c-alert>
    <c-filter-form
      v-model="filter"
      :fields="fields"
      :field-map="fieldMap"
      :options-map="optionsMap"
      :collapsed="false"
      :collapsible="false"
      @change="onChange"
    >
      <template #actions>
        <c-space>
          <c-button @click="reset">重置</c-button>
          <c-button status="primary" @click="search">搜索</c-button>
        </c-space>
      </template>
    </c-filter-form>
  </c-space>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import {
  Input,
  Select,
  type FilterFormField,
  type FilterFormFieldMap,
} from '@cedarjs/ui'

const filter = ref<Record<string, unknown>>({
  category: undefined,
  tag: undefined,
  name: '',
})

const fieldMap: FilterFormFieldMap = {
  select: {
    component: Select,
    optionsFromMap: true,
  },
  input: {
    component: Input,
    valueEvent: 'update:modelValue',
  },
}

const optionsMap = ref<Record<string, unknown>>({
  category: [],
  tag: [],
})

const fields: FilterFormField[] = [
  {
    type: 'select',
    field: 'category',
    label: '分类',
    props: { clearable: true, placeholder: '加载中…' },
  },
  {
    type: 'select',
    field: 'tag',
    label: '标签',
    props: { clearable: true, multiple: true, placeholder: '加载中…' },
  },
  {
    type: 'input',
    field: 'name',
    label: '名称',
    props: { clearable: true },
  },
]

onMounted(() => {
  window.setTimeout(() => {
    optionsMap.value = {
      category: [
        { label: '组件', value: 'component' },
        { label: '工具', value: 'tool' },
      ],
      tag: [
        { label: '推荐', value: 'hot' },
        { label: '新品', value: 'new' },
      ],
    }
  }, 800)
})

function onChange() {
  // demo
}

function search() {
  console.log('[FilterForm] search', filter.value)
}

function reset() {
  filter.value = {
    category: undefined,
    tag: undefined,
    name: '',
  }
}
</script>
