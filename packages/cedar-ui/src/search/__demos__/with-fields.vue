<template>
  <c-search
    v-model:model="model"
    :default-field="searchField"
    :fields="fields"
    :selectStyle="{ minWidth: '200px' }"
    placeholder="请输入id或名称"
    searchHistoryKey="__search_test1__"
    @change="handleChange"
    @search="handleSearch" />
  <c-button @click="reset">reset</c-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { SearchField, SearchResult } from '@cedar/ui'

export default defineComponent({
  setup() {
    const searchText = ref('')
    const searchField = ref('name')
    const model = ref<any>({})

    const fields: SearchField[] = [
      {
        value: 'id',
        label: '设备ID',
        placeholder: '请输入ID',
      },
      {
        value: 'name',
        label: '设备名称',
        placeholder: '请输入名称',
      },
      {
        value: 'desc',
        label: '设备描述',
      },
    ]

    const handleSearch = (obj: SearchResult) => {
      console.log('search')
      console.log(JSON.stringify(model))
      console.log(obj)
      console.log('model', model.value)
    }

    const handleChange = (obj: SearchResult) => {
      console.log('change')
      console.log(model)
      console.log(obj)
    }

    const reset = (obj: SearchResult) => {
      model.value = {}
    }

    return {
      searchText,
      searchField,
      model,
      fields,
      handleSearch,
      handleChange,
      reset,
    }
  },
})
</script>
