<template>
  <c-space direction="column" style="width: 100%">
    <c-alert>
      异步加载选项后，通过 computed 更新字段的 props.options。
    </c-alert>
    <c-filter-form
      v-model="filter"
      :fields="fields"
      :collapsed="false"
      :collapsible="false"
    >
      <template #actions>
        <c-space>
          <c-button @click="reset">重置</c-button>
          <c-button status="primary" @click="search">搜索</c-button>
        </c-space>
      </template>
    </c-filter-form>
  </c-space>
  <p role="status">{{ result }}</p>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import {
  Input,
  Select,
  type FilterFormField,
} from '@cedar-design/ui'

const filter = ref<Record<string, unknown>>({
  category: undefined,
  tag: undefined,
  name: '',
})

const options = ref<Record<string, unknown>>({
  category: [],
  tag: [],
})

const fields = computed<FilterFormField[]>(() => [
  {
    component: Select,
    field: 'category',
    label: '分类',
    props: { clearable: true, placeholder: '请选择', options: options.value.category },
  },
  {
    component: Select,
    field: 'tag',
    label: '标签',
    props: { clearable: true, multiple: true, placeholder: '请选择', options: options.value.tag },
  },
  {
    component: Input,
    field: 'name',
    label: '名称',
    props: { clearable: true },
  },
])

let timer: ReturnType<typeof setTimeout>
onUnmounted(() => clearTimeout(timer))

onMounted(() => {
  timer = setTimeout(() => {
    options.value = {
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

const result = ref('尚未搜索')
function search() {
  result.value = `搜索条件：${JSON.stringify(filter.value)}`
}

function reset() {
  filter.value = {
    category: undefined,
    tag: undefined,
    name: '',
  }
}
</script>
