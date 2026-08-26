<template>
  <c-filter-form
    v-model="filter"
    v-model:collapsed="collapsed"
    :fields="fields"
    :field-map="fieldMap"
    :options-map="optionsMap"
    :rules="rules"
    @change="onChange"
  >
    <template #actions>
      <c-space>
        <c-button @click="reset">重置</c-button>
        <c-button status="primary" @click="search">搜索</c-button>
      </c-space>
    </template>
  </c-filter-form>
  <pre class="demo-filter-json">{{ filter }}</pre>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Cascader,
  DateRange,
  Input,
  Select,
  type FilterFormField,
  type FilterFormFieldMap,
} from '@cedarjs/ui'

const collapsed = ref(true)
const filter = ref<Record<string, unknown>>({
  region: undefined,
  status: undefined,
  keyword: '',
  timeRange: undefined,
})

const fieldMap: FilterFormFieldMap = {
  cascader: {
    component: Cascader,
  },
  select: {
    component: Select,
    optionsFromMap: true,
  },
  input: {
    component: Input,
    valueEvent: 'update:modelValue',
  },
  'date-range': {
    component: DateRange,
    defaultProps: {
      valueFormat: 'timestamp',
    },
  },
}

const optionsMap = {
  status: [
    { label: '待处理', value: 'pending' },
    { label: '进行中', value: 'doing' },
    { label: '已完成', value: 'done' },
  ],
  owner: [
    { label: '张三', value: 'zhang' },
    { label: '李四', value: 'li' },
  ],
}

const rules = {
  keyword: [{ maxLength: 50, message: '最多 50 个字符' }],
}

const fields: FilterFormField[] = [
  {
    type: 'cascader',
    field: 'region',
    label: '地区',
    props: {
      clearable: true,
      pathMode: true,
      options: [
        {
          value: 'beijing',
          label: '北京',
          children: [
            { value: 'chaoyang', label: '朝阳' },
            { value: 'haidian', label: '海淀' },
          ],
        },
        {
          value: 'shanghai',
          label: '上海',
          children: [{ value: 'huangpu', label: '黄浦' }],
        },
      ],
    },
  },
  {
    type: 'select',
    field: 'status',
    label: '状态',
    props: { clearable: true, placeholder: '全部' },
  },
  {
    type: 'select',
    field: 'owner',
    label: '负责人',
    props: { clearable: true, placeholder: '全部' },
  },
  {
    type: 'input',
    field: 'keyword',
    label: '关键词',
    autoEmitChange: false,
    props: { clearable: true, placeholder: '回车或失焦触发' },
  },
  {
    type: 'date-range',
    field: 'timeRange',
    label: '时间范围',
    gridItemProps: { span: 2 },
    props: { clearable: true, showTime: true },
  },
]

function onChange(_value: Record<string, unknown>, field: string) {
  console.log('[FilterForm] change', field)
}

function search() {
  console.log('[FilterForm] search', filter.value)
}

function reset() {
  filter.value = {
    region: undefined,
    status: undefined,
    keyword: '',
    timeRange: undefined,
  }
}
</script>

<style scoped>
.demo-filter-json {
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 4px;
  background: var(--color-fill-2, #f2f3f5);
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
