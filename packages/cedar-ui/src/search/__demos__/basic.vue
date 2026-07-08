<template>
  <c-search
    v-model:searchText="model.id"
    placeholder="请输入id或名称"
    searchHistoryKey="__search_test__"
    style="width: 300px"
    @search="handleSearch"
    @change="handleChange" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { SearchResult } from '@cedar/ui'

export default defineComponent({
  setup() {
    const searchText = ref('')
    const searchField = ref('id')
    const model = ref({ id: '2' })
    const handleSearch = (obj: SearchResult) => {
      console.log('search')
      console.log(obj)
      console.log('id', model.value.id)
    }

    const handleChange = (obj: SearchResult) => {
      console.log('change')
      console.log(obj)
      console.log(model.value)
    }

    return { searchText, searchField, model, handleSearch, handleChange }
  },
})
</script>
